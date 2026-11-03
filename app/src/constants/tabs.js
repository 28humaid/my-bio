export const TAB = Object.freeze({
  LANGUAGE: 'language',
  DETAILS: 'details',
  IMAGES: 'images',
})

/** Display order of the navigation tabs */
export const TAB_ORDER = [TAB.LANGUAGE, TAB.DETAILS, TAB.IMAGES]

/** Every visit starts here, whatever hash the link carries */
export const DEFAULT_TAB = TAB.LANGUAGE
