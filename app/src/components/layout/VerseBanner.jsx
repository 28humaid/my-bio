import { LANGUAGE } from '../../constants/languages.js'
import { verse } from '../../data/biodata.js'
import useLanguage from '../../i18n/useLanguage.js'

/** Qur'an verse above the navigation; scrolls away with the page */
export default function VerseBanner() {
  const { language, t } = useLanguage()
  // Italics and curly quotes suit Latin script only
  const isEnglish = language === LANGUAGE.ENGLISH

  return (
    <figure className="m-0 bg-forest-dark px-5 py-4 text-center sm:px-8 sm:py-5">
      <figcaption className="eyebrow text-gold-light">{t(verse.reference)}</figcaption>
      <blockquote
        className={`heading mx-auto mt-2 max-w-3xl text-[12px] leading-relaxed font-semibold text-cream sm:text-lg ${
          isEnglish ? 'italic' : ''
        }`}
      >
        {isEnglish ? `“${t(verse.text)}”` : t(verse.text)}
      </blockquote>
    </figure>
  )
}
