@AGENTS.md

# CLAUDE.md — Personal Portfolio Project

## About the owner
- **Name:** Kutlu Berke (use "Berke")
- **Role:** Statistics student at Yıldız Technical University (YTÜ), Data Science certificate track
- **Focus:** Data Science / Machine Learning / AI. Working part-time at Turkish Airlines in Fuel Management analytics.
- **Goal of this site:** A **technical showcase / developer portfolio** in **English**, aimed at international recruiters and MS Business Analytics admissions committees (HEC Paris, ESADE, UC3M target 2027–2028).
- **Personality to reflect in tone:** sharp, driven, confident but not arrogant. Clean and serious, not gimmicky.

## What this site is
A single-page (or few-page) personal portfolio with a **subtle 3D background effect** and a strong focus on **projects**. The 3D is atmosphere, NOT the main event. Recruiters come here to see the work, not to play a game.

## Tech stack (do not change without asking me first)
- **Next.js** (App Router, latest stable) + **TypeScript**
- **React Three Fiber (@react-three/fiber)** + **@react-three/drei** for the 3D background
- **Tailwind CSS** for styling
- **Framer Motion** for scroll/entrance animations
- Deploy target: **Vercel**

## Hard rules for the 3D
- Performance budget: **target 60 FPS, keep memory under ~100 MB**. This is non-negotiable.
- No heavy GPU particle systems, no custom render pipelines, no 13-scene scroll epics.
- The background is ONE subtle element: a slowly rotating low-poly geometry (prefer an **icosahedron**) OR a light particle field, reacting gently to mouse movement.
- Must degrade gracefully on mobile: if the device is low-power, render a static fallback or reduce particle count.
- Wrap the Canvas in `<Suspense>` with a loader. Never block first paint on the 3D.
- Respect `prefers-reduced-motion`: if set, freeze or hide the animation.

## Design direction
- Bold, intentional aesthetic. **Avoid generic Inter/Roboto defaults** — pick distinctive typography.
- Dark theme by default, with a clear accent color. Asymmetric, confident composition.
- Use CSS variables for all colors so the theme is easy to swap.
- Accessibility: good contrast, keyboard-navigable, semantic HTML.

## Content sections (in order)
1. **Hero** — name, one-line positioning ("Data Scientist in the making / Statistics @ YTÜ"), subtle 3D behind.
2. **About** — short, punchy. Statistics + ML + real-world experience (Turkish Airlines, international youth exchange in İscar, Spain).
3. **Projects** — the core. Each project = card with title, stack tags, 1-2 line problem/result, links. Projects to feature:
   - **OtoIQ** — full-stack Turkish used-car market intelligence platform (Next.js/FastAPI, XGBoost/RandomForest/GradientBoosting ensemble, PostgreSQL + Redis, nodriver scraper).
   - **Car Price Prediction Pipeline** — end-to-end ML: scraped arabam.com, ensemble models, log(km+1) transforms, IQR outlier filtering, beat overfitting (R²=1.00 → sane).
   - **BIST Radar** — Turkish stock analysis dashboard (Streamlit, yfinance, Groq API).
   - **JARVIS** — local AI agent, framework-free Python CLI/FastAPI, gemma2:9b via Ollama, Three.js orb UI.
4. **Skills** — Python, SQL, Power BI, scikit-learn, XGBoost, pandas, FastAPI, PostgreSQL, Redis, Groq/Gemini APIs.
5. **Contact** — email + GitHub (`kutluberke`) + LinkedIn.

## Working style (how I want you to operate)
- **Plan first.** Before writing code, show me the plan and wait for approval. I'm on Claude Pro with a tight quota — don't burn tokens on giant rewrites.
- **Atomic tasks.** One component / one file at a time. Give me full context before each step.
- **Report errors properly.** If something breaks, tell me exactly what and why, with the fix. Don't paper over it.
- **I break things to understand them** — explain what you're doing so I learn, don't just dump code.
- Keep dependencies minimal. Justify every new package.

## Security & quality baseline
- No secrets in the repo. Use env vars, add `.env.local` to `.gitignore`.
- Sanitize any user input (contact form). Parameterize, escape, no XSS holes.
- Contact form: if it sends email, use a service (Resend/EmailJS) with the key server-side only.
