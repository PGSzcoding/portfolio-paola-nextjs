<!-- BEGIN:nextjs-agent-rules -->

# AGENTS.md — Paola Gutierrez Portfolio

## 1. Project Overview

This repository contains Paola Gutierrez's personal developer portfolio.

The portfolio is built with:

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- Global CSS variables for the design system
- React Context for multilingual content
- `react-icons` for UI icons
- Motion for animations/interactions (use the current Motion package/API compatible with the project)

Supported languages:

- Spanish (`es`)
- English (`en`)
- French (`fr`)

The portfolio is intentionally **creative, colorful, modern, and tech-oriented**, but it must still feel like a professional developer portfolio rather than a poster, brochure, or overly decorative landing page.

---

## 2. Main Design Direction

The visual identity is already established. Preserve it unless there is a clear reason to improve it.

### Core visual language

- Nude / warm light background for the main light sections.
- Dark sections for Projects and AI Twin.
- Purple is the main accent color.
- Black / near-black is used for strong typography.
- White is used on dark sections.
- Rounded cards and pill-shaped buttons.
- Large editorial typography.
- Small developer/code-inspired decorative elements.
- Generous whitespace.
- Clean layouts with strong hierarchy.
- Creative details should support the content, not compete with it.

### Important design rule

**Do not make the website look like a poster.**

Avoid:
- Too many decorative elements.
- Too many colors.
- Too many floating shapes.
- Excessive text.
- Repeating the same illustration in multiple sections.
- Large blocks of unnecessary information.
- Generic template-like sections.

The design should feel intentional, premium, playful, and technical.

---

# 3. Existing Color System

The project uses CSS variables in the global stylesheet.

Current design tokens include:

```css
:root {
  --background: #f8eee6;
  --background-soft: #fdf7f2;

  --primary: #7355d8;
  --primary-dark: #5d42bd;
  --primary-light: #e7defc;

  --accent: #f4df9b;
  --accent-soft: #f8edc7;

  --text: #171717;
  --text-secondary: #5f5a56;

  --white: #ffffff;
  --black: #171717;

  --border: #242424;

  --font-body: 'DM Sans', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;

  --container-width: 1280px;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
}
```

### Rules

- Reuse existing CSS variables.
- Do not hardcode colors if an existing design token can be used.
- If a new color is genuinely necessary, first consider whether it belongs in the global design system.
- Do not introduce random colors per component.
- Keep the visual system consistent across pages.

---

# 4. Current Architecture

The project uses reusable components.

Expected structure:

```text
app/
└── globals.css
├── page.tsx
└── projects/
    └── page.tsx

components/
├── Header/
├── Hero/
├── About/
├── Projects/
├── ProjectsPage/
├── AiTwin/
├── Footer/
├── Button/
├── Loader/
└── ...

context/
└── LanguageContext.tsx

data/
└── projects.ts
└── translations.ts

public/
├── images/
│   ├── AI/
│   └── hero/
├── icons/
└── cv/
    └── Resume(en).pdf
    └── Resume(es).pdf

```

The exact folder names may differ slightly in the current repository. Inspect the existing structure before creating new files.

---

# 5. Component Architecture

Prefer small, focused components.

For example, the projects page should conceptually follow:

```text
ProjectsPage
│
├── ProjectFilters
│
└── ProjectGrid
      │
      ├── ProjectCard
      ├── ProjectCard
      └── ...
```

Do not put all UI, filtering, translations, project data, and styling into one large component.

### Component rules

- One component should have one clear responsibility.
- Extract repeated UI into reusable components.
- Avoid unnecessary abstraction for tiny one-off elements.
- Keep page files (`app/**/page.tsx`) thin.
- Keep data separate from presentation.
- Keep translated content separate from static technical metadata.

---

# 6. Internationalization

The portfolio supports:

```text
es
en
fr
```

Language state is managed through:

```text
context/LanguageContext.tsx
```

Components access translations using:

```tsx
const { t } = useLanguage();
```

### Important

Do not hardcode user-facing text inside components.

Bad:

```tsx
<h2>About me</h2>
```

Good:

```tsx
<h2>{t.about.title}</h2>
```

All visible text should have translations where appropriate.

This includes:

