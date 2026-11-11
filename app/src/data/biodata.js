
export const profile = {
  name: {
    en: 'Humaid Alam Ansari',
    hi: 'हुमैद आलम अंसारी',
    ur: 'حمید عالم انصاری',
  },
}

// Salutations shown before family members' names
const SALUTATION = {
  MR: { en: 'Mr.', hi: 'श्री', ur: 'جناب' },
  MRS: { en: 'Mrs.', hi: 'श्रीमती', ur: 'محترمہ' },
}

/**
 * Qur'an verse shown at the very top of every page.
 * Translations: Urdu from Irfan-ul-Quran (Tahir-ul-Qadri), Hindi by Muhammad Faruq Khan.
 * Both render "azwaj" neutrally as spouses/pairs (جوڑے / जोड़े).
 */
export const verse = {
  reference: {
    en: 'Surah Ar-Rum (Chapter 30), Verse 21',
    hi: 'सूरह अर-रूम (सूरह 30), आयत 21',
    ur: 'سورۃ الروم (سورت 30)، آیت 21',
  },
  text: {
    en: 'And of His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy. Surely in this are signs for people who reflect.',
    hi: 'और यह भी उसकी निशानियों में से है कि उसने तुम्हारी ही सहजाति से तुम्हारे लिए जोड़े पैदा किए, ताकि तुम उसके पास शान्ति प्राप्त करो। और उसने तुम्हारे बीच प्रेम और दयालुता पैदा की। निश्चय ही इसमें बहुत-सी निशानियाँ हैं उन लोगों के लिए जो सोच-विचार करते हैं।',
    ur: 'اور یہ (بھی) اس کی نشانیوں میں سے ہے کہ اس نے تمہارے لئے تمہاری ہی جنس سے جوڑے پیدا کئے تاکہ تم ان کی طرف سکون پاؤ اور اس نے تمہارے درمیان محبت اور رحمت پیدا کر دی، بیشک اس (نظامِ تخلیق) میں ان لوگوں کے لئے نشانیاں ہیں جو غور و فکر کرتے ہیں۔',
  },
}

