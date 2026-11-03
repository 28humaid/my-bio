export const LANGUAGE = Object.freeze({
  ENGLISH: 'en',
  HINDI: 'hi',
  URDU: 'ur',
})

/** Supported languages, in the order they appear on the Language page */
export const LANGUAGES = [
  { code: LANGUAGE.ENGLISH, nativeName: 'English', glyph: 'Aa', dir: 'ltr' },
  { code: LANGUAGE.HINDI, nativeName: 'हिन्दी', glyph: 'अ', dir: 'ltr' },
  { code: LANGUAGE.URDU, nativeName: 'اردو', glyph: 'ا', dir: 'rtl' },
]

export const LANGUAGE_CODES = LANGUAGES.map(({ code }) => code)

export const DEFAULT_LANGUAGE = LANGUAGE.ENGLISH

export const LANGUAGE_STORAGE_KEY = 'biodata:language'

export const getDirection = (code) =>
  LANGUAGES.find((language) => language.code === code)?.dir ?? 'ltr'
