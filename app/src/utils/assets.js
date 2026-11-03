/**
 * URL of a file in public/photos/. BASE_URL follows `base` in vite.config.js,
 * so the path also works when the site is served from a GitHub Pages sub-path.
 */
export const getPhotoUrl = (file) => `${import.meta.env.BASE_URL}photos/${file}`