export const sections = [
  {
    // Rendered as a headline (see components/career), not as label/value rows
    id: 'career',
    type: 'career',
    title: { en: 'Career & Education', hi: 'पेशा एवं शिक्षा', ur: 'پیشہ اور تعلیم' },
    profession: { en: 'Software Engineer', hi: 'सॉफ्टवेयर इंजीनियर', ur: 'سافٹ ویئر انجینئر' },
    organisation: {
      en: 'Timewatch Infocom Pvt. Ltd.',
      hi: 'टाइमवॉच इन्फोकॉम प्राइवेट लिमिटेड',
      ur: 'ٹائم واچ اِنفو کام پرائیویٹ لمیٹڈ',
    },
    workingSince: { en: 'March 2026', hi: 'मार्च 2026', ur: 'مارچ 2026' },
    location: { en: 'Delhi', hi: 'दिल्ली', ur: 'دہلی' },
    // Most recent first
    education: [
      {
        id: 'mtech',
        degree: {
          en: 'M.Tech (Computer Engineering)',
          hi: 'एम.टेक (कंप्यूटर इंजीनियरिंग)',
          ur: 'ایم ٹیک (کمپیوٹر انجینئرنگ)',
        },
        institution: { en: 'Jamia Millia Islamia', hi: 'जामिया मिल्लिया इस्लामिया', ur: 'جامعہ ملیہ اسلامیہ' },
        year: 2024,
      },
      {
        id: 'mca',
        degree: { en: 'MCA', hi: 'एमसीए', ur: 'ایم سی اے' },
        institution: { en: 'Jamia Millia Islamia', hi: 'जामिया मिल्लिया इस्लामिया', ur: 'جامعہ ملیہ اسلامیہ' },
        year: 2022,
      },
    ],
    linkedinUrl: 'https://www.linkedin.com/in/h-alam/',
  },
  {
    id: 'personal',
    title: { en: 'Personal', hi: 'व्यक्तिगत जानकारी', ur: 'ذاتی معلومات' },
    // `icon` is one of the names in components/details/fieldIcons.js
    // A `value` that is a list is shown as chips
    fields: [
      {
        id: 'dob',
        icon: 'birthday',
        label: { en: 'Date of birth', hi: 'जन्म तिथि', ur: 'تاریخِ پیدائش' },
        value: { en: '28 January 1998', hi: '28 जनवरी 1998', ur: '28 جنوری 1998' },
      },
      {
        id: 'height',
        icon: 'height',
        label: { en: 'Height', hi: 'कद', ur: 'قد' },
        value: { en: '6′ 1″', hi: '', ur: '' },
      },
      {
        id: 'birthplace',
        icon: 'location',
        label: { en: 'Place of birth', hi: 'जन्म स्थान', ur: 'مقامِ پیدائش' },
        value: { en: 'Varanasi', hi: 'वाराणसी', ur: 'وارانسی' },
      },
      {
        id: 'residence',
        icon: 'residence',
        label: { en: 'Residing in', hi: 'वर्तमान निवास', ur: 'موجودہ رہائش' },
        value: { en: 'Delhi', hi: 'दिल्ली', ur: 'دہلی' },
      },
      {
        id: 'nativePlace',
        icon: 'home',
        label: { en: 'Native place', hi: 'मूल निवास', ur: 'آبائی شہر' },
        value: {
          en: 'Basni, Near Lal Bahadur Shastri International Airport (Babatpur Airport), Varanasi',
          hi: 'बसनी, लाल बहादुर शास्त्री अंतरराष्ट्रीय हवाई अड्डे (बाबतपुर एयरपोर्ट) के पास, वाराणसी',
          ur: 'بسنی، لال بہادر شاستری بین الاقوامی ہوائی اڈے (بابت پور ایئرپورٹ) کے قریب، وارانسی',
        },
      },
      {
        id: 'languages',
        icon: 'languages',
        label: { en: 'Languages known', hi: 'भाषाएँ', ur: 'زبانیں' },
        value: [
          { en: 'English', hi: 'अंग्रेज़ी', ur: 'انگریزی' },
          { en: 'Hindi', hi: 'हिन्दी', ur: 'ہندی' },
          { en: 'Urdu', hi: 'उर्दू', ur: 'اردو' },
        ],
      },
    ],
  },
  {
    // Rendered as a family timeline (see components/family), not as label/value rows
    id: 'family',
    type: 'family',
    title: { en: 'Family', hi: 'परिवार', ur: 'خاندان' },
    groups: [
      {
        id: 'grandparents',
        title: { en: 'Grandparents', hi: 'दादा एवं नाना', ur: 'دادا اور نانا' },
        members: [
          {
            id: 'paternalGrandfather',
            relation: { en: 'Paternal Grandfather', hi: 'दादा', ur: 'دادا' },
            name: { en: 'Abdul Gaffar', hi: 'अब्दुल ग़फ़्फ़ार', ur: 'عبدالغفار' },
            salutation: SALUTATION.MR,
            isLate: true,
          },
          {
            id: 'maternalGrandfather',
            relation: { en: 'Maternal Grandfather', hi: 'नाना', ur: 'نانا' },
            name: { en: 'Mohammed Hashim', hi: 'मोहम्मद हाशिम', ur: 'محمد ہاشم' },
            salutation: SALUTATION.MR,
            isLate: true,
          },
        ],
      },
      {
        id: 'parents',
        title: { en: 'Parents', hi: 'माता-पिता', ur: 'والدین' },
        members: [
          {
            id: 'father',
            relation: { en: 'Father', hi: 'पिता', ur: 'والد' },
            name: { en: 'Alamgir', hi: 'आलमगीर', ur: 'عالمگیر' },
            salutation: SALUTATION.MR,
            role: {
              en: 'Advocate, High Court of Delhi & Supreme Court of India',
              hi: 'अधिवक्ता, दिल्ली उच्च न्यायालय एवं भारत का सर्वोच्च न्यायालय',
              ur: 'ایڈووکیٹ، دہلی ہائی کورٹ و سپریم کورٹ آف انڈیا',
            },
            details: [
              {
                en: 'LL.B., Aligarh Muslim University (1994)',
                hi: 'एलएल.बी., अलीगढ़ मुस्लिम विश्वविद्यालय (1994)',
                ur: 'ایل ایل بی، علی گڑھ مسلم یونیورسٹی (1994)',
              },
              {
                en: 'Chamber No. 566, Patiala House Courts Complex, New Delhi-110001',
                hi: 'चैंबर नं. 566, पटियाला हाउस कोर्ट्स कॉम्प्लेक्स, नई दिल्ली-110001',
                ur: 'چیمبر نمبر 566، پٹیالہ ہاؤس کورٹس کمپلیکس، نئی دہلی-110001',
              },
            ],
          },
          {
            id: 'mother',
            relation: { en: 'Mother', hi: 'माता', ur: 'والدہ' },
            name: { en: 'Shama Parveen', hi: 'शमा परवीन', ur: 'شمع پروین' },
            salutation: SALUTATION.MRS,
            role: { en: 'Homemaker', hi: 'गृहिणी', ur: 'خانہ دار' },
            details: [{ en: 'M.A. Sociology', hi: 'एम.ए. समाजशास्त्र', ur: 'ایم اے سماجیات' }],
          },
        ],
      },
      {
        id: 'siblings',
        title: { en: 'Siblings', hi: 'भाई-बहन', ur: 'بہن بھائی' },
        members: [
          {
            id: 'sister',
            relation: { en: 'Younger Sister', hi: 'छोटी बहन', ur: 'چھوٹی بہن' },
            role: {
              en: 'Pursuing M.D. (Community Medicine)',
              hi: 'एम.डी. (सामुदायिक चिकित्सा) अध्ययनरत',
              ur: 'ایم ڈی (کمیونٹی میڈیسن) زیرِ تعلیم',
            },
            details: [
              {
                en: 'Lady Hardinge Medical College, New Delhi',
                hi: 'लेडी हार्डिंग मेडिकल कॉलेज, नई दिल्ली',
                ur: 'لیڈی ہارڈنگ میڈیکل کالج، نئی دہلی',
              },
              {
                en: 'MBBS, Lady Hardinge Medical College',
                hi: 'एमबीबीएस, लेडी हार्डिंग मेडिकल कॉलेज',
                ur: 'ایم بی بی ایس، لیڈی ہارڈنگ میڈیکل کالج',
              },
            ],
          },
          {
            id: 'brother',
            relation: { en: 'Younger Brother', hi: 'छोटा भाई', ur: 'چھوٹا بھائی' },
            role: { en: 'Student', hi: 'विद्यार्थी', ur: 'طالب علم' },
            details: [{ en: 'Class 12, Humanities', hi: 'कक्षा 12, मानविकी', ur: 'بارہویں جماعت، ہیومینٹیز' }],
          },
        ],
      },
    ],
  },
  {
    // Rendered as a list of points with icons, plus an optional closing note
    id: 'expectations',
    type: 'points',
    title: { en: 'About the Match', hi: 'रिश्ते के बारे में', ur: 'رشتے کے بارے میں' },
    points: [
      {
        id: 'home',
        icon: 'home',
        text: {
          en: 'Preferably a few years younger, and someone who would like to focus on home and family; her needs and well-being will be taken care of.',
          hi: 'बेहतर होगा कि वह उम्र में कुछ वर्ष छोटी हों और घर-परिवार पर ध्यान देना चाहें; उनकी ज़रूरतों और ख़ुशहाली का पूरा ख़याल रखा जाएगा।',
          ur: 'ترجیحاً عمر میں چند سال چھوٹی ہوں اور گھر اور خاندان پر توجہ دینا چاہیں؛ ان کی ضروریات اور خوشحالی کا پورا خیال رکھا جائے گا۔',
        },
      },
      {
        id: 'caste',
        icon: 'families',
        text: {
          en: 'There is no preference for any particular caste or biradari; what matters is compatibility and mutual respect between the two families.',
          hi: 'किसी ख़ास जाति या बिरादरी की कोई तरजीह नहीं है; अहम बात दोनों परिवारों के बीच आपसी तालमेल और सम्मान है।',
          ur: 'کسی خاص ذات یا برادری کو کوئی ترجیح نہیں؛ اصل اہمیت دونوں خاندانوں کے درمیان باہمی ہم آہنگی اور احترام کی ہے۔',
        },
      },
      {
        id: 'maslak',
        icon: 'respect',
        text: {
          en: 'Maslak is not a concern. Whether Barelvi, Deobandi, Ahl-e-Hadith, etc., her beliefs and practices will be fully respected and accommodated.',
          hi: 'मसलक कोई मायने नहीं रखता। चाहे बरेलवी, देवबंदी, अहले हदीस आदि हों, उनके अक़ीदे और अमल का पूरा सम्मान किया जाएगा और उनका पूरा ख़याल रखा जाएगा।',
          ur: 'مسلک کوئی اہمیت نہیں رکھتا۔ خواہ بریلوی، دیوبندی، اہلِ حدیث وغیرہ ہوں، ان کے عقائد اور اعمال کا پورا احترام کیا جائے گا اور ان کا مکمل خیال رکھا جائے گا۔',
        },
      },
      {
        id: 'dowry',
        icon: 'dowry',
        text: {
          en: 'No dowry (jahez) will be asked for or accepted, in any form.',
          hi: 'दहेज किसी भी रूप में न माँगा जाएगा, न लिया जाएगा।',
          ur: 'جہیز کسی بھی صورت میں نہ مانگا جائے گا اور نہ لیا جائے گا۔',
        },
      },
    ],
    note: {
      en: 'In shaa Allah, the hope is to build a home on mutual respect, love and mercy.',
      hi: 'इंशाअल्लाह, उम्मीद है कि आपसी सम्मान, मोहब्बत और रहमत पर एक घर बसे।',
      ur: 'ان شاء اللہ، امید ہے کہ باہمی احترام، محبت اور رحمت پر ایک گھر بسے۔',
    },
  },
  {
    id: 'contact',
    title: { en: 'Contact', hi: 'संपर्क', ur: 'رابطہ' },
    fields: [
      {
        id: 'phone',
        icon: 'phone',
        label: { en: 'Phone (Father)', hi: 'फ़ोन (पिता)', ur: 'فون (والد)' },
        value: { en: '9811483438', hi: '', ur: '' },
      },
    ],
  },
]

/**
 * Photos shown in the Images carousel, in order.
 * `file` is the file name inside public/photos/.
 */
export const photos = [
  {
    id: 'formal1',
    file: 'DSCN1760.JPG',
    // caption: { en: 'Casual', hi: 'साधारण', ur: 'عام' },
  },
  {
    id: 'formal',
    file: 'formalpic.jpeg',
    // caption: { en: 'Formal', hi: 'औपचारिक', ur: 'رسمی' },
  },
  // {
  //   id: 'halfBody',
  //   file: 'halfBody.jpeg',
  //   // caption: { en: 'Traditional', hi: 'पारंपरिक', ur: 'روایتی' },
  // },

]
