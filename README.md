# Adobek Interior

A luxury interior design & architecture portfolio website for **ADObek Design Build**, a premier interior architecture atelier based in Addis Ababa, Ethiopia.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Backend | Firebase (Auth, Firestore, Storage) |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |

### Fonts

- **Serif:** Cormorant Garamond (headings, quotes)
- **Sans:** Plus Jakarta Sans (body text)
- **Script:** Pinyon Script, Alex Brush (decorative accents)

## Pages

### Home (`HomePage.jsx`)
- Hero banner carousel with 6 slides, auto-advance (5.5s), keyboard nav, touch swipe
- Philosophy quote section
- "Our Works" 2x2 project grid
- Embedded Services, About, Blog, and Contact sections as a continuous scroll

### Projects (`ProjectsPage.jsx`)
- Category filters: All, Governmental, Private Organization, Private Corporation, Private Company
- Responsive 2-column project card grid with hover animations

### Project Detail (`ProjectDetailPage.jsx`)
- Full-width hero image
- 2-column layout: title + architectural narrative
- 7-image gallery with alternating full-width and grid layouts
- "You May Like" recommendation cards

### Services (`ServicesPage.jsx`)
- Dark hero banner with vignette overlay
- 4-item interactive accordion: Interior Design, Architectural Design, House Redesign, Design Consultancy
- Recent projects showcase

### About (`AboutPage.jsx`)
- Leadership spotlight with founder profile
- Core Values: Authentic Heritage, Architectural Rigor, Bespoke Execution
- Recent projects showcase

### Blog (`BlogPage.jsx`)
- Featured articles (2-column) + more stories (3-column)
- Full-screen modal reader with backdrop blur

### Contact (`ContactPage.jsx`)
- Contact details: phone, email, Telegram, physical address
- Enquiry form with validation and submission to Firestore
- Success state with reference ID

### Admin Portal (`AdminPortal.jsx`)
- Firebase email/password authentication with master passcode fallback
- 3 tabbed sections:
  - **Consultation Leads** — view, contact via WhatsApp/email
  - **Projects CMS** — add, edit, delete projects with image upload
  - **Journal CMS** — add, edit, delete blog posts with image upload
- Live Firebase connection status indicator

## Features

### Dark Mode
- Class-based toggling (`dark` on `<html>`)
- Default: dark mode
- 15 custom brand colors (teal, terracotta, gold, etc.)
- Different background patterns for light/dark
- Persisted per tab in `sessionStorage`

### Loading Screen
- Inline in `index.html` — renders instantly, no flash
- Animated progress bar with brand gradient
- Fades out after React mounts

### Offline Support
Every data operation follows a three-tier fallback:

```
Firebase Firestore → localStorage → hardcoded defaults
```

The site works fully without Firebase configured.

### Performance
- Code-split vendor chunks (React, Lucide, Firebase core, Firebase DB)
- All pages lazy-loaded via `React.lazy()`
- Image lazy loading with `loading="lazy"` and `decoding="async"`
- Resource hints: `preconnect`, `dns-prefetch`, `preload`
- Custom chunk splitting in Vite config

### Animations
- `animate-fade-in` — translateY + opacity transition
- Image hover zoom with 700ms transitions
- Card hover lift with shadow
- Hero carousel with `translate3d` rolling transitions
- Bouncing scroll-down chevron

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project ([console.firebase.google.com](https://console.firebase.google.com/))

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and fill in your Firebase config:

```bash
cp .env.example .env
```

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

> Without Firebase config, the site runs in offline mode using localStorage and hardcoded data.

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── assets/              # Logos, profile photos, project thumbnails
│   ├── client_logos/        # Client logo library (40+ images)
│   ├── 404.html             # GitHub Pages SPA redirect
│   └── bg_pattern.svg       # Background textures
├── media/
│   ├── about/               # Profile photos
│   └── projects/            # Project hero images + gallery
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav, scroll progress bar, mobile menu, theme toggle
│   │   ├── Footer.jsx       # 4-column footer with social links
│   │   └── AdobekLogo.jsx   # Theme-aware logo component
│   ├── pages/
│   │   ├── HomePage.jsx     # Landing page with hero carousel + embedded sections
│   │   ├── ProjectsPage.jsx # Portfolio grid with category filters
│   │   ├── ProjectDetailPage.jsx # Individual project showcase
│   │   ├── ServicesPage.jsx # Services accordion + recent projects
│   │   ├── AboutPage.jsx    # Company story, founder spotlight, core values
│   │   ├── BlogPage.jsx     # Blog listing with modal reader
│   │   ├── ContactPage.jsx  # Contact form + company details
│   │   └── AdminPortal.jsx  # CMS dashboard (auth, leads, projects, blog)
│   ├── data/
│   │   └── defaultData.js   # 6 default projects + 3 default blog posts
│   ├── services/
│   │   ├── firebaseService.js # Firebase CRUD + localStorage fallback
│   │   └── firebase.js      # Barrel export
│   ├── App.jsx              # Root component, hash router, theme, code splitting
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles, animations, scrollbar
├── firestore.rules          # Firestore security rules
├── storage.rules            # Firebase Storage security rules
├── vite.config.js           # Build config with manual chunk splitting
├── tailwind.config.js       # Brand colors, fonts, dark mode
└── postcss.config.js        # Tailwind + Autoprefixer
```

## Firebase Collections

| Collection | Public Read | Write |
|------------|:----------:|:-----:|
| `projects` | Yes | Auth only |
| `blog_posts` | Yes | Auth only |
| `consultations` | Create + Read | Auth only (update/delete) |

**Storage:** `/images/{folder}` — public read, auth write, max 10MB, images only.

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Teal | `#1E4E4E` | Primary brand, navbar, footer |
| Terracotta | `#DF6D27` | Accents, CTAs, progress bar |
| Gold | `#C5A880` | Decorative accents, links |
| Charcoal | `#1A1816` | Dark mode body text |
| Dark | `#0A1525` | Dark mode background |
| Cream | `#FAF8F5` | Light mode background |

## Deployment

The project is configured for static hosting (GitHub Pages, Netlify, Vercel):

- `base: './'` in Vite config for relative paths
- `public/404.html` handles SPA routing on GitHub Pages
- All pages are client-side rendered with hash routing

## License

Private project. All rights reserved.
