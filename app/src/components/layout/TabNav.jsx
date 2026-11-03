import { TAB_ORDER } from '../../constants/tabs.js'
import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'

const baseClass =
  'min-h-11 cursor-pointer rounded-full border px-3 text-sm transition-colors sm:px-5 sm:text-[15px] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light'

const activeClass = 'border-gold bg-forest-light font-bold text-gold-light'
const inactiveClass = 'border-transparent font-semibold text-mint hover:text-cream'

export default function TabNav({ activeTab, onTabChange }) {
  const { t } = useLanguage()

  return (
    <nav aria-label={t(UI_TEXT.navLabel)} className="w-full sm:w-auto">
      <ul className="grid grid-cols-3 gap-1.5 sm:flex">
        {TAB_ORDER.map((tab) => {
          const isActive = tab === activeTab
          return (
            <li key={tab} className="grid">
              <button
                type="button"
                onClick={() => onTabChange(tab)}
                aria-current={isActive ? 'page' : undefined}
                className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
              >
                {t(UI_TEXT.tabs[tab])}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
