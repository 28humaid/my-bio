import { UI_TEXT } from '../../i18n/translations.js'
import useLanguage from '../../i18n/useLanguage.js'
import { formatText, splitTemplate } from '../../utils/format.js'
import Chip from '../common/Chip.jsx'
import Divider from '../common/Divider.jsx'
import { ArrowEndIcon, CalendarIcon, GraduationCapIcon, MapPinIcon } from '../common/Icons.jsx'

function EducationItem({ item }) {
  const { t } = useLanguage()

  return (
    <li className="flex items-start gap-3 md:gap-3.5">
      <GraduationCapIcon width={24} height={24} className="mt-0.5 shrink-0 text-gold" />
      <div>
        <p className="text-[17px] font-bold">{t(item.degree)}</p>
        <p className="mt-0.5 text-sm text-ink/80 md:mt-1">
          {t(item.institution)} · {formatText(t(UI_TEXT.passedIn), { year: item.year })}
        </p>
      </div>
    </li>
  )
}

/**
 * Career & Education content: job title large with company, chips and the
 * LinkedIn link; education listed alongside (desktop) or below (mobile).
 * The section heading itself comes from DetailsPage, like every other section.
 */
export default function CareerHeadline({ career }) {
  const { t } = useLanguage()
  const { profession, organisation, workingSince, location, education = [], linkedinUrl } = career
  const [beforeCompany, afterCompany] = splitTemplate(t(UI_TEXT.atCompany), 'company')

  return (
    <div className="flex flex-col gap-3.5 md:grid md:grid-cols-[minmax(0,1.3fr)_1px_minmax(0,1fr)] md:items-center md:gap-14 md:pt-2">
      {/* Career */}
      <div className="flex flex-col gap-3.5 md:gap-4">
        <p className="heading text-[32px] sm:text-[42px] leading-none text-forest">{t(profession)}</p>
        <p className="text-[17px]">
          <span className="heading text-xl font-semibold text-gold-dark italic">{beforeCompany}</span>
          <strong>{t(organisation)}</strong>
          <span className="heading text-xl font-semibold text-gold-dark italic">{afterCompany}</span>
        </p>
        <div className="flex flex-wrap gap-2 md:gap-2.5">
          <Chip icon={CalendarIcon}>{formatText(t(UI_TEXT.workingSince), { date: t(workingSince) })}</Chip>
          <Chip icon={MapPinIcon}>{t(location)}</Chip>
        </div>

        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 self-start text-[14px] font-bold text-forest underline decoration-gold decoration-2 underline-offset-[5px] hover:text-forest-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            {t(UI_TEXT.linkedinCta)}
            <span className="sr-only"> {t(UI_TEXT.opensInNewTab)}</span>
            <ArrowEndIcon width={18} height={18} />
          </a>
        )}
      </div>

      {/* Horizontal divider on mobile, vertical rule on desktop */}
      <div className="my-2 md:hidden">
        <Divider />
      </div>
      <span aria-hidden="true" className="hidden self-stretch bg-gold md:block" />

      {/* Education, most recent first */}
      <ul className="flex flex-col gap-4 md:gap-5.5">
        {education.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
