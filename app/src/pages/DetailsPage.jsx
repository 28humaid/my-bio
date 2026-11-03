import CareerHeadline from '../components/career/CareerHeadline.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import FieldList from '../components/details/FieldList.jsx'
import PointList from '../components/details/PointList.jsx'
import ProfileName from '../components/details/ProfileName.jsx'
import FamilyTimeline from '../components/family/FamilyTimeline.jsx'
import { SECTION_TYPE } from '../constants/sections.js'
import { sections } from '../data/biodata.js'
import useLanguage from '../i18n/useLanguage.js'

/** The content under a section heading, chosen by the section's type */
function SectionContent({ section }) {
  switch (section.type) {
    case SECTION_TYPE.CAREER:
      return <CareerHeadline career={section} />
    case SECTION_TYPE.FAMILY:
      return <FamilyTimeline groups={section.groups} />
    case SECTION_TYPE.POINTS:
      return <PointList points={section.points} note={section.note} />
    default:
      return <FieldList fields={section.fields} />
  }
}

export default function DetailsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <ProfileName />

      {sections.map((section) => {
        const headingId = `section-${section.id}`

        return (
          <section key={section.id} aria-labelledby={headingId} className="flex flex-col gap-3">
            <SectionHeading>
              <span id={headingId}>{t(section.title)}</span>
            </SectionHeading>
            <SectionContent section={section} />
          </section>
        )
      })}
    </div>
  )
}
