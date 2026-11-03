import Divider from '../components/common/Divider.jsx'
import { LANGUAGE, LANGUAGES } from '../constants/languages.js'
import { UI_TEXT } from '../i18n/translations.js'
import useLanguage from '../i18n/useLanguage.js'

// Each option is always drawn in its own script, whatever the current language
const scriptFontClass = {
  [LANGUAGE.ENGLISH]: 'font-display font-bold',
  [LANGUAGE.HINDI]: 'font-hindi font-semibold',
  [LANGUAGE.URDU]: 'font-urdu leading-[2]',
}

const optionBaseClass =
  'flex min-h-19 w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 transition ' +
  'sm:h-56 sm:flex-col sm:justify-center sm:gap-3 sm:rounded-[20px] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest'

export default function LanguagePage({ onLanguageSelected }) {
  const { language, setLanguage, t } = useLanguage()

  const handleSelect = (code) => {
    setLanguage(code)
    onLanguageSelected?.()
  }

  return (
    <section className="flex flex-col items-center gap-6 py-2 sm:gap-10 sm:py-6">
      <h1 className="heading text-center text-3xl text-forest sm:text-5xl">
        {t(UI_TEXT.selectLanguage)}
      </h1>

      <ul className="grid w-full gap-3 sm:grid-cols-3 sm:gap-6">
        {LANGUAGES.map(({ code, nativeName, glyph, dir }) => {
          const isSelected = code === language
          return (
            <li key={code}>
              <button
                type="button"
                lang={code}
                dir={dir}
                aria-pressed={isSelected}
                onClick={() => handleSelect(code)}
                className={`${optionBaseClass} ${
                  isSelected
                    ? 'border-2 border-forest bg-cream-dark shadow-[0_10px_30px_rgb(15_61_46/0.15)]'
                    : 'border-sand bg-white hover:border-gold'
                }`}
              >
                {/* Radio dot on mobile, large letter on desktop */}
                <span
                  aria-hidden="true"
                  className={`size-5.5 shrink-0 rounded-full sm:hidden ${
                    isSelected ? 'border-[6px] border-forest' : 'border-2 border-gold'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`hidden text-5xl text-forest sm:block ${scriptFontClass[code]}`}
                >
                  {glyph}
                </span>
                <span className={`text-[22px] sm:text-2xl ${scriptFontClass[code]}`}>
                  {nativeName}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <Divider />
    </section>
  )
}
