import React, { useState, useRef, useEffect } from 'react';
import { questionsConfig } from './questionsConfig';
import backgroundImg from '../static/background.jpg';
import logoImg from '../static/logo.png';

const NakiKapayimQuestionnaire = () => {
  const [currentPath, setCurrentPath] = useState('occupation');
  const [currentQuestion, setCurrentQuestion] = useState('occupation');
  const [answers, setAnswers] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [questionHistory, setQuestionHistory] = useState([{ questionId: 'occupation', path: 'occupation' }]);
  const [answerDetails, setAnswerDetails] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customPlaceholder, setCustomPlaceholder] = useState('הכנס מספר...');
  const [totalQuestions, setTotalQuestions] = useState(58); // Default to max (employee path)

  const scrollContainerRef = useRef(null);

  const getCurrentQuestionData = () => {
    if (currentQuestion === 'occupation') {
      return questionsConfig.occupation;
    }

    const pathQuestions = questionsConfig[currentPath];
    if (pathQuestions && pathQuestions[currentQuestion]) {
      return pathQuestions[currentQuestion];
    }

    const generalQuestions = questionsConfig['general-questions'];
    if (generalQuestions && generalQuestions[currentQuestion]) {
      return generalQuestions[currentQuestion];
    }

    return null;
  };

  const calculateAmount = (questionData, answer, previousAnswers = {}) => {
    if (questionData.amount && answer === 'yes') {
      return questionData.amount;
    }

    // Handle family-expenses-frequency special case
    if (questionData.id === 'family-expenses-frequency' && answer === 'no') {
      return previousAnswers['family-expenses-amount'] || 0;
    }

    if (questionData.id === 'faithfulness-frequency' && answer === 'no') {
      return previousAnswers['faithfulness-damage-amount'] || 0;
    }

    if (questionData.calculation) {
      switch (questionData.calculation) {
        case 'multiply-previous':
          let frequency = previousAnswers['error-frequency'] ||
                         previousAnswers['faithfulness-damage-amount'] ||
                         previousAnswers['unfair-payment-frequency'] ||
                         previousAnswers['misleading-frequency'] ||
                         previousAnswers['family-expenses-times'] || 1;

          let amount = typeof answer === 'number' ? answer : 0;

          // Handle family expenses calculation
          if (questionData.id === 'family-expenses-times') {
            amount = previousAnswers['family-expenses-amount'] || 0;
            frequency = typeof answer === 'number' ? answer : 0;
          }

          return frequency * amount;

        case 'loan-calculation':
          if (answer === 'no') {
            const loanAmount = previousAnswers['loan-amount'] || 0;
            const loanFreq = previousAnswers['loan-frequency'] || 0;
            return Math.round((loanAmount * loanFreq) / 3);
          }
          break;

        case 'neighbor-calculation':
          if (answer === 'no') {
            const neighborFreq = previousAnswers['neighbor-frequency'] || 0;
            return Math.round((neighborFreq * 10) / 3);
          }
          break;

        case 'complex-time-calculation':
          const percentage = previousAnswers['inaccuracy-percentage'] || 0;
          const cost = previousAnswers['single-inaccuracy-cost'] || 0;
          const freq = typeof answer === 'number' ? answer : 0;
          return Math.round((percentage / 100) * cost * freq * 12); // Monthly calculation

        case 'option-value':
          return typeof answer === 'number' ? answer : 0;

        case 'service-provider-calculation':
          // Inferring based on path: clients * (defPerc/100) * avg * (actDef/100) * freq
          // Plus damage if applicable: but for now, base on deficiency; damage might be separate
          const clients = previousAnswers['business-clients-count'] || 0;
          const defPerc = previousAnswers['service-deficiency-percentage'] || 0;
          const avgTransaction = previousAnswers['transaction-average'] || 0;
          const actDefPerc = previousAnswers['actual-deficiency-percentage'] || 0;
          const service_freq = typeof answer === 'number' ? answer : 0;
          // For damage-scope, if present, add midpoint * prob factor * freq, but simplified here
          const damageScope = previousAnswers['damage-scope'] || 0;
          const damageFactor = damageScope > 0 ? (damageScope / 2) * service_freq : 0; // Midpoint approximation
          return Math.round(clients * (defPerc / 100) * avgTransaction * (actDefPerc / 100) * service_freq + damageFactor);

        case 'product-seller-calculation':
          const productsSold = previousAnswers['products-sold-annually'] || 0;
          const avgPrice = previousAnswers['average-product-price'] || 0;
          const defectPerc = previousAnswers['defective-percentage'] || 0;
          return Math.round(productsSold * (defectPerc / 100) * avgPrice);
      }
    }

    return 0;
  };

  const getQuestionText = (questionId) => {
    // Search in all question sections
    if (questionId === 'occupation') {
      return questionsConfig.occupation.text;
    }

    for (const [pathKey, pathQuestions] of Object.entries(questionsConfig)) {
      if (pathKey !== 'occupation' && pathQuestions[questionId]) {
        return pathQuestions[questionId].text;
      }
    }

    return questionId;
  };

  const getAnswerText = (questionId, answer) => {
    const questionData = getCurrentQuestionDataById(questionId);
    if (!questionData) return answer?.toString() || '';

    if (questionData.type === 'yes-no') {
      return answer === 'yes' ? 'כן' : 'לא';
    }

    if (questionData.options) {
      const option = questionData.options.find(opt => opt.value === answer);
      return option?.text || answer?.toString() || '';
    }

    return answer?.toString() || '';
  };

  const getCurrentQuestionDataById = (questionId) => {
    if (questionId === 'occupation') {
      return questionsConfig.occupation;
    }

    for (const [pathKey, pathQuestions] of Object.entries(questionsConfig)) {
      if (pathKey !== 'occupation' && pathQuestions[questionId]) {
        return pathQuestions[questionId];
      }
    }

    return null;
  };

  const handleCustomOptionClick = (option) => {
    if (option.value === 'custom') {
      setShowCustomInput(true);
      setCustomPlaceholder(option.placeholder || 'הכנס מספר...');
    } else {
      handleAnswer(option.value);
    }
  };

  const handleCustomInputSubmit = () => {
    if (customInput <= 0) {
      alert("המספר חייב להיות גדול מ 0");
      return;
    }
    if (customInput.trim()) {
      handleAnswer('custom');
    }
  };

  const handleAnswer = (answer) => {
    const questionData = getCurrentQuestionData();
    if (!questionData) return;

    // Handle custom input
    let finalAnswer = answer;
    let displayAnswer = answer;

    if (answer === 'custom' && customInput) {
      finalAnswer = parseFloat(customInput) || 0;
      displayAnswer = customInput;
    }

    const newAnswers = { ...answers, [currentQuestion]: finalAnswer };
    setAnswers(newAnswers);

    // Calculate amount to add
    const amountToAdd = calculateAmount(questionData, finalAnswer, newAnswers);

    // Store answer details for summary
    let answerText;
    if (answer === 'custom') {
      answerText = `${displayAnswer}`;
    } else {
      answerText = getAnswerText(currentQuestion, finalAnswer);
    }

    const newAnswerDetails = [...answerDetails, {
      questionId: currentQuestion,
      questionText: questionData.text,
      answer: finalAnswer,
      answerText: answerText,
      section: questionData.section,
      icon: questionData.icon,
      amount: amountToAdd
    }];
    setAnswerDetails(newAnswerDetails);

    if (amountToAdd > 0) {
      setTotalAmount(prev => prev + amountToAdd);
    }

    // Reset custom input state
    setCustomInput('');
    setShowCustomInput(false);
    setCustomPlaceholder('הכנס מספר...');

    // Determine next question
    let nextQuestion = null;
    let nextPath = currentPath;

    if (currentQuestion === 'occupation') {
      setCurrentPath(finalAnswer);
      nextPath = finalAnswer;
      const pathTotals = {
        'tent-dweller': 47,
        'employee': 58,
        'business-owner': 54 // Default for service-provider
      };
      setTotalQuestions(pathTotals[finalAnswer] || 54);
      const pathQuestions = questionsConfig[finalAnswer];
      nextQuestion = Object.keys(pathQuestions)[0];
    } else {
      if (questionData.type === 'yes-no') {
        nextQuestion = finalAnswer === 'yes' ? questionData.nextYes : questionData.nextNo;
      } else {
        nextQuestion = questionData.next;
      }

      if (!nextQuestion && questionsConfig[finalAnswer]) {
        setCurrentPath(finalAnswer);
        nextPath = finalAnswer;
        const subPathTotals = {
          'service-provider': 54,
          'product-seller': 49,
          'broker': 52
        };
        setTotalQuestions(subPathTotals[finalAnswer] || 54);
        nextQuestion = Object.keys(questionsConfig[finalAnswer])[0];
      }

      // If we're in a path-specific section and the next question is general-questions,
      // move to general questions
      if (nextQuestion === 'general-questions') {
        setCurrentPath('general-questions');
        nextPath = 'general-questions';
        nextQuestion = 'small-loans';
        const generalQuestions = questionsConfig['general-questions'];
        const maxGeneralQuestionNumber = Math.max(
          ...Object.values(generalQuestions).map(q => q.questionNumber)
        );
        setTotalQuestions(maxGeneralQuestionNumber);
      }

      // If we've reached the end
      if (nextQuestion === 'summary' || !nextQuestion) {
        setIsComplete(true);
        return;
      }
    }

    setCurrentQuestion(nextQuestion);
    setQuestionHistory(prev => [...prev, { questionId: nextQuestion, path: nextPath }]);
  };

  const handleNext = () => {
    // Skip to next question without answering (if needed)
    const questionData = getCurrentQuestionData();
    if (!questionData) return;

    let nextQuestion = null;
    let nextPath = currentPath;

    if (currentQuestion === 'occupation') {
      // Can't skip occupation question
      return;
    } else {
      if (questionData.type === 'yes-no') {
        nextQuestion = questionData.nextNo; // Default to "no" path
      } else {
        nextQuestion = questionData.next;
      }

      if (!nextQuestion && questionsConfig['general-questions']) {
        setCurrentPath('general-questions');
        nextPath = 'general-questions';
        nextQuestion = 'small-loans';
        const generalQuestions = questionsConfig['general-questions'];
        const maxGeneralQuestionNumber = Math.max(
          ...Object.values(generalQuestions).map(q => q.questionNumber)
        );
        setTotalQuestions(maxGeneralQuestionNumber);
      }

      if (nextQuestion === 'general-questions') {
        setCurrentPath('general-questions');
        nextPath = 'general-questions';
        nextQuestion = 'small-loans';
      }

      if (nextQuestion === 'summary' || !nextQuestion) {
        setIsComplete(true);
        return;
      }
    }

    setCurrentQuestion(nextQuestion);
    setQuestionHistory(prev => [...prev, { questionId: nextQuestion, path: nextPath }]);
  };

  const handleBack = () => {
    if (questionHistory.length <= 1) return;

    const newHistory = [...questionHistory];
    newHistory.pop(); // Remove current question
    const previousEntry = newHistory[newHistory.length - 1];
    const previousQuestion = previousEntry.questionId;
    const previousPath = previousEntry.path;

    // Remove the answer for the current question and its details
    const newAnswers = { ...answers };
    delete newAnswers[previousQuestion];

    const newAnswerDetails = answerDetails.filter(detail => detail.questionId !== previousQuestion);
    const newTotal = newAnswerDetails.reduce((sum, detail) => sum + detail.amount, 0);

    setQuestionHistory(newHistory);
    setCurrentQuestion(previousQuestion);
    setCurrentPath(previousPath);
    setAnswerDetails(newAnswerDetails);
    setTotalAmount(newTotal);

    // Set totalQuestions based on the previous path
    const pathMaxNumbers = {
      'tent-dweller': 47,
      'employee': 58,
      'service-provider': 54,
      'product-seller': 49,
      'broker': 52,
      'general-questions': 58
    };

    if (previousQuestion === 'occupation') {
      setTotalQuestions(58);
    } else {
      setTotalQuestions(pathMaxNumbers[previousPath] || 58);
    }

    // Reset custom input state
    setCustomInput('');
    setShowCustomInput(false);
    setCustomPlaceholder('הכנס מספר...');
  };

  const handleFinishEarly = () => {
    setIsComplete(true);
  };

  const getProgress = () => {
    if (isComplete) return 100;

    const questionData = getCurrentQuestionData();
    if (!questionData) return 0;

    const currentQuestionNumber = questionData.questionNumber || 1;
    if (totalQuestions <= 0) return 0;

    return Math.min((currentQuestionNumber / totalQuestions) * 100, 100);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 999999,
        behavior: 'smooth'
      });
    }
  }, [answerDetails.length]);

  if (isComplete) {
    const totalCompleteAmount = totalAmount.toLocaleString();
    return (
      <div
        className="min-h-screen p-4 font-rubik"
        dir="rtl"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">סיכום השאלון</h2>
              <p className="text-gray-600">השאלון הושלם בהצלחה</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 mb-6">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-2">הסכום הכולל להשבה:</p>
                <p className="text-4xl font-bold text-teal-600">{totalCompleteAmount} ש"ח</p>
              </div>
            </div>

            {/* Detailed Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 max-h-96 overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">פירוט השאלות והתשובות:</h3>
              <div className="space-y-3">
                {answerDetails.map((detail, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 font-medium">{detail.questionText}</p>
                        <p className="text-sm text-teal-600">{detail.answerText}</p>
                      </div>
                      {detail.amount > 0 && (
                        <div className="text-sm font-semibold text-teal-700 mr-4">
                          +{detail.amount.toLocaleString()} ש"ח
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 mb-6">
              <div className="text-sm text-yellow-800">
                <p className="font-semibold mb-2">שים לב!</p>
                <p className="mb-2">השאלון והסכומים הינם על פי השערה בלבד והם נועדו לסייע לך להגיע לחקר האמת.</p>
                <p className="mb-2">אין בדברים כדי להעיד על חוב כלשהו שלך.</p>
                <p>במידה והנך מעריך את התוצאות באופן שונה, עליך לשער את סכום ההשבה בעצמך.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <input
                  type="number"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-32 p-3 border border-gray-300 rounded-lg text-center text-lg font-semibold"
                  min="0"
                />
                <a
                  href={`/${totalAmount}`}
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors inline-block text-lg font-semibold"
                >
                  עבור לתשלום - {totalAmount.toLocaleString()} ש"ח
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const questionData = getCurrentQuestionData();
  if (!questionData) return null;

  return (
      <div
          className="min-h-screen p-4 font-rubik"
          dir="rtl"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
      >
        <div className="lg:absolute lg:top-4 lg:left-4 lg:w-60">
          <img src={logoImg} alt="Logo" className="lg:w-full lg:h-full m-auto w-48" />
        </div>
        <div className="max-w-4xl mx-auto lg:mt-[100px]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[35px] md:text-[75px] text-[#a1d1f6] font-[600] font-h1 mb-2 tracking-tighter">האם אני נקי כפיים?</h1>
          </div>

          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">התקדמות</span>
                <span className="text-sm text-center text-gray-600 min-w-[50px]">{Math.round(getProgress())}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                    style={{width: `${getProgress()}%`}}
                ></div>
              </div>
            </div>

            {/* Main Content - Split Layout */}
            <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
              {/* Right Side - Question and Options (65%) */}
              <div className="flex flex-col lg:basis-[60%]">
                {/* Question Section */}
                <div className="mb-8 lg:mr-4 flex-grow">
                  <div className="flex items-center mb-10 justify-start mb-4">
                    {questionData.icon && (
                        <img
                            src={questionData.icon}
                            alt="Question Icon"
                            className="w-16 flex-shrink-0"
                        />
                    )}
                    {questionData.section && (
                        <h3 className="text-2xl font-semibold text-[#b4cfd4]">
                          {questionData.section}
                        </h3>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-10 leading-relaxed flex">
                    {questionData.text}
                  </h2>

                  {/* Answer Options */}
                  <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                    {questionData.type === 'yes-no' ? (
                        <>
                          <button
                              onClick={() => handleAnswer('yes')}
                              className="col-span-1 p-4 text-center bg-white hover:bg-[#a1d1f6] border border-gray-200 hover:border-2 hover:border-[#0c7e96] rounded-lg transition-colors flex items-center justify-center"
                          >
                            {questionData.iconYes ? (
                                <img
                                    src={questionData.iconYes}
                                    alt="Yes Icon"
                                    className="w-6 h-6"
                                />
                            ) : (
                                <div className="text-2xl text-[#0C7E96]">כן</div>
                            )}
                          </button>
                          <button
                              onClick={() => handleAnswer('no')}
                              className="col-span-1 p-4 text-center bg-white hover:bg-[#a1d1f6] border border-gray-200 hover:border-2 hover:border-[#0c7e96] rounded-lg transition-colors flex items-center justify-center"
                          >
                            {questionData.iconNo ? (
                                <img
                                    src={questionData.iconNo}
                                    alt="No Icon"
                                    className="w-6 h-6"
                                />
                            ) : (
                                <span className="text-2xl text-[#0C7E96]">לא</span>
                            )}
                          </button>
                        </>
                    ) : (
                        questionData.options?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleCustomOptionClick(option)}
                                className="min-h-[80px] text-center bg-white hover:bg-[#a1d1f6] border border-gray-200 hover:border-2 hover:border-[#0c7e96] rounded-lg transition-colors flex items-center justify-center"
                            >
                              {option.icon ? (
                                  <img
                                      src={option.icon}
                                      alt={`${option.text} Icon`}
                                      className="max-w-full max-h-full"
                                  />
                              ) : (
                                <span className='text-center p-4'>{option.text}</span>
                              )}
                            </button>
                        ))
                    )}
                  </div>

                  {/* Custom input field */}
                  {showCustomInput && (
                    <div className="w-full mt-4 flex gap-2">
                      <input
                        type="number"
                        value={customInput}
                        min="1"
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder={customPlaceholder}
                        className="flex-1 p-3 border border-gray-300 rounded-lg text-center"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleCustomInputSubmit();
                          }
                        }}
                      />
                      <button
                        onClick={handleCustomInputSubmit}
                        disabled={!customInput.trim()}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        אישור
                      </button>
                    </div>
                  )}

                  {questionData.comment && (
                    <p className="mt-4 text-gray-600 text-sm">{questionData.comment}</p>
                  )}
                </div>

                {/* Navigation Arrows - At bottom of right section */}
                <div className="flex justify-between items-center gap-8 mt-8 mb-4">
                  <button
                      onClick={handleBack}
                      disabled={questionHistory.length <= 1}
                      className={`px-4 py-2 rounded-full transition-colors ${
                          questionHistory.length <= 1
                              ? 'text-gray-400 disabled'
                              : 'text-[#0C7E96]'
                      }`}
                  >
                    &lt; חזור
                  </button>

                  <button
                      onClick={handleNext}
                      disabled={currentQuestion === 'occupation'}
                      className={`px-4 py-2 rounded-full transition-colors ${
                          currentQuestion === 'occupation'
                              ? 'text-gray-400 disabled'
                              : 'text-[#0C7E96]'
                      }`}
                  >
                    דלג &gt;
                  </button>
                </div>
              </div>

              {/* Left Side - Amount Details (35%) */}
              <div className="bg-white rounded-[7px] border border-[#000000A8] p-3 flex flex-col lg:basis-[40%]" style={{angle: '0deg', opacity: 1, borderWidth: '0.5px'}}>
                {/* Current Total */}
                {/* <div className="bg-teal-50 rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">סכום נוכחי להשבה</p>
                    <p className="text-2xl font-bold text-teal-600">{totalAmount.toLocaleString()} ש"ח</p>
                  </div>
                </div> */}

                {/* Question History */}
                <div className="mb-4 flex-1">
                  <h4 className="mb-3 flex justify-end ml-3" style={{ fontFamily: 'Rubik', fontWeight: 400, fontStyle: 'normal', fontSize: '25px', lineHeight: '100%', letterSpacing: '-3%', color: '#B4CFD4' }}>סיכום ביניים</h4>
                  <div ref={scrollContainerRef} className="max-h-[300px] overflow-y-auto space-y-2">
                    {answerDetails.map((detail, index) => (
                      <div key={index} className="bg-white rounded p-3 border-b-2">
                        <div className="mb-1 flex" style={{fontFamily: 'Rubik', fontStyle: 'Light', lineHeight: '100%', letterSpacing: '-3%', color: '#0E4952'}}>
                          <img 
                            alt="Answered section Icon"
                            className="w-8 h-8 flex-shrink-0"
                            src={detail.icon}
                          />
                          <div className='mt-2 mr-2'>{detail.section}</div>
                        </div>
                        <div className="text-s">{detail.questionText}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-teal-600 font-medium">{detail.answerText}</span>
                          {detail.amount > 0 && (
                            <span className="text-sm font-semibold text-teal-700">
                              {detail.amount.toLocaleString()} ש"ח
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Summary */}
                <div className="border-t-2 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">סכום נוכחי להשבה</span>
                    <span className="text-xl font-bold text-teal-600">{totalAmount.toLocaleString()} ש"ח</span>
                  </div>
                </div>
                
                {/* Finish Early Button */}
                <div className="mt-4">
                  <a
                    href={`/${totalAmount}`}
                    className="w-full py-3 text-white rounded-[7px] transition-colors text-lg font-medium block text-center"
                    style={{
                      background: '#0E4952',
                      border: '0.5px solid #FFFFFFA8',
                      opacity: 1,
                      textDecoration: 'none'
                    }}
                  >
                    לקיום "השבה" על הסכום או חלקו
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
);
};

export default NakiKapayimQuestionnaire;
