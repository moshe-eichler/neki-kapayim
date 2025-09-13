import { comment } from "postcss";

// questionsConfig.js - Questions configuration file
export const questionsConfig = {
    // Initial occupation question
    'occupation': {
        id: 'occupation',
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
        scholarship: {
            id: 'scholarship',
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
            section: 'בעל עסק',
            text: 'איזה סוג עסק נמצא בבעלותך?',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/open.png',
            type: 'single-choice',
            options: [
                { value: 'service-provider', text: 'נותן שירות', icon: '' },
                { value: 'product-seller', text: 'מוכר מוצרים', icon: '' },
                { value: 'broker', text: 'עסקי תיווך', icon: '' }
            ],
            next: 'general-questions'
        }
    },

    // General questions (common to all paths)
    'general-questions': {
        'small-loans': {
            id: 'small-loans',
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
            text: 'האם יתכן שמישהו מסר לך חפץ למסור למישהו והחפץ נשכח אצלך?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            // iconYes: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/yes.png',
            // iconNo: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/no.png',
            nextYes: 'transportation',
            nextNo: 'transportation',
        },
        'transportation': {
            id: 'transportation',
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
            text: 'במשפחות רבות נהוג לערוך שמחות / נסיעות / טיולים / לרכוש מתנות, במשותף, כאשר לאחר מכן עורכים חשבון כמה כל אחד נתן, והאם הוא צריך להוסיף או שמגיע לו בחזרה. האם הנך חושש שבמסגרת חשבונות אלו טעית על חשבון בני המשפחה?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            nextYes: 'family-expenses-amount',
            nextNo: 'summary'
        },
        'family-expenses-amount': {
            id: 'family-expenses-amount',
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
            text: 'האם הנך חושש שטעות כזו אירעה לך יותר מפעם אחת השנה?',
            section: 'כללי',
            icon: 'https://raw.githubusercontent.com/moshe-eichler/neki-kapayim/refs/heads/main/src/static/icons/general.png',
            type: 'yes-no',
            nextYes: 'family-expenses-times',
            nextNo: 'summary'
        },
        'family-expenses-times': {
            id: 'family-expenses-times',
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