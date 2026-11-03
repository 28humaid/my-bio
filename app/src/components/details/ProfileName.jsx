import { profile } from '../../data/biodata.js'
import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import SectionHeading from '../common/SectionHeading.jsx'

const HEADING_ID = 'section-name'

/** The person's name, presented as a section like the others on the page */
export default function ProfileName() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby={HEADING_ID} className="flex flex-col gap-3">
      <SectionHeading>
        <span id={HEADING_ID}>{t(UI_TEXT.nameSection)}</span>
      </SectionHeading>
      <p className="heading text-3xl leading-tight text-forest">{t(profile.name)}</p>
    </section>
  )
}
