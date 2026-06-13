# Brij Singla | Portfolio

A modern, high-performance portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. Features a dark/light theme switcher, smooth animations, particle effects, and a fully responsive design.

## Live Preview

Deployed on Vercel with automatic deployments from the `main` branch.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Analytics | Vercel Analytics |
| Language | TypeScript |
| Deployment | Vercel |

## Features

### Dark/Light Theme
- Toggle between dark and light color schemes via the navbar button
- Persists user preference in `localStorage`
- Respects system `prefers-color-scheme` on first visit
- Flash-free loading with an inline blocking script
- Accessible contrast ratios in both modes

### Animations & Interactivity
- **Particle Background** — Canvas-based animated particle network that adapts to the active theme
- **Custom Cursor** — Gradient-following cursor with hover state detection (desktop only)
- **Scroll Animations** — Section reveal animations triggered by viewport intersection
- **Typing Effect** — Rotating role titles in the hero section
- **Floating Orbs** — Animated gradient blobs for visual depth

### Sections
| Section | Description |
|---------|-------------|
| Hero | Introduction with typing animation, profile image, and stats |
| About | Highlights, stats grid, and "Why Work With Me" breakdown |
| Services | 6 service cards with feature tags |
| Tech Stack | Categorized technology badges (Frontend, Backend, Tools) |
| Experience | Interactive timeline with company details and highlights |
| Process | 5-step workflow from Discovery to Launch |
| Projects | Featured project cards with tech tags and metrics |
| Pricing | Region-aware pricing tables with currency switcher |
| Why Choose Me | Comparison table (Me vs Freelancers vs Agencies) |
| Testimonials | Client quotes with a carousel/dot navigation |
| FAQ | Expandable accordion with animated open/close |
| Contact | Contact form with mailto integration + contact links |
| Footer | Quick links, services list, and social icons |

### Performance
- Static site generation (SSG) for all routes
- Optimized images via `next/image`
- Font preloading with Google Fonts
- Minimal JavaScript bundle with code splitting
- Turbopack-powered development builds

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme variables, Tailwind config, component styles
│   ├── layout.tsx           # Root layout with ThemeProvider and metadata
│   └── page.tsx             # Home page composing all sections
├── components/
│   ├── ThemeProvider.tsx     # Dark/light theme context and toggle logic
│   ├── Navbar.tsx           # Navigation bar with theme toggle
│   ├── Hero.tsx             # Hero section with typing animation
│   ├── About.tsx            # About section with highlights
│   ├── Services.tsx         # Services grid
│   ├── TechStack.tsx        # Technology badges
│   ├── Experience.tsx       # Career timeline
│   ├── Process.tsx          # Development process steps
│   ├── Projects.tsx         # Portfolio project cards
│   ├── Pricing.tsx          # Pricing tables with region selector
│   ├── WhyChooseMe.tsx      # Comparison table
│   ├── Testimonials.tsx     # Client testimonials carousel
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer with links and socials
│   ├── FloatingCTA.tsx      # Floating WhatsApp + chat buttons
│   ├── ParticleBackground.tsx # Canvas particle animation
│   └── CustomCursor.tsx     # Custom gradient cursor
public/
├── profile.png              # Profile photo
└── images/                  # Additional static assets
```

## Getting Started

### Prerequisites

- Node.js >= 20.9.0
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/brijnandan97/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Theme System

The theme system uses CSS custom properties defined in `globals.css` and toggled via a `data-theme` attribute on the `<html>` element.

### How It Works

1. **`ThemeProvider`** manages state and sets `data-theme="dark"` or `data-theme="light"` on `document.documentElement`
2. **CSS Variables** (`:root` for dark, `[data-theme="light"]` for light) control all surface colors, text colors, borders, and shadows
3. **Accent color overrides** ensure neon colors maintain proper contrast in light mode (e.g., `#00d4ff` becomes `#0891b2`)
4. **Inline script** in `<head>` prevents flash of wrong theme on page load

### Adding New Themed Elements

Use the CSS variables in inline styles:
```tsx
<div style={{ color: "var(--text-heading)", background: "var(--bg-card)" }}>
```

Or use the existing utility classes (`.glass-card`, `.text-gradient`, etc.) which automatically respond to theme changes.

## Deployment

The site is configured for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

## Environment

No environment variables are required. The site is fully static with no server-side dependencies.

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari / Chrome on iOS and Android

## License

All rights reserved. This is a personal portfolio project.

## Contact

- **Email**: brijnandan9711@gmail.com
- **LinkedIn**: [brij-singla](https://www.linkedin.com/in/brij-singla-9b567016a/)
- **GitHub**: [brijnandan97](https://github.com/brijnandan97)
- **WhatsApp**: +91-7018289620
