import { comment } from "postcss";

// questionsConfig.js - Questions configuration file
export const questionsConfig = {
    // Initial occupation question
    'occupation': {
        id: 'occupation',
        questionNumber: 1,
        text: 'במה אני עוסק',
        icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/occupation.png',
        type: 'single-choice',
        options: [
            { value: 'tent-dweller', text: 'יושב אוהל', icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/tent-dweller.png' },
            { value: 'employee', text: 'שכיר', icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/employee.png' },
            { value: 'business-owner', text: 'בעל עסק', icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/business-owner.png' }
        ]
    },

    // Tent dweller path
    'tent-dweller': {
        'scholarship': {
            id: 'scholarship',
            questionNumber: 2,
            section: 'יושב אוהל',
            text: 'האם הינך מקבל מילגת כולל?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/book.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'scholarship-hours',
            nextNo: 'general-questions'
        },
        'scholarship-hours': {
            id: 'scholarship-hours',
            questionNumber: 3,
            section: 'יושב אוהל',
            text: 'האם גובה המילגה מותנה בשמירת הזמנים?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/book.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'scholarship-accuracy',
            nextNo: 'general-questions'
        },
        'scholarship-accuracy': {
            id: 'scholarship-accuracy',
            questionNumber: 4,
            section: 'יושב אוהל',
            text: 'האם יתכן שלא מילאת באופן מדויק את רישום הזמנים וקיבלת בגין כך מילגה מוגדלת?',
            comment: 'ניתן לשער ששיעור הטעות החודשי אינו עולה על 20 ש״ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/book.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            amount: 240,
            nextYes: 'general-questions',
            nextNo: 'general-questions'
        }
    },

    // Employee path
    'employee': {
        'works-with-clients': {
            id: 'works-with-clients',
            questionNumber: 2,
            section: 'שכיר',
            text: 'האם הנך עובד מול לקוחות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'client-errors',
            nextNo: 'hourly-work'
        },
        'client-errors': {
            id: 'client-errors',
            questionNumber: 3,
            section: 'שכיר',
            text: 'האם יתכן שטעות שלך גרמה ללקוח לשלם יותר או לקבל פחות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'error-frequency',
            nextNo: 'hourly-work'
        },
        'error-frequency': {
            id: 'error-frequency',
            questionNumber: 4,
            section: 'שכיר',
            text: 'אחת לכמה זמן היה הדבר הזה עלול לקרות בשנה החולפת?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 365, text: 'אחת ליום', icon: '' },
                { value: 52, text: 'אחת לשבוע', icon: '' },
                { value: 26, text: 'אחת לשבועיים', icon: '' },
                { value: 12, text: 'אחת לחודש', icon: '' },
                { value: 2, text: 'אחת לחצי שנה', icon: '' },
                { value: 1, text: 'אחת לשנה', icon: '' },
                { value: 'custom', text: 'אחר', icon: '', placeholder: 'הזן כמה פעמים בסה"כ סביר שזה קרה בשנה החולפת' }
            ],
            next: 'damage-amount'
        },
        'damage-amount': {
            id: 'damage-amount',
            questionNumber: 5,
            section: 'שכיר',
            text: 'בכמה הינך משער את היקף הנזק ללקוח באם הדבר אכן קרה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 10, text: '10 ש"ח', icon: '' },
                { value: 50, text: '50 ש"ח', icon: '' },
                { value: 100, text: '100 ש"ח', icon: '' },
                { value: 500, text: '500 ש"ח', icon: '' },
                { value: 1000, text: '1,000 ש"ח', icon: '' },
                { value: 5000, text: '5,000 ש"ח', icon: '' },
                { value: 10000, text: '10,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'multiply-previous',
            next: 'hourly-work'
        },
        'hourly-work': {
            id: 'hourly-work',
            questionNumber: 6,
            section: 'שכיר',
            text: 'האם הנך עובד לפי שעות, או מחוייב לסך שעות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'time-accuracy',
            nextNo: 'work-faithfulness'
        },
        'time-accuracy': {
            id: 'time-accuracy',
            questionNumber: 7,
            section: 'שכיר',
            text: 'האם רישום השעות שלך מדויק?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'work-faithfulness',
            nextNo: 'time-inaccuracy-damage'
        },
        'time-inaccuracy-damage': {
            id: 'time-inaccuracy-damage',
            questionNumber: 8,
            section: 'שכיר',
            text: 'האם יתכן שחוסר הדיוק שלך גרם בלא יודעין לנזק למעסיק?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'inaccuracy-percentage',
            nextNo: 'work-faithfulness'
        },
        'inaccuracy-percentage': {
            id: 'inaccuracy-percentage',
            questionNumber: 9,
            section: 'שכיר',
            text: 'כמה אחוזים מרישום הזמן שלך סובל מחוסר דיוק?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 5, text: '5%', icon: '' },
                { value: 10, text: '10%', icon: '' },
                { value: 20, text: '20%', icon: '' },
                { value: 50, text: '50%', icon: '' }
            ],
            next: 'single-inaccuracy-cost'
        },
        'single-inaccuracy-cost': {
            id: 'single-inaccuracy-cost',
            questionNumber: 10,
            section: 'שכיר',
            text: 'בכמה הנך מעריך את משמעות מקרה של אי-דיוק בודד עבור המעסיק שלך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 5, text: '5 ש"ח', icon: '' },
                { value: 10, text: '10 ש"ח', icon: '' },
                { value: 20, text: '20 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'time-registration-frequency'
        },
        'time-registration-frequency': {
            id: 'time-registration-frequency',
            questionNumber: 11,
            section: 'שכיר',
            text: 'באיזו תדירות הנך אמור לבצע רישום זמן?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 240, text: 'שעתי (240 פעמים בחודש)', icon: '' },
                { value: 22, text: 'יומי (22 ימי עבודה בחודש)', icon: '' },
                { value: 4, text: 'שבועי', icon: '' },
                { value: 1, text: 'חודשי', icon: '' }
            ],
            calculation: 'complex-time-calculation',
            next: 'work-faithfulness'
        },
        'work-faithfulness': {
            id: 'work-faithfulness',
            questionNumber: 12,
            section: 'שכיר',
            text: 'האם זכור לך מקרה בו לא מילאת את תפקידך באמונה ונגרם נזק או מניעת רווח למעסיק שלך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'faithfulness-damage-amount',
            nextNo: 'general-questions'
        },
        'faithfulness-damage-amount': {
            id: 'faithfulness-damage-amount',
            questionNumber: 13,
            section: 'שכיר',
            text: 'בכמה כסף הנך מעריך את משמעות הנזק עבור המעסיק?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 10, text: '10 ש"ח', icon: '' },
                { value: 100, text: '100 ש"ח', icon: '' },
                { value: 500, text: '500 ש"ח', icon: '' },
                { value: 1000, text: '1,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'faithfulness-frequency'
        },
        'faithfulness-frequency': {
            id: 'faithfulness-frequency',
            questionNumber: 14,
            section: 'שכיר',
            text: 'האם אתה חושש שהדבר אירע יותר מפעם אחת בשנה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'faithfulness-times-per-year',
            nextNo: 'general-questions'
        },
        'faithfulness-times-per-year': {
            id: 'faithfulness-times-per-year',
            questionNumber: 15,
            section: 'שכיר',
            text: 'כמה פעמים בשנה הנך חושש שהדבר קרה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/suitcase.png',
            type: 'single-choice',
            options: [
                { value: 2, text: 'פעמיים', icon: '' },
                { value: 3, text: '3 פעמים', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'multiply-previous',
            next: 'general-questions'
        }
    },

    // Business owner path
    'business-owner': {
        'business-type': {
            id: 'business-type',
            questionNumber: 2,
            section: 'בעל עסק',
            text: 'איזה סוג עסק נמצא בבעלותך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/open.png',
            type: 'single-choice',
            options: [
                { value: 'service-provider', text: 'נותן שירות', icon: '' },
                { value: 'product-seller', text: 'מוכר מוצרים', icon: '' },
                { value: 'broker', text: 'עסקי תיווך', icon: '' }
            ],
        }
    },

    // Service provider path
    'service-provider': {
        'business-clients-count': {
            id: 'business-clients-count',
            questionNumber: 3,
            section: 'נותן שירות',
            text: 'עם כמה לקוחות הנך עובד בשנה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 10, text: '10', icon: '' },
                { value: 100, text: '100', icon: '' },
                { value: 500, text: '500', icon: '' },
                { value: 1000, text: '1,000', icon: '' },
                { value: 'custom', text: 'יותר', icon: '', placeholder: 'הכנס מספר לקוחות...' }
            ],
            next: 'service-quality'
        },
        'service-quality': {
            id: 'service-quality',
            questionNumber: 4,
            section: 'נותן שירות',
            text: 'הלקוחות משלמים לך מחיר מלא תמורת קבלת שירות מלא. האם יתכן שלא כל הלקוחות שלך קיבלו מצדך את מלוא השירות (מבחינת זמן, איכות, זמינות)?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'yes-no',
            nextYes: 'service-deficiency-percentage',
            nextNo: 'general-questions'
        },
        'service-deficiency-percentage': {
            id: 'service-deficiency-percentage',
            questionNumber: 5,
            section: 'נותן שירות',
            text: 'כמה אחוזים מלקוחותיך (יהודים בלבד) לא קיבלו לדעתך את מלוא השירות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 5, text: '5%', icon: '' },
                { value: 10, text: '10%', icon: '' },
                { value: 25, text: '25%', icon: '' },
                { value: 50, text: '50%', icon: '' },
                { value: 80, text: '80%', icon: '' }
            ],
            next: 'transaction-average'
        },
        'transaction-average': {
            id: 'transaction-average',
            questionNumber: 6,
            section: 'נותן שירות',
            text: 'מהו ממוצע העסקה שבינך לבין לקוחותיך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 50, text: '50 ש"ח', icon: '' },
                { value: 100, text: '100 ש"ח', icon: '' },
                { value: 500, text: '500 ש"ח', icon: '' },
                { value: 1000, text: '1,000 ש"ח', icon: '' },
                { value: 5000, text: '5,000 ש"ח', icon: '' },
                { value: 10000, text: '10,000 ש"ח', icon: '' },
                { value: 50000, text: '50,000 ש"ח', icon: '' },
                { value: 100000, text: '100,000 ש"ח', icon: '' },
                { value: 500000, text: '500,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '', placeholder: 'אם התשלום הינו ריטיינר חודשי, ציין את הסכום השנתי המלא' }
            ],
            next: 'actual-deficiency-percentage'
        },
        'actual-deficiency-percentage': {
            id: 'actual-deficiency-percentage',
            questionNumber: 7,
            section: 'נותן שירות',
            text: 'בכמה אחוזי ליקוי מדובר?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 10, text: '10%', icon: '' },
                { value: 20, text: '20%', icon: '' },
                { value: 30, text: '30%', icon: '' },
                { value: 40, text: '40%', icon: '' },
                { value: 50, text: '50%', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'service-damage-potential'
        },
        'service-damage-potential': {
            id: 'service-damage-potential',
            questionNumber: 8,
            section: 'נותן שירות',
            text: 'האם יתכן שבעקבות שירות לקוי שהענקת נגרם נזק ישיר או עקיף ללקוח שלך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'yes-no',
            nextYes: 'damage-probability',
            nextNo: 'general-questions'
        },
        'damage-probability': {
            id: 'damage-probability',
            questionNumber: 9,
            section: 'נותן שירות',
            text: 'האם הסבירות שדבר כזה אכן התרחש היא סבירה או סבירה מאוד?',
            comment: 'אם הסבירות נמוכה אינך חייב לשלם. אלא אם כן רצונך לצאת מידי כל ספק',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'yes-no',
            nextYes: 'damage-scope',
            nextNo: 'general-questions'
        },
        'damage-scope': {
            id: 'damage-scope',
            questionNumber: 10,
            section: 'נותן שירות',
            text: 'מה עלול להיות היקף נזק כזה לדעתך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 550, text: 'בין 100 ש"ח ל-1,000 ש"ח', icon: '' },
                { value: 5500, text: 'בין 1,000 ש"ח ל-10,000 ש"ח', icon: '' },
                { value: 55000, text: 'בין 10,000 ש"ח ל–100,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '', placeholder: 'הכנס טווח סכומים (בין____ ל-______)' }
            ],
            next: 'damage-frequency'
        },
        'damage-frequency': {
            id: 'damage-frequency',
            questionNumber: 11,
            section: 'נותן שירות',
            text: 'כמה פעמים לדעתך, סביר שדבר כזה התרחש בשנה החולפת?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/handyman.png',
            type: 'single-choice',
            options: [
                { value: 1, text: 'פעם אחת', icon: '' },
                { value: 2, text: 'פעמיים', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'service-provider-calculation',
            next: 'general-questions'
        }
    },

    // Product seller path
    'product-seller': {
        'products-sold-annually': {
            id: 'products-sold-annually',
            questionNumber: 3,
            section: 'מוכר מוצרים',
            text: 'כמה מוצרים (משוער) הנך מוכר בשנה (ליהודים בלבד)?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/retailer.png',
            type: 'single-choice',
            options: [
                { value: 100, text: '100', icon: '' },
                { value: 500, text: '500', icon: '' },
                { value: 1000, text: '1,000', icon: '' },
                { value: 10000, text: '10,000', icon: '' },
                { value: 100000, text: '100,000', icon: '' },
                { value: 500000, text: '500,000', icon: '' },
                { value: 1000000, text: '1,000,000', icon: '' },
                { value: 2000000, text: '2,000,000', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'defective-products'
        },
        'defective-products': {
            id: 'defective-products',
            questionNumber: 4,
            section: 'מוכר מוצרים',
            text: 'האם יתכן שהמוצר שמכרת היה במקרים נדירים: מקולקל / תקול / לא תואם לתקן / לא תואם לכמות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/retailer.png',
            type: 'yes-no',
            nextYes: 'average-product-price',
            nextNo: 'general-questions'
        },
        'average-product-price': {
            id: 'average-product-price',
            questionNumber: 5,
            section: 'מוכר מוצרים',
            text: 'מהו המחיר הממוצע למוצר בעסק שברשותך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/retailer.png',
            type: 'single-choice',
            options: [
                { value: 100, text: '100', icon: '' },
                { value: 500, text: '500', icon: '' },
                { value: 1000, text: '1,000', icon: '' },
                { value: 5000, text: '5,000', icon: '' },
                { value: 10000, text: '10,000', icon: '' },
                { value: 100000, text: '100,000', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'defective-percentage'
        },
        'defective-percentage': {
            id: 'defective-percentage',
            questionNumber: 6,
            section: 'מוכר מוצרים',
            text: 'כמה אחוז מהמוצרים יתכן שהיו תקולים?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/retailer.png',
            type: 'single-choice',
            options: [
                { value: 5, text: '5%', icon: '' },
                { value: 10, text: '10%', icon: '' },
                { value: 15, text: '15%', icon: '' },
                { value: 20, text: '20%', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'product-seller-calculation',
            next: 'general-questions'
        }
    },

    // Broker path
    'broker': {
        'transactions-per-year': {
            id: 'transactions-per-year',
            questionNumber: 3,
            section: 'עסקי תיווך',
            text: 'מה מספר העסקאות בממוצע שהנך מבצע בשנה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'single-choice',
            options: [
                { value: 5, text: '5', icon: '' },
                { value: 10, text: '10', icon: '' },
                { value: 20, text: '20', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'unfair-payment-concern'
        },
        'unfair-payment-concern': {
            id: 'unfair-payment-concern',
            questionNumber: 4,
            section: 'עסקי תיווך',
            text: 'האם הנך חושש שבחלק מהעסקאות גבית מהלקוח תשלום לא מספיק הגון?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'yes-no',
            nextYes: 'unfair-payment-frequency',
            nextNo: 'misleading-info-concern'
        },
        'unfair-payment-frequency': {
            id: 'unfair-payment-frequency',
            questionNumber: 5,
            section: 'עסקי תיווך',
            text: 'כמה פעמים בשנה הנך חושש דבר כזה אירע?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'single-choice',
            options: [
                { value: 1, text: 'פעם אחת', icon: '' },
                { value: 2, text: 'פעמיים', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'unfair-amount'
        },
        'unfair-amount': {
            id: 'unfair-amount',
            questionNumber: 6,
            section: 'עסקי תיווך',
            text: 'באיזה סכום הנך מעריך את הסכום הלא הגון מספיק שגבית בכל מקרה כזה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'single-choice',
            options: [
                { value: 1000, text: '1,000 ש"ח', icon: '' },
                { value: 5000, text: '5,000 ש"ח', icon: '' },
                { value: 10000, text: '10,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'multiply-previous',
            next: 'misleading-info-concern'
        },
        'misleading-info-concern': {
            id: 'misleading-info-concern',
            questionNumber: 7,
            section: 'עסקי תיווך',
            text: 'האם הנך חושש שבחלק מהעסקאות גרמת ללקוח לרכוש נכס לא מספיק טוב ונכון עבורו (באמצעות נתונים לא מדויקים או העלמה מכוונת של נתונים חיוניים)?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'yes-no',
            nextYes: 'misleading-frequency',
            nextNo: 'general-questions'
        },
        'misleading-frequency': {
            id: 'misleading-frequency',
            questionNumber: 8,
            section: 'עסקי תיווך',
            text: 'כמה פעמים בשנה הנך חושש דבר כזה אירע?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'single-choice',
            options: [
                { value: 1, text: 'פעם אחת', icon: '' },
                { value: 2, text: 'פעמיים', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'misleading-damage-scope'
        },
        'misleading-damage-scope': {
            id: 'misleading-damage-scope',
            questionNumber: 9,
            section: 'עסקי תיווך',
            text: 'נסה להעריך את ההיקף של נזק כזה עבור הלקוח:',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/broker.png',
            type: 'single-choice',
            options: [
                { value: 10000, text: '10,000 ש"ח', icon: '' },
                { value: 50000, text: '50,000 ש"ח', icon: '' },
                { value: 100000, text: '100,000 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'multiply-previous',
            next: 'general-questions'
        }
    },

    // General questions (common to all paths)
    'general-questions': {
        'small-loans': {
            id: 'small-loans',
            questionNumber: 16,
            section: 'הלוואות קטנות',
            text: 'האם הנך לווה לפעמים סכומים קטנים מחבר, שכן, או קרוב משפחה?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'loan-amount',
            nextNo: 'loan-guy'
        },
        'loan-amount': {
            id: 'loan-amount',
            questionNumber: 17,
            section: 'הלוואות קטנות',
            text: 'איזה סכום קטן אתה עשוי ללוות לפעמים?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'single-choice',
            options: [
                { value: 100, text: '100', icon: '' },
                { value: 200, text: '200', icon: '' },
                { value: 400, text: '400', icon: '' }
            ],
            next: 'loan-frequency'
        },
        'loan-frequency': {
            id: 'loan-frequency',
            questionNumber: 18,
            section: 'הלוואות קטנות',
            text: 'באיזו תדירות זה יכול לקרות?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'single-choice',
            options: [
                { value: 52, text: 'אחת לשבוע', icon: '' },
                { value: 12, text: 'אחת לחודש', icon: '' },
                { value: 6, text: 'אחת לחודשיים', icon: '' },
                { value: 2, text: 'אחת לחצי שנה', icon: '' },
                { value: 1, text: 'אחת לשנה', icon: '' }
            ],
            next: 'loan-recording'
        },
        'loan-recording': {
            id: 'loan-recording',
            questionNumber: 19,
            section: 'הלוואות קטנות',
            text: 'האם הנך נוהג לרשום את ההלוואות האלו בפנקס?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'loan-guy',
            nextNo: 'loan-return-certainty'
        },
        'loan-return-certainty': {
            id: 'loan-return-certainty',
            questionNumber: 20,
            section: 'הלוואות קטנות',
            text: 'האם אתה בטוח ב-100% שבכל הפעמים שלווית זכרת להחזיר?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'loan-guy',
            nextNo: 'loan-guy',
            calculation: 'loan-calculation' // (amount * frequency) / 3
        },
        'loan-guy': {
            id: 'loan-guy',
            questionNumber: 21,
            section: 'הלוואות קטנות',
            text: 'האם הנך חושש שבימי בחרותך התחייבת כסף לחבר ולא זכרת או לא היה לך לשלם?',
            comment: 'סביר להניח שמדובר בסכום שאינו עולה על 100 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'excess-return',
            nextNo: 'excess-return',
            amount: 100
        },
        'excess-return': {
            id: 'excess-return',
            questionNumber: 22,
            section: 'הלוואות קטנות',
            text: 'האם הנך חושש שקיבלת פעם סכום "עגול" שהיית אמור להחזיר ממנו עודךף "בהזדמנות" ושכחת?',
            comment: 'יש להניח שסכום ה"עיגול" אינו עולה על 20 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/money.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbors',
            nextNo: 'neighbors',
            amount: 20
        },

        'neighbors': {
            id: 'neighbors',
            questionNumber: 23,
            section: 'השאלה משכנים',
            text: 'האם אתה גר בבית משותף?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbors.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbor-borrowing',
            nextNo: 'mikveh',
        },
        'neighbor-borrowing': {
            id: 'neighbor-borrowing',
            questionNumber: 24,
            section: 'השאלה משכנים',
            text: 'האם אתה או ילדיך נוהגים ללוות מוצרים משכנים במידת הצורך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbors.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbor-frequency',
            nextNo: 'neighbors-damage'
        },
        'neighbor-frequency': {
            id: 'neighbor-frequency',
            questionNumber: 25,
            text: 'באיזו תדירות זה יכול לקרות?',
            section: 'הלוואה משכנים',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbors.png',
            type: 'single-choice',
            options: [
                { value: 104, text: 'פעמיים בשבוע', icon: '' },
                { value: 52, text: 'אחת לשבוע', icon: '' },
                { value: 12, text: 'אחת לחודש', icon: '' },
                { value: 6, text: 'אחת לחודשיים', icon: '' },
                { value: 2, text: 'אחת לחצי שנה', icon: '' },
                { value: 1, text: 'אחת לשנה', icon: '' }
            ],
            next: 'neighbor-recording'
        },
        'neighbor-recording': {
            id: 'neighbor-recording',
            questionNumber: 26,
            text: 'האם הנך נוהג לרשום הלוואות אלו?',
            section: 'הלוואה משכנים',
            comment: 'יש להניח שכשליש מהפעמים לא החזרת. יש להעריך שווי ממוצע של מוצר הנלווה משכנים בכ-10 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbors.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbors-damage',
            nextNo: 'neighbors-damage',
            calculation: 'neighbor-calculation' // (frequency * 10) / 3
        },
        'neighbors-damage': {
            id: 'neighbors-damage',
            questionNumber: 27,
            text: 'האם ילדיך הקטנים מורידים לפעמים את פח האשפה?',
            section: 'נזקי שכנים',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbor.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbors-damage-amount',
            nextNo: 'taxi',
        },
        'neighbors-damage-amount': {
            id: 'neighbors-damage-amount',
            questionNumber: 28,
            text: 'האם יתכן שחלק מהאשפה נפל בדרך וגרם נזק לשכן?',
            section: 'נזקי שכנים',
            comment: 'סביר שהדבר אירע כ-3 פעמים יש להעריך הנזק לכל פעם בכ-10 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbor.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbors-renovations',
            nextNo: 'neighbors-renovations',
            amount: 30
        },
        'neighbors-renovations': {
            id: 'neighbors-renovations',
            questionNumber: 29,
            text: 'האם ערכת שיפוצים בשנה החולפת?',
            section: 'נזקי שכנים',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbor.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'neighbors-renovations-sum',
            nextNo: 'mikveh',
        },
        'neighbors-renovations-sum': {
            id: 'neighbors-renovations-sum',
            questionNumber: 30,
            text: 'האם יתכן כי במסגרת השיפוצים נגרם נזק לכביסה של שכניך או לרכוש המשתוף?',
            section: 'נזקי שכנים',
            comment: 'נזק לרכוש המשותף במסגרת בנייה עשוי להסתכם בכ-500 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/neighbor.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'mikveh',
            nextNo: 'mikveh',
            amount: 500
        },

        'mikveh': {
            id: 'mikveh',
            questionNumber: 31,
            text: 'האם אתה נוהג לטבול במקווה?',
            section: 'מקווה',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/mikveh.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'mikveh-payment',
            nextNo: 'smoking'
        },
        'mikveh-payment': {
            id: 'mikveh-payment',
            questionNumber: 32,
            text: 'האם סביר שאתה נכנס לפעמים בלי לשלם? (כי אין לך כסף או שנגמרו הפעימות)',
            section: 'מקווה',
            comment: 'התשלום הממוצע לטבילה במקווה - בשקלול ערבי שבת וחג - הינו 7 ש"ח יש להעריך שסך הפעמים שהנך נכנס ללא תשלום אינו עולה על 10',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/mikveh.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'mikveh-shabbat',
            nextNo: 'mikveh-shabbat',
            amount: 70 // 7 * 10
        },
        'mikveh-shabbat': {
            id: 'mikveh-shabbat',
            questionNumber: 33,
            text: 'האם נכנסת בשבת למקווה במקום זר ולא שילמת אחרי שבת?',
            section: 'מקווה',
            comment: 'סביר שהדבר לא התרחש יותר מפעם אחת בשנה',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/mikveh.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'mikveh-clothes',
            nextNo: 'mikveh-clothes',
            amount: 15
        },
        'mikveh-clothes': {
            id: 'mikveh-clothes',
            questionNumber: 34,
            text: 'האם יתכן שלקחת בטעות כביסה של מישהו אחר?',
            section: 'מקווה',
            comment: 'יש להעריך שווי שקית כביסה (לא חדשה) בכ-50 ש"ח',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/mikveh.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'smoking',
            nextNo: 'smoking',
            amount: 50
        },

        'smoking': {
            id: 'smoking',
            questionNumber: 35,
            text: 'האם אתה מעשן?',
            section: 'נזקי עישון',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/smoking.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'cigarette-requests',
            nextNo: 'car-ownership'
        },
        'cigarette-requests': {
            id: 'cigarette-requests',
            questionNumber: 36,
            text: 'האם הנך מבקש לפעמים סיגריות מאחרים?',
            section: 'נזקי עישון',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/smoking.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'car-ownership',
            nextNo: 'car-ownership',
            amount: 30
        },

        'car-ownership': {
            id: 'car-ownership',
            questionNumber: 37,
            text: 'האם הנך בעל רכב?',
            section: 'נזקי רכב',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/car.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'car-damage',
            nextNo: 'taxi'
        },
        'car-damage': {
            id: 'car-damage',
            questionNumber: 38,
            text: 'האם אירע לך פעם שפגעת ברכב חונה ולא שילמת?',
            section: 'נזקי רכב',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/car.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'parking-damage',
            nextNo: 'parking-damage',
            amount: 700
        },
        'parking-damage': {
            id: 'parking-damage',
            questionNumber: 39,
            text: 'האם יתכן שלקחת חניה של מישהו וגרמת לו נזק או עיכוב?',
            section: 'נזקי רכב',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/car.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'mud-splashing',
            nextNo: 'mud-splashing',
            amount: 50
        },
        'mud-splashing': {
            id: 'mud-splashing',
            questionNumber: 40,
            text: 'האם יתכן שבנסיעה בימות הגשמים התזת מים ובוץ על עוברי אורח והיזקת למלבושיהם?',
            section: 'נזקי רכב',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/car.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'taxi',
            nextNo: 'taxi',
            amount: 100
        },

        'taxi': {
            id: 'taxi',
            questionNumber: 41,
            text: 'האם אירע שהזמנת מונית ונסעת במונית אחרת - או שהחלטת ללכת ברגל - מבלי לבטל את המונית שהזמנת?',
            comment: 'יש להעריך את הנזק לנהג המונית בכ-20 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'elevator',
            nextNo: 'elevator',
            amount: 20
        },
        'elevator': {
            id: 'elevator',
            questionNumber: 42,
            text: 'האם יתכן שקיצרת דרכך באמצעות מעבר בבנין מגורים אחר ושימוש במעלית?',
            comment: 'יש להעריך את עלות השימוש במעליות שלא כדין בכ-5 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'grocery',
            nextNo: 'grocery',
            amount: 5
        },
        'grocery': {
            id: 'grocery',
            questionNumber: 43,
            text: 'האם יתכן שביצעת רכישה במכולת ושכחת לשלם על אחד המוצרים?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'family-damage',
            nextNo: 'family-damage',
            amount: 7
        },
        'family-damage': {
            id: 'family-damage',
            questionNumber: 44,
            text: 'האם יתכן שאחד מילדיך ביצע נזק לרכוש כלשהו ולא סיפר לך?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'forgotten-item',
            nextNo: 'forgotten-item',
            amount: 50
        },
        'forgotten-item': {
            id: 'forgotten-item',
            questionNumber: 45,
            text: 'האם יתכן שמישהו מסר לך חפץ למסור למישהו והחפץ נשכח אצלך?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'transportation',
            nextNo: 'transportation',
            amount: 25,
        },
        'transportation': {
            id: 'transportation',
            questionNumber: 46,
            text: 'האם יתכן שמישהו מבני משפחתך נסע בתחבורה ציבורית ולא שילם? (כיוון שהרב-קו לא היה אצלו)',
            comment: 'יש להעריך שווי ממוצע לנסיעה בכ-5 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'transportation-frequency',
            nextNo: 'books-possession',
        },
        'transportation-frequency': {
            id: 'transportation',
            questionNumber: 47,
            text: 'באיזו תדירות עלול הדבר להתרחש? (5 ש"ח על כל פעם)',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            type: 'single-choice',
            options: [
                { value: 1825, text: 'פעם ביום', icon: '' },
                { value: 260, text: 'פעם בשבוע', icon: '' },
                { value: 130, text: 'פעם בשבועיים', icon: '' },
                { value: 60, text: 'פעם בחודש', icon: '' },
                { value: 10, text: 'פעם בחצי שנה', icon: '' },
                { value: 5, text: 'פעם בשנה', icon: '' }
            ],
            calculation: 'option-value',
            next: 'books-possession',
        },
        'books-possession': {
            id: 'books-possession',
            questionNumber: 48,
            text: 'האם קיימים תחת ידך ספרים שאינם שלך ואינך יודע מי בעליהם?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'books-count',
            nextNo: 'forgotten-debt'
        },
        'books-count': {
            id: 'books-count',
            questionNumber: 49,
            text: 'בכמה ספרים מדובר? (15 ש"ח לספר)',
            comment: 'ניתן לשער שווי ממוצע של ספר (לא חדש) בכ-15 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'single-choice',
            options: [
                { value: 15, text: 'ספר אחד', icon: '' },
                { value: 37.5, text: '2-3 ספרים', icon: '' },
                { value: 150, text: 'כ-10 ספרים', icon: '' }
            ],
            calculation: 'option-value',
            next: 'forgotten-debt'
        },
        'forgotten-debt': {
            id: 'forgotten-debt',
            questionNumber: 50,
            text: 'האם זכור לך שביקשת לפרוע חוב או להחזיר חפץ כלשהו ולא הצלחת לאתר את הבעלים? (50 ש"ח)',
            comment: 'בהיעדר נתונים ניתן להניח כי מדובר בכ-50 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'kids-reading',
            nextNo: 'kids-reading',
            amount: 50
        },
        'kids-reading': {
            id: 'kids-reading',
            questionNumber: 51,
            text: 'האם יתכן שילדיך נוהגים לקרוא בקביעות בספרי קומיקס בחנות ספרים? (100 ש"ח)',
            comment: 'יש לשער את הנזק הנגרם לספרים שאינם ראויים עוד למכירה בכ-100 ש"ח',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'charity-money',
            nextNo: 'charity-money',
            amount: 100
        },
        'charity-money': {
            id: 'charity-money',
            questionNumber: 52,
            text: 'האם אי פעם נשארו בידיך כספי צדקה ולא ידעת למי להעבירם?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'charity-amount',
            nextNo: 'service'
        },
        'charity-amount': {
            id: 'charity-amount',
            questionNumber: 53,
            text: 'באיזה סכום מדובר?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'single-choice',
            options: [
                { value: 100, text: '100 ש"ח', icon: '' },
                { value: 500, text: '500 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'option-value',
            next: 'service'
        },
        'service': {
            id: 'service',
            questionNumber: 54,
            text: 'האם יתכן כי הזמנת תור לרופא / איש מקצוע / נותן שירות, ולא הופעת, מבלי להודיע מראש?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'family-expenses',
            nextNo: 'family-expenses',
            amount: 50
        },
        'family-expenses': {
            id: 'family-expenses',
            questionNumber: 55,
            text: 'במשפחות רבות נהוג לערוך שמחות / נסיעות / טיולים / לרכוש מתנות, במשותף, כאשר לאחר מכן עורכים חשבון כמה כל אחד נתן, והאם הוא צריך להוסיף או שמגיע לו בחזרה. האם הנך חושש שבמסגרת חשבונות אלו טעית על חשבון בני המשפחה?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            nextYes: 'family-expenses-amount',
            nextNo: 'summary'
        },
        'family-expenses-amount': {
            id: 'family-expenses-amount',
            questionNumber: 56,
            text: 'בכמה הנך מעריך טעות כזו?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'single-choice',
            options: [
                { value: 50, text: '50 ש"ח', icon: '' },
                { value: 100, text: '100 ש"ח', icon: '' },
                { value: 500, text: '500 ש"ח', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            next: 'family-expenses-frequency'
        },
        'family-expenses-frequency': {
            id: 'family-expenses-frequency',
            questionNumber: 57,
            text: 'האם הנך חושש שטעות כזו אירעה לך יותר מפעם אחת השנה?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            nextYes: 'family-expenses-times',
            nextNo: 'summary'
        },
        'family-expenses-times': {
            id: 'family-expenses-times',
            questionNumber: 58,
            text: 'כמה פעמים לדעתך זה עלול היה לקרות השנה?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'single-choice',
            options: [
                { value: 2, text: 'פעמיים', icon: '' },
                { value: 3, text: '3 פעמים', icon: '' },
                { value: 'custom', text: 'אחר', icon: '' }
            ],
            calculation: 'multiply-previous',
            next: 'summary'
        }
    }
};
