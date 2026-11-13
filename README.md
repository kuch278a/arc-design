# Adobek Interior Design & Architecture

A bespoke, high-performance luxury interior design & architecture portfolio website and content management atelier for **ADObek Design Build**, a premier architectural firm based in Addis Ababa, Ethiopia, led by Founder & Principal Architect Bereket Grima.

[![Live Website](https://img.shields.io/badge/Live_Site-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://kuch278a.github.io/arc-design/)
[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite 5](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase 12](https://img.shields.io/badge/Firebase-12.18-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

---

## Live Website

- **Public Site**: [https://kuch278a.github.io/arc-design/](https://kuch278a.github.io/arc-design/)
- **Studio Admin Atelier**: [https://kuch278a.github.io/arc-design/#admin](https://kuch278a.github.io/arc-design/#admin)

---

## Key Features & User Experience

### 1. Global Interactive Canvas Dot Grid
- High-performance 2D HTML5 canvas dot matrix running via `requestAnimationFrame`.
- Calculates cursor Euclidean distance in real-time, producing a dynamic light ripple where dots scale up from `1.4px` to `3.8px` and smoothly transition into a vibrant ruby/crimson hue (`#e11d48`) with cubic falloff.
- Features smooth linear interpolation spring decay (`scale += (target - scale) * 0.14`) as the mouse moves away.
- Active as a global, full-viewport backdrop (`isGlobal={true}`) with `pointer-events: none` across the entire website.

### 2. Cinematic Expanded Hero Slider
- Viewport-adaptive sizing (`h-[65vh] sm:h-[85vh]` up to `940px` height and `1840px` max width) designed for modern displays, from 13-inch laptops to 4K monitors.
- Automated sliding with mouse-pause detection, progress bar indicator, keyboard navigation, and direct card click-through to project case studies.
- Followed by the architectural statement *"Elevating Spaces Through Timeless Architecture"* with generous, balanced vertical breathing room.

### 3. Permanent Minimalist White Gallery Aesthetic
- Enforced clean white mode (`#FFFFFF` background, `color-scheme: light`) with Cormorant Garamond, Lora, and Plus Jakarta Sans typography.
- Contrasting charcoal `#181715` luxury footer with pure `#ffffff` text for contact lines, address details, navigation items, and social media links.

### 4. Floating Sticky Navigation Bar
- Responsive pill container with frosted glass blur (`backdrop-blur-md bg-white/90`).
- Persistent top scroll progress indicator line.
- Streamlined client navigation: **Home**, **Projects**, **Services**, **About**, and **Contact**.
- Fully isolated from the Admin Portal (auto-hidden on `#/admin`).

### 5. Dedicated Studio Admin & CMS Atelier
- Private management interface with secure Firebase authentication and local sandbox fallback.
- **Consultation Inquiries**: View incoming client inquiries with direct phone, email, and WhatsApp outreach shortcuts.
- **Projects CMS**: Real-time CRUD capabilities for portfolio projects with direct image uploads to Firebase Storage.
- **Journal CMS**: Complete publication suite for architectural essays and journal articles with cover image upload and category management.

### 6. Three-Tier Offline Resilience
All data operations follow a resilient fallback sequence:
```
Firebase Firestore / Storage ──► LocalStorage ──► Hardcoded Architectural Defaults
```
The application runs reliably in offline or demonstration mode even if Firebase credentials are not yet configured.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | React 19 (`^19.3.1`) | UI Component Architecture |
| **Build Tool** | Vite 5 (`^5.4.2`) | Fast HMR & Production Bundler |
| **Styling** | Tailwind CSS 3 (`^3.4.10`) | Utility-First Responsive Styling |
| **Backend** | Firebase 12 (`^12.18.0`) | Authentication, Firestore DB, Cloud Storage |
| **Design Core** | `@astryxdesign/core` | Polished Design System Controls |
| **Icons** | Lucide React (`^0.439.0`) | Modern Vector Iconography |
| **Routing** | Hash-Based Client Routing | Seamless GitHub Pages SPA Navigation |

---

## Page Architecture

```
/#/                 HomePage.jsx          Hero slider, editorial statement, works grid, philosophy, reviews
/#/projects         ProjectsPage.jsx      Portfolio gallery with category filtering
/#/project-detail   ProjectDetailPage.jsx Comprehensive project story, specifications & photo gallery
/#/services         ServicesPage.jsx      Service offerings with interactive accordion deliverables
/#/about            AboutPage.jsx         Studio heritage, architectural rigor & founder profile
/#/journal          JournalPage.jsx       Architectural publications and design philosophy essays
/#/contact          ContactPage.jsx       Studio address, direct telephone lines & consultation form
/#/admin            AdminPortal.jsx       Secure atelier management (leads, projects & journal CMS)
```

---

## Project Structure

```
beka/
├── public/
│   ├── assets/                      # Studio photography, project images, logos
│   │   ├── telegram/                # High-resolution architectural project captures
│   │   └── adobek_logo_*.png        # Official Adobek architectural emblems
│   ├── 404.html                     # SPA redirect handler for GitHub Pages
│   └── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── src/
│   ├── components/
│   │   ├── InteractiveDotGrid.jsx   # Canvas-driven cursor proximity dot ripple
│   │   ├── Navbar.jsx               # Sticky floating navigation bar & mobile menu
│   │   ├── Footer.jsx               # Charcoal luxury footer with bright white typography
│   │   └── AdobekLogo.jsx           # Theme-aware official architectural mark
│   ├── pages/
│   │   ├── HomePage.jsx             # Landing page with expanded hero & interactive grid
│   │   ├── ProjectsPage.jsx         # Categorized portfolio gallery
│   │   ├── ProjectDetailPage.jsx   # Detailed project case study
│   │   ├── ServicesPage.jsx         # Service breakdowns and deliverables
│   │   ├── AboutPage.jsx            # Founder narrative & architectural philosophy
│   │   ├── JournalPage.jsx          # Published essays and articles
│   │   ├── ContactPage.jsx          # Contact information & consultation form
│   │   └── AdminPortal.jsx          # Studio Admin & CMS management dashboard
│   ├── data/
│   │   └── defaultData.js           # Hardcoded offline portfolio & fallback data
│   ├── services/
│   │   └── firebaseService.js       # Firebase Auth, Firestore & Storage integration
│   ├── App.jsx                      # App router, global canvas integration & Suspense
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global typography, smooth scrolling & animations
├── index.html                       # HTML shell with instant inline loader & safety timer
├── vite.config.js                   # Vite configuration with relative asset paths
├── tailwind.config.js               # Luxury color palette, fonts & screen breakpoints
└── package.json                     # Project scripts and dependencies
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
cd beka
npm install
```

### Environment Configuration
To connect to live Firebase Cloud services, create a `.env` file in the `beka/` directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
> **Note:** Without a `.env` file, the site automatically boots in **Local Sandbox Mode** with complete offline mock data and full functionality.

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Compiles production-ready bundles to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## Deployment to GitHub Pages

The repository uses a dual-branch structure:
- **`master`**: Source code, components, and project assets.
- **`gh-pages`**: Compiled static build output (`dist/`) served directly by GitHub Pages.

To build and deploy updates:
```bash
npm run build
cp dist/index.html dist/404.html
touch dist/.nojekyll
cd dist
git add -A
git commit -m "deploy: update production build"
git push -f origin gh-pages
```

---

## License

Private project. © Adobek Interior Design and Building. All rights reserved.
