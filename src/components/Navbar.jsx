import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, Phone } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import AdobekLogo from './AdobekLogo';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 pb-2 px-4 sm:px-8 transition-all duration-300">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-terion-orange z-50 transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between border ${
        isScrolled 
          ? 'bg-white/90 dark:bg-terion-card-dark/90 backdrop-blur-md shadow-terion border-terion-border/80 dark:border-white/10' 
          : 'bg-white/70 dark:bg-terion-card-dark/70 backdrop-blur-sm border-terion-border/50 dark:border-white/5'
      }`}>
        
        {/* Left Side: Brand Logo + Left-Aligned Nav Links */}
        <div className="flex items-center gap-4 lg:gap-7">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
            aria-label="Adobek Interior Home"
          >
            <AdobekLogo 
              size={44} 
              light={theme === 'dark'} 
              className={theme === 'dark' ? "text-white" : "text-terion-charcoal"} 
              textClassName={theme === 'dark' ? "text-terion-orange" : "text-terion-charcoal"} 
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-serif tracking-widest font-semibold text-xs text-terion-charcoal dark:text-white uppercase">
                Adobek
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-terion-muted dark:text-terion-gray font-light">
                Interior Design
              </span>
            </div>
          </button>

          {/* Left-Aligned Nav Links with Increased Font Size */}
          <nav className="hidden md:flex items-center gap-1.5 bg-terion-bg/60 dark:bg-white/5 p-1 rounded-full border border-terion-border/40 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4.5 sm:px-5 py-2 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-terion-charcoal text-white dark:bg-white dark:text-terion-charcoal shadow-sm'
                      : 'text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Controls Container */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Telegram Channel Pill */}
          <a
            href="https://t.me/bereketgirma16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram Channel"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0088cc]/10 hover:bg-[#0088cc] text-[#0088cc] hover:text-white transition text-xs font-semibold border border-[#0088cc]/20 shadow-2xs"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z"/>
            </svg>
            <span>Telegram</span>
          </a>

          {/* Quick Call Pill */}
          <a
            href="tel:+251947325252"
            aria-label="Call +251 947 325 252"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-terion-bg dark:bg-white/5 hover:bg-terion-orange hover:text-white text-terion-charcoal dark:text-white transition text-xs font-medium border border-terion-border/60 dark:border-white/10"
          >
            <Phone className="w-3.5 h-3.5 text-terion-orange" />
            <span>+251 947 325 252</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-terion-bg dark:hover:bg-white/10 transition duration-200 border border-transparent hover:border-terion-border dark:hover:border-white/10 focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-terion-stone" />
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-terion-stone dark:text-terion-gray hover:text-terion-charcoal dark:hover:text-white hover:bg-terion-bg dark:hover:bg-white/10 transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-white/95 dark:bg-terion-card-dark/95 backdrop-blur-xl border border-terion-border dark:border-white/10 p-5 shadow-terion-hover space-y-2 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = activePage === link.id || (activePage === 'project-detail' && link.id === 'projects');
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive 
                    ? 'bg-terion-orange/10 text-terion-orange font-semibold' 
                    : 'text-terion-stone dark:text-terion-gray hover:bg-terion-bg dark:hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-terion-orange"></span>}
              </button>
            );
          })}
          <div className="pt-2">
            <Button
              label="Book Consultation"
              variant="primary"
              size="md"
              width="100%"
              onClick={() => handleNavClick('contact')}
              endContent={<ArrowUpRight className="w-4 h-4" />}
              className="!rounded-xl !bg-terion-orange hover:!bg-terion-orange-hover !text-white !border-none !text-xs !font-semibold !tracking-wide !shadow-sm transition"
            />
          </div>
        </div>
      )}
    </header>
  );
}
