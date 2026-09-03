# Adobek Interior

A luxury interior design & architecture portfolio website built with React, Vite, Tailwind CSS, and Firebase.

## Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS 3
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Fonts:** Cormorant Garamond, Plus Jakarta Sans, Pinyon Script, Alex Brush
- **Icons:** Lucide React

## Pages

- **Home** – Hero, featured projects, services overview
- **Projects** – Portfolio gallery with filtering
- **Project Detail** – Individual project showcase
- **Services** – Service offerings
- **About** – Company story and team
- **Blog** – Articles and insights
- **Contact** – Contact form
- **Admin Portal** – Content management dashboard

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
src/
├── components/       # Reusable UI components (Navbar, Footer, Logo)
├── data/             # Static content and configuration
├── pages/            # Route pages (Home, Projects, About, etc.)
├── services/         # Firebase service layer
├── App.jsx           # Root component with routing
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind directives
```

## License

Private project. All rights reserved.