- Navigation
- Buttons
- Section headings
- Project names/descriptions
- Filters
- Labels
- Empty states
- Accessibility labels
- Loading states
- AI Twin UI
- Footer
- Error messages

### Language persistence

The selected language is stored in localStorage.

Avoid React effects that synchronously call `setState` just to initialize state from localStorage.

React 19 currently flags this pattern as:

> Calling setState synchronously within an effect can trigger cascading renders.

If language synchronization needs to be changed, prefer the existing context architecture and React-friendly approaches such as lazy initialization or `useSyncExternalStore`.

Do not reintroduce a `useEffect(() => setState(...), [])` pattern for localStorage initialization.

---

# 7. Project Data Architecture

Project information should NOT be duplicated throughout components.

Use:

```text
data/projects.ts
```

for project metadata.

A project currently follows this conceptual structure:

```ts
export type ProjectId =
  | 'proofs-trials'
  | 'layout-aleman'
  | 'hospitality-platform'
  | 'bookshelf'
  | 'tekoestudio'
  | 'chat-app';

export interface Project {
  id: ProjectId;
  image: string;
  category: 'fullstack' | 'freelance';
  technologies: string[];
  href?: string;
}
```

### Static project data belongs in `data/projects.ts`

Examples:

- ID
- Image path
- Category
- Technologies
- Project URL
- GitHub URL
- Repository
- Featured status
- Date
- Other non-translated metadata

### Translated project content belongs in translations

Examples:

- Project title
- Project description
- Category labels
- CTA labels
- Accessibility text when it is user-facing

This separation should be preserved.

---

# 8. Improve the Data Architecture When Appropriate

Roo Code should review the current data files and improve them if the current structure can be made cleaner, safer, or easier to maintain.

Possible improvements:

### A. Stronger typing

Avoid generic:

```ts
string
```

when a finite set of values is known.

Prefer:

```ts
type ProjectCategory = 'fullstack' | 'freelance';
```

and typed project IDs.

### B. Avoid duplicated data

Do not manually maintain the same project in:

- Home
- `/projects`
- individual project pages

All of these should derive from the same project data source.

### C. Prepare for individual project pages

The data structure should make this possible:

```text
/projects
/projects/proofs-trials
/projects/layout-aleman
/projects/bookshelf
```

The eventual route can use:

```text
app/projects/[id]/page.tsx
```

without duplicating project data.

### D. Derived filters

Technology filters should be derived from the project data rather than manually duplicated.

If a new project uses:

```ts
'Docker'
```

the filter system should be able to discover it automatically.

---

# 9. Current Sections

The portfolio currently follows this conceptual flow:

```text
Loader
↓
Header
↓
Hero
↓
About
↓
Projects preview
↓
Paola's AI Twin
↓
Footer
```

There is also a dedicated:

```text
/projects
```

page containing the complete project listing.

---

# 10. Hero

The Hero establishes Paola's visual identity.

It contains:

- PG logo/header
- Navigation
- Language selector
- Large Paola Gutierrez heading
- Frontend Developer positioning
- Short introduction
- CTA buttons
- Animated/illustrated Paola character
- Technology strip

Do not redesign the Hero unnecessarily.

Any improvements should preserve its visual identity.

---

# 11. About

The About section should remain relatively minimal.

Current concept:

- Large centered statement
- Short paragraphs
- A few statistics
- Small developer-inspired decorative elements
- No repeated hero character
- No excessive cards

The purpose is to explain:

- Who Paola is
- Her experience
- Her development focus
- Her approach to building products

Do not turn it into a resume section.

---

# 12. Projects Preview

The home page projects section shows a small selection of projects.

Current direction:

- Dark background
- Three featured projects
- Project image
- Project title
- Technologies
- Category
- Arrow
- Link to `/projects`

Do not add a carousel unless there is a strong UX reason.

---

# 13. Full Projects Page

The `/projects` page contains:

- Light/nude background
- Page heading
- Technology filters
- Project grid
- Project cards
- Pagination eventually, if enough projects exist

The project filters should wrap to multiple rows.

Do NOT use horizontal scrolling for desktop filters.

Example:

```text
Todos  React  Next.js  Svelte
Node.js  TypeScript  AWS
Firebase  MongoDB  SQL
```

On small screens, wrapping is preferred unless a specific UX issue justifies another solution.

