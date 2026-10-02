# Divine Hope Foundation — Website

Website for **Divine Hope Foundation**, a non-profit humanitarian organization in Bahi, Dodoma, Tanzania.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Every page is statically generated.

## Pages

| Route           | Contents                                                        |
| --------------- | --------------------------------------------------------------- |
| `/`             | Hero, values, about, stories, areas of work, team, get involved |
| `/about`        | Story, mission & vision, core values, approach, team            |
| `/what-we-do`   | The six areas of work in detail                                 |
| `/gallery`      | Photo gallery with lightbox                                     |
| `/get-involved` | Give, volunteer, partner                                        |
| `/contact`      | Contact details, message form (opens email app), map            |

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

- Contact details, team, areas of work, values and gallery photos: `src/lib/site.ts`
- Photos: `public/images/`
- Colours and fonts: `src/app/globals.css` and `src/app/layout.tsx`

## Deploying

Deploys as-is to Vercel. Once a custom domain is connected, set `NEXT_PUBLIC_SITE_URL`
(e.g. `https://yourdomain.org`) so the sitemap and social previews use it.
