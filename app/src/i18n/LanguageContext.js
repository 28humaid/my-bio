import { createContext } from 'react'

/** @type {import('react').Context<null | { language: string, setLanguage: (code: string) => void, t: (entry: Record<string, string>) => string }>} */
export const LanguageContext = createContext(null)
