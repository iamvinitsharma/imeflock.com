# Limeflock – limeflock.com

Website for **Limeflock**, Dubai's digital growth partner (web design, SEO & AI search, performance marketing, AI automation, OOH advertising, media buying, branding, direct marketing and events).

Built with [Astro](https://astro.build), GSAP (ScrollTrigger, SplitText, MotionPath) and Lenis smooth scrolling. Design based on the Nimo theme.

**Test preview:** https://iamvinitsharma.github.io/imeflock.com/ (auto-deployed from `main`, marked noindex)

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/ (for limeflock.com root)
```

## Where things live

| What | File |
| --- | --- |
| Contact details, socials, FAQs, testimonials | `src/data/site.ts` |
| All 43 services (titles, URLs, copy, images) | `src/data/services.ts` |
| Portfolio items | `src/data/portfolio.ts` |
| Service landing page template | `src/pages/[slug].astro` |
| Chat assistant (lead capture) | `src/components/ChatBot.astro` |
| Animations | `src/scripts/animations.ts` |
| Styles | `src/styles/global.css`, `src/styles/service-page.css` |
| Images (swap files, keep names) | `public/img/` |

## Deploying to production

Run `npm run build` and upload `dist/` to any static host (Cloudflare Pages, Netlify, Vercel, cPanel). `npm run build:preview` is only for sub-folder previews like GitHub Pages.
