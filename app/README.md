# Marriage Biodata

A React + Tailwind CSS site for a marriage biodata in **English, हिन्दी and اردو**, with three sections: **Language · Details · Images**.

## Tech stack

- React 19 + Vite, with the React Compiler (automatic memoization)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- ESLint (flat config)
- GitHub Pages via `gh-pages`

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

| Script            | Purpose                            |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server               |
| `npm run lint`    | Lint with ESLint                   |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the production build locally |
| `npm run deploy`  | Lint, build and publish to GitHub Pages |

## Editing content

All personal content lives in **`src/data/biodata.js`**.

- Text fields are `{ en, hi, ur }` objects. An empty translation falls back to English.
- Every section and field has an `id`, which must be unique within its list.
- Photos go in `public/photos/` and are listed in `photos`, in carousel order. Each has a unique `id`, its `file` name and a translated `caption`:

  ```js
  export const photos = [
    { id: 'formal', file: 'formal.jpg', caption: { en: 'Formal', hi: 'औपचारिक', ur: 'رسمی' } },
  ]
  ```

  Portrait photos (9:16) fit the frame best.

- The Qur'an verse at the top of the page is `verse` (`reference` and `text`).
- Label/value fields can have an `icon` (a name from `src/components/details/fieldIcons.js`). Give `value` a list of `{ en, hi, ur }` items to show them as chips.
- The Career & Education section (`type: 'career'`) holds `profession`, `organisation`, `workingSince`, `location`, `education` (a list, most recent first, each with `id`, `degree`, `institution`, `year`) and `linkedinUrl`. Remove `linkedinUrl` to hide the link.
- A points section (`type: 'points'`, used for About the Match) has `points`, each with `id`, `icon` and `text`, plus an optional closing `note`.
- The Family section (`type: 'family'`) is a list of `groups` (Grandparents, Parents, Siblings), each with `members`. A member has a `relation` and optionally a `salutation` (`SALUTATION.MR` or `SALUTATION.MRS`), `name`, `isLate`, `role` and `details` lines.

Interface labels (tab names, headings, hints) are in `src/i18n/translations.js`.

## Project structure

```
src/
├── App.jsx                  # Layout and tab switching
├── main.jsx                 # Entry point and providers
├── index.css                # Tailwind theme tokens and base styles
├── constants/               # Languages, tabs, section types
├── data/biodata.js          # Your biodata content
├── hooks/useHashTab.js      # Active tab synced with the URL hash
├── i18n/                    # Language context, provider, hook, UI translations
├── components/
│   ├── career/              # CareerHeadline
│   ├── common/              # Chip, Divider, Icons, SectionHeading
│   ├── details/             # ProfileName (Name section), FieldList (label/value rows), PointList
│   ├── family/              # FamilyTimeline, FamilyGroup, FamilyMemberCard
│   ├── gallery/             # PhotoCarousel, CarouselDots, CarouselNavButton, ThumbnailList, PhotoTile, Lightbox
│   └── layout/              # VerseBanner, Header, TabNav
├── pages/                   # LanguagePage, DetailsPage, ImagesPage
└── utils/                   # storage, assets (photo URLs), format, motion
```

## Deploying to GitHub Pages

Deployment uses the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, which publishes `dist/` to a `gh-pages` branch.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment**, set **Source** to **Deploy from a branch**, and choose **`gh-pages`** with the **`/ (root)`** folder. (The branch exists after the first deploy.)

To publish or update the site, from the `app` folder:

```bash
npm run deploy
```

This lints, builds and pushes the site. It is live at `https://<username>.github.io/<repository>/` a minute or two later. Pushing source code to `main` does not update the site on its own.

The site always opens on the Language page, even if the link ends in `#details` or `#images`. To change that, edit `DEFAULT_TAB` in `src/constants/tabs.js`.

## Privacy

A GitHub Pages site is public to anyone with the link, even when the repository is private on a free plan. Consider what contact details you publish. The page includes `noindex` to discourage search engines from listing it.
