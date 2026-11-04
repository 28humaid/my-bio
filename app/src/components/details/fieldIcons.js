import {
  BuildingIcon,
  CakeIcon,
  HeartIcon,
  HomeIcon,
  LanguagesIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  RulerIcon,
  UsersIcon,
} from '../common/Icons.jsx'

/** Icon names usable as `icon` on a field or point in biodata.js */
export const FIELD_ICONS = Object.freeze({
  birthday: CakeIcon,
  height: RulerIcon,
  location: MapPinIcon,
  home: HomeIcon,
  residence: BuildingIcon,
  languages: LanguagesIcon,
  respect: UsersIcon,
  families: LinkIcon,
  dowry: HeartIcon,
  phone: PhoneIcon,
})
