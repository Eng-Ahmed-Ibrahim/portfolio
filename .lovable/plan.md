## Simple Modern Developer Portfolio

A single-page portfolio built at `/` with a clean, minimal-light aesthetic (soft off-white background, slate grays, blue accent `#3b82f6`). Note: this project's stack is React + TanStack Start with Tailwind CSS v4 — I'll use those (not raw HTML/CSS/JS files) so it works in your preview.

### Sections (single scrollable page)
1. **Sticky nav** — name/logo left, links (About, Experience, Projects, Skills, Contact) right, smooth-scroll anchors.
2. **Hero** — big name, one-line role, short intro, primary CTA (Contact) + secondary (View Work), social icons (GitHub, LinkedIn, X).
3. **About** — 2–3 short paragraphs, small photo/avatar placeholder.
4. **Experience** — vertical timeline of 3 roles (company, title, dates, 1–2 bullet points).
5. **Projects** — 3-card grid: title, description, tech tags, links (Live / Code).
6. **Skills** — grouped tag chips (Languages, Frameworks, Tools).
7. **Contact** — email CTA + social links.
8. **Footer** — copyright + built-with note.

### Design
- Palette: `#fafbfc` bg, `#e8ecf1` borders, `#94a3b8` muted, `#3b82f6` primary.
- Typography: Inter (loaded via `<link>` in `__root.tsx`).
- Generous whitespace, subtle borders, rounded-xl cards, restrained hover states, no gradients.
- Fully responsive; mobile nav collapses to a simple menu.
- Semantic HTML, single H1, alt text.

### Technical
- Replace `src/routes/index.tsx` placeholder with the portfolio page + per-route `head()` (title, description, og/twitter).
- Update `src/styles.css` `:root` tokens to the Minimal Light palette; add Inter `--font-sans` token.
- Add Inter `<link>` in `src/routes/__root.tsx` head.
- Components in `src/components/portfolio/` (Nav, Hero, About, Experience, Projects, Skills, Contact, Footer) using existing shadcn primitives + Lucide icons.
- All copy is realistic placeholder ("Your Name", sample projects) that you can edit.

### Out of scope
No backend, no contact form submission (mailto link only), no CMS, no dark mode toggle.