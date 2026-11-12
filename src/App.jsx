import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveDotGrid from './components/InteractiveDotGrid';
import { DEFAULT_PROJECTS_LIST } from './data/defaultData';

// Lazy-loaded Pages for instant initial load and optimal code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const JournalPage = lazy(() => import('./pages/JournalPage'));
const AdminPortal = lazy(() => import('./pages/AdminPortal'));

// Minimal elegant fallback for route transitions
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-20">
      <div className="w-8 h-8 border-2 border-adobek-teal/30 dark:border-adobek-gold/30 border-t-adobek-teal dark:border-t-adobek-gold rounded-full animate-spin"></div>
      <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 font-sans">
        Loading...
      </span>
    </div>
  );
}

function getInitialPage() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (['admin', 'projects', 'services', 'about', 'journal', 'contact', 'project-detail'].includes(hash)) {
    return hash;
  }
  const searchParams = new URLSearchParams(window.location.search);
  const pageParam = searchParams.get('page') || (searchParams.has('admin') ? 'admin' : null);
  if (pageParam && ['admin', 'projects', 'services', 'about', 'journal', 'contact', 'project-detail'].includes(pageParam.toLowerCase())) {
    return pageParam.toLowerCase();
  }
  const path = window.location.pathname.toLowerCase();
  if (path.endsWith('/admin') || path.endsWith('/admin/')) {
    return 'admin';
  }
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage); // 'home' | 'projects' | 'services' | 'about' | 'journal' | 'contact' | 'admin' | 'project-detail'
  const [selectedProject, setSelectedProject] = useState(DEFAULT_PROJECTS_LIST[0]);
  const [theme] = useState('light');

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Dismiss the HTML loading screen once React has mounted
  useEffect(() => {
    const loader = document.getElementById('adobek-loader');
    if (loader) {
      // Small delay so the loading animation is visible briefly
      const timer = setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Enforce permanent white / light mode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    sessionStorage.setItem('theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  const toggleTheme = () => {
    // Permanent white mode
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActivePage('project-detail');
    window.location.hash = 'project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div data-astryx-theme="neutral" className="min-h-screen flex flex-col bg-white text-terion-charcoal font-serif antialiased transition-colors duration-300 relative">
      
      {/* Global Interactive Canvas Dot Grid (Everywhere) */}
      {activePage !== 'admin' && (
        <InteractiveDotGrid
          gap={26}
          proximityRadius={140}
          baseRadius={1.4}
          activeRadius={3.8}
          activeColor={{ r: 225, g: 29, b: 72 }}
          isGlobal={true}
        />
      )}

      {/* 1. Header Navigation Bar (Client Website Only) */}
      {activePage !== 'admin' && (
        <Navbar 
          activePage={activePage} 
          setActivePage={handleNavigate} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
      )}

      {/* 2. Main Page View Router with Suspense */}
      <main className="flex-1 relative z-10">
        <Suspense fallback={<PageLoadingFallback />}>
          {activePage === 'home' && (
            <HomePage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'projects' && (
            <ProjectsPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}
          
          {activePage === 'services' && (
            <ServicesPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'about' && (
            <AboutPage onNavigate={handleNavigate} onSelectProject={handleSelectProject} />
          )}

          {activePage === 'journal' && (
            <JournalPage onNavigate={handleNavigate} />
          )}

          {activePage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {activePage === 'admin' && (
            <AdminPortal onNavigate={handleNavigate} />
          )}

          {activePage === 'project-detail' && (
            <ProjectDetailPage 
              project={selectedProject} 
              onNavigate={handleNavigate} 
              onSelectProject={handleSelectProject}
            />
          )}
        </Suspense>
      </main>

      {/* 3. Footer (Client Website Only) */}
      {activePage !== 'admin' && (
        <div className="relative z-10">
          <Footer onNavigate={handleNavigate} />
        </div>
      )}

    </div>
  );
}
