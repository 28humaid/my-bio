import { LANGUAGE } from '../../constants/languages.js'
import useLanguage from '../../i18n/useLanguage.js'
import Chip from '../common/Chip.jsx'
import { FIELD_ICONS } from './fieldIcons.js'

/**
 * Wraps text so an untranslated value (which falls back to English) reads
 * left-to-right; keeps 6′ 1″ or a phone number in order inside Urdu.
 */
function LocalizedText({ entry }) {
  const { language, t } = useLanguage()
  return <bdi dir={entry[language] ? undefined : 'ltr'}>{t(entry)}</bdi>
}

/** One value as text, or several values (an array) as chips */
function FieldValue({ value }) {
  if (!Array.isArray(value)) {
    return <LocalizedText entry={value} />
  }

  return (
    <ul className="mt-1 flex flex-wrap gap-1.5">
      {value.map((item) => (
        <li key={item.en}>
          <Chip size="sm">
            <LocalizedText entry={item} />
          </Chip>
        </li>
      ))}
    </ul>
  )
}

/** Label/value pairs in a responsive grid, each with an optional icon */
export default function FieldList({ fields }) {
  const { t } = useLanguage()

  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4">
      {fields.map((field) => {
        const Icon = FIELD_ICONS[field.icon]

        return (
          <div key={field.id} className="min-w-0">
            <dt className={`flex items-center gap-1.5 eyebrow`}>
              {Icon && <Icon width={14} height={14} className="shrink-0 text-gold" />}
              {t(field.label)}
            </dt>
            <dd className="text-sm font-bold break-words">
              <FieldValue value={field.value} />
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