---

# 14. Project Cards

Project cards should remain visually simple.

A card should primarily contain:

1. Project image
2. Category badge
3. Project name
4. Technologies
5. Arrow/link

Do not add long descriptions to the full projects page unless there is a clear design reason.

The project image can use a default placeholder when no image exists.

---

# 15. Paola's AI Twin

The AI section is called:

```text
Paola's AI Twin
```

Do not rename it to generic:

```text
AI Assistant
Chatbot
Chat with me
```

unless there is a strong reason.

The concept is a digital version of Paola that can answer questions about:

- Experience
- Projects
- Skills
- Technologies
- Professional background
- Availability
- Portfolio information

The current UI is intentionally minimal.

Do not add unnecessary CTA sections around the chat.

The actual AI functionality will be implemented later.

---

# 16. Footer

The footer is intentionally simple and dark.

It should contain:

- Centered PG logo linking to `/`
- Bottom copyright
- Built with Next.js/TypeScript text
- Back to top

Do not turn the footer into another content-heavy section.

---

# 17. Buttons

There is a reusable Button component.

Current variants:

```text
primary
outline
dark
```

CSS classes follow:

```css
.button-primary
.button-outline
.button-dark
```

Use the reusable Button component rather than recreating button styles.

Keep the button design consistent with the global design system.

---

# 18. CSS Rules

The project uses CSS Modules.

Example:

```tsx
import styles from './Component.module.css';
```

Use:

```tsx
className={styles.button}
```

rather than global class names whenever the style belongs to a component.

### CSS principles

- Prefer CSS Modules for component-specific styles.
- Keep global CSS limited to:
  - variables
  - reset/base styles
  - typography
  - global utilities if truly necessary
- Reuse CSS variables.
- Avoid deeply nested selectors.
- Avoid excessive absolute positioning.
- Avoid magic numbers when possible.
- Use responsive layouts with Grid/Flexbox.
- Keep mobile layouts intentional, not as an afterthought.

---

# 19. Animations

Use **Motion** for meaningful UI animation and micro-interactions.

The goal is not to animate everything.

Good candidates:

- Section entrance animations
- Project card hover/entrance
- Header interactions
- Filter transitions
- AI Twin chat messages
- Loader transitions
- Decorative elements with subtle movement
- Button/icon micro-interactions
- Page transitions when appropriate

Avoid:

- Constant distracting movement
- Excessive parallax
- Large bouncing elements
- Animating every text character without purpose
- Long animations that make the site feel slow

### Animation philosophy

Animations should communicate:

- hierarchy
- interaction
- transition
- feedback

They should never make the site harder to use.

Respect reduced-motion preferences.

Where appropriate, use Motion's support for reduced motion rather than implementing inaccessible animation manually.

---

# 20. Performance

The portfolio should remain fast.

When improving code:

- Optimize images.
- Prefer Next.js image optimization where appropriate.
- Avoid unnecessary client components.
- Keep server components as server components when they do not need browser APIs/state.
- Only use `'use client'` where necessary.
- Avoid unnecessary context subscriptions.
- Avoid unnecessary re-renders.
- Memoize derived data only when it provides a real benefit.
- Do not introduce a heavy dependency for a trivial interaction.

Before adding a library, ask whether the existing stack can solve the problem.

---

# 21. Accessibility

Maintain good accessibility.

Always consider:

- Semantic HTML
- `alt` text
- Keyboard navigation
- Visible focus states
- Button vs link semantics
- ARIA labels when necessary
- Color contrast
- Reduced motion
- Form labels
- Screen reader behavior

Do not use a `<div>` as a button when a `<button>` is appropriate.

---

# 22. Responsive Design

The site must work well on:

- Desktop
- Tablet
- Mobile

Do not simply shrink desktop layouts.

For mobile:

- Navigation becomes the existing mobile menu.
- Project grids collapse appropriately.
- Filters wrap.
- Typography scales.
- Decorative elements can be reduced or hidden.
- Chat UI must remain usable.
- Buttons must remain easy to tap.

---

# 23. Roo Code Responsibilities

When working on this project, do not only follow instructions literally.

**If you see a clear opportunity to improve the implementation, improve it.**

Examples:

