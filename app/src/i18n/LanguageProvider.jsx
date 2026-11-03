import { useEffect, useState } from 'react'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_CODES,
  LANGUAGE_STORAGE_KEY,
  getDirection,
} from '../constants/languages.js'
import { readStorage, writeStorage } from '../utils/storage.js'
import { LanguageContext } from './LanguageContext.js'

function getInitialLanguage() {
  const stored = readStorage(LANGUAGE_STORAGE_KEY)
  return LANGUAGE_CODES.includes(stored) ? stored : DEFAULT_LANGUAGE
}

// Memoization is handled by the React Compiler (see vite.config.js)
export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  // Keep <html lang/dir> in sync so fonts, RTL layout and screen readers follow
  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = getDirection(language)
  }, [language])

  const setLanguage = (code) => {
    if (!LANGUAGE_CODES.includes(code)) return
    setLanguageState(code)
    writeStorage(LANGUAGE_STORAGE_KEY, code)
  }

  /** Picks the current language's text from an { en, hi, ur } entry, falling back to English. */
  const t = (entry) => entry?.[language] || entry?.[DEFAULT_LANGUAGE] || ''

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
