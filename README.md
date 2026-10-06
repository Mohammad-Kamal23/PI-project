# Portfolio - Mohammad Kamal Abdulaziz

Personal site: projects, research, experience and contact. Built with Next.js (App Router), React, Tailwind CSS v4
and Framer Motion; made for Vercel.

## Edit the content

Everything shown on the site lives in `src/data/` - the components only lay it out:

| File | What it holds |
|---|---|
| `src/data/site.ts` | name, role, summary, links (GitHub, LinkedIn, CV), contact-form endpoint, navigation |
| `src/data/projects.ts` | projects: one entry per project (`featured: true` for the large cards) |
| `src/data/profile.ts` | experience, education, recognition, skills, AI-augmented workflow, concept ideas |
| `public/CV.pdf` | the CV behind every "Download CV" button |

Adding a project is one new object in `projects.ts`; its card, links and details panel appear automatically.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run lint
```

## Deploy

Import this repository in Vercel (*Add New → Project*); Vercel then builds every push to `main`. The production
domain is read from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` for metadata, `sitemap.xml`, `robots.txt` and the social
preview image. For a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain` in the Vercel project settings.

## Structure

```
src/app/            layout (fonts, metadata), page, robots, sitemap, social preview image
src/components/     Nav, Hero, Work (project cards + details), Research, Experience, Skills, Ideas, Contact, Footer
src/data/           all content (see above)
public/CV.pdf       CV
```

The contact form posts to [Formspree](https://formspree.io); change `formspreeEndpoint` in `site.ts` to use another form.

## License

Code: MIT. Text, CV and images: © Mohammad Kamal Abdulaziz, all rights reserved.
