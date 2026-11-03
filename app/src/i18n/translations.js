/**
 * Interface text (labels, buttons, hints). Your personal details live in
 * src/data/biodata.js, not here.
 */
export const UI_TEXT = {
  tabs: {
    language: { en: 'Language', hi: 'भाषा', ur: 'زبان' },
    details: { en: 'Details', hi: 'विवरण', ur: 'تفصیلات' },
    images: { en: 'Images', hi: 'तस्वीरें', ur: 'تصاویر' },
  },
  navLabel: { en: 'Sections', hi: 'अनुभाग', ur: 'حصے' },

  nameSection: { en: 'Name', hi: 'नाम', ur: 'نام' },

  // Honorific placed before the name of someone who has passed away
  late: { en: 'Late', hi: 'स्व.', ur: 'مرحوم' },

  // Career headline. {company}, {date} and {year} are replaced at runtime
  atCompany: { en: 'at {company}', hi: '{company} में', ur: '{company} میں' },
  workingSince: { en: 'Since {date}', hi: '{date} से', ur: '{date} سے' },
  passedIn: { en: 'Passed {year}', hi: '{year} में उत्तीर्ण', ur: '{year} میں پاس' },
  linkedinCta: {
    en: 'For more details, visit LinkedIn',
    hi: 'अधिक जानकारी के लिए LinkedIn देखें',
    ur: 'مزید تفصیلات کے لیے LinkedIn دیکھیں',
  },
  opensInNewTab: { en: '(opens in a new tab)', hi: '(नए टैब में खुलेगा)', ur: '(نئے ٹیب میں کھلے گا)' },

  selectLanguage: { en: 'Select Language', hi: 'भाषा चुनें', ur: 'زبان منتخب کریں' },

  photographs: { en: 'Photographs', hi: 'तस्वीरें', ur: 'تصاویر' },
  openPhoto: { en: 'Open photo', hi: 'फोटो खोलें', ur: 'تصویر کھولیں' },
  // {current} and {total} are replaced at runtime
  photoCounter: {
    en: 'Photo {current} of {total}',
    hi: 'फोटो {current} / {total}',
    ur: 'تصویر {current} از {total}',
  },
  goToPhoto: { en: 'Show photo {current}', hi: 'फोटो {current} दिखाएँ', ur: 'تصویر {current} دکھائیں' },
  swipeHint: {
    en: 'Swipe or use the arrows · tap to zoom',
    hi: 'स्वाइप करें या तीर दबाएँ · बड़ा देखने के लिए टैप करें',
    ur: 'سوائپ کریں یا تیر دبائیں · بڑا دیکھنے کے لیے ٹیپ کریں',
  },
  clickHint: {
    en: 'Click the photo to view it full screen',
    hi: 'पूरी स्क्रीन पर देखने के लिए फोटो पर क्लिक करें',
    ur: 'پوری اسکرین پر دیکھنے کے لیے تصویر پر کلک کریں',
  },
  noPhotos: {
    en: 'Photos will be added soon.',
    hi: 'तस्वीरें जल्द जोड़ी जाएँगी।',
    ur: 'تصاویر جلد شامل کی جائیں گی۔',
  },
  close: { en: 'Close', hi: 'बंद करें', ur: 'بند کریں' },
  previousPhoto: { en: 'Previous photo', hi: 'पिछली फोटो', ur: 'پچھلی تصویر' },
  nextPhoto: { en: 'Next photo', hi: 'अगली फोटो', ur: 'اگلی تصویر' },
}