- Fix duplicated logic.
- Improve TypeScript types.
- Extract repeated components.
- Simplify unnecessarily complex code.
- Improve responsive behavior.
- Improve accessibility.
- Fix obvious React/Next.js anti-patterns.
- Improve data organization.
- Improve naming.
- Improve animation implementation.
- Remove unused code/imports.
- Improve performance.

However:

**Do not redesign the entire project without a reason.**

Preserve the established visual direction unless an improvement clearly makes the site better.

---

# 24. Before Changing Architecture

For significant changes:

1. Inspect the current implementation.
2. Identify the smallest clean change.
3. Preserve existing public APIs/components where possible.
4. Check how the component is used elsewhere.
5. Check TypeScript types.
6. Check translations in all three languages.
7. Check responsive behavior.
8. Check accessibility.
9. Check for unnecessary client components.

Do not blindly rewrite files.

---

# 25. When Adding New User-Facing Content

Whenever adding text:

1. Add the Spanish version.
2. Add the English version.
3. Add the French version.
4. Access it through `useLanguage()`.

Do not hardcode text directly into JSX.

---

# 26. Validation Checklist

After making changes, verify:

```text
[ ] TypeScript has no errors
[ ] No ESLint errors
[ ] No unused imports
[ ] No unnecessary `useEffect` state initialization
[ ] All three languages work
[ ] Mobile layout works
[ ] Desktop layout works
[ ] Images have alt text
[ ] Links point to valid routes
[ ] Buttons have appropriate semantics
[ ] Animations respect reduced motion
[ ] Existing design tokens are reused
[ ] No duplicated project data
[ ] No unnecessary client components
```

If possible, run:

```bash
npm run lint
npm run build
```

and fix issues introduced by the changes.

---

# 27. Important React/Next.js Rule

This project uses a modern React/Next.js setup.

Be careful with effects.

Do NOT use effects simply to derive state from props or initialize state synchronously from another value.

Avoid patterns such as:

```tsx
useEffect(() => {
  setSomething(value);
}, []);
```

when the value can be derived directly or initialized lazily.

Before using an effect, ask:

> "Am I synchronizing React with an external system?"

If not, an effect may not be necessary.

---

# 28. General Coding Style

Prefer:

```tsx
const filteredProjects = projects.filter(...)
```

over unnecessarily complicated abstractions.

Prefer clear names:

```text
ProjectCard
ProjectFilters
ProjectGrid
LanguageContext
```

Avoid:

```text
DataThing
MainComponent2
HelperNew
TempComponent
```

Keep functions readable.

Avoid premature abstraction.

---
# 29. CV Download — Hero

The Hero section already contains a "Download CV" button.

Do not create a second CV button or duplicate this functionality.

The CV files are stored in:

```text
public/
└── cv/
    ├── Resume(en).pdf
    └── Resume(es).pdf
```

The downloaded CV must depend on the currently selected language from `LanguageContext`.

Required behavior:

```text
Language: es
→ /cv/Resume(es).pdf

Language: en
→ /cv/Resume(en).pdf

Language: fr
→ /cv/Resume(en).pdf
```

French currently uses the English CV because there is no French CV yet.

Requirements:

- Reuse the existing Hero button.
- Use the existing `useLanguage()` context to determine the current language.
- Do not hardcode one CV path regardless of language.
- Do not create separate buttons for each language.
- Trigger a file download instead of opening the PDF in a new tab.
- Prefer the downloaded filename:
  `Paola-Gutierrez-CV.pdf`
- Keep the control keyboard accessible.
- Reuse the existing Button component if it supports the required download behavior.
- If the Button component does not currently support downloads, improve the reusable Button component to support an optional `download` prop rather than creating a one-off CV component.

Example logic:

```tsx
const cvPath =
  language === 'es'
    ? '/cv/Resume(es).pdf'
    : '/cv/Resume(en).pdf';
```

The final implementation should remain consistent with the existing component architecture and TypeScript types.

# 30. Final Principle

The portfolio should communicate:

> **Paola is a developer who can build technically strong products while caring about design, usability, and details.**

The implementation should reflect that.

The site should feel:

**Creative + Technical + Clean + Human + Professional.**

Not:

**Overloaded + Generic + Template-like + Over-animated.**


<!-- END:nextjs-agent-rules -->
