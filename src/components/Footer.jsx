import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp, Globe } from 'lucide-react';
import AdobekLogo from './AdobekLogo';

const SOCIAL_LINKS = {
  telegram: 'https://t.me/bereketgirma16',
  facebook: 'https://www.facebook.com/adobekinterior',
  instagram: 'https://www.instagram.com/adobekinterior',
  tiktok: 'https://www.tiktok.com/@adobekinterior',
  linkedin: 'https://www.linkedin.com/company/adobek-interior',
  phone: 'tel:+251947325252',
  email: 'mailto:adobek@adobek-interior.com',
  website: 'https://adobek-interior.com'
};

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#181715] text-white pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main 5-Column Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          
          {/* Col 1: Brand Logo & Title */}
          <div className="flex flex-col items-start space-y-3">
            <button
              onClick={() => onNavigate('home')}
              className="flex flex-col items-center text-center focus:outline-none group"
              aria-label="Adobek Interior Design Home"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center p-2 mb-2 group-hover:border-white/40 transition">
                <AdobekLogo size={42} light={true} className="text-white" textClassName="text-white" />
              </div>
              <span className="font-serif tracking-[0.25em] font-semibold text-xs text-white uppercase">
                ADOBEK
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.3em] text-white font-normal mt-0.5">
                INTERIORS
              </span>
            </button>
          </div>

          {/* Col 2: Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm sm:text-base text-white font-medium">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white font-normal">
              <p>
                <a href="tel:+251947325252" className="text-white hover:text-terion-orange transition block">
                  +251 947 325 252
                </a>
                <a href="tel:+251923704339" className="text-white hover:text-terion-orange transition block mt-0.5">
                  +251 923 704 339
                </a>
              </p>
             
          
            </div>
          </div>

          {/* Col 3: Address */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm sm:text-base text-white font-medium">
              Address
            </h4>
            <div className="space-y-1 text-xs sm:text-sm text-white font-normal leading-relaxed">
              <p className="text-white">Bole Medhanialem</p>
              <p className="text-white">Behind Edna Mall</p>
              <p className="text-white">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Col 4: Navigation Links */}
          <div className="space-y-2.5">
            <ul className="space-y-2 text-xs font-medium uppercase tracking-[0.15em] text-white">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-white hover:text-terion-orange transition text-left"
                >
                  PROJECTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-white hover:text-terion-orange transition text-left"
                >
                  OUR SERVICES
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-white hover:text-terion-orange transition text-left"
                >
                  ABOUT US
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-white hover:text-terion-orange transition text-left"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Social Icons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.19 1.15 2.15 2.34 2.39.75.16 1.55.05 2.22-.32.74-.41 1.25-1.11 1.42-1.92.1-1.04.05-2.09.05-3.14V.02h.07z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
          </div>

        </div>

        {/* Bottom Bar: Centered Copyright & Scroll-to-Top Button */}
        <div className="pt-8 border-t border-white/10 relative flex items-center justify-center">
          <p className="text-xs text-white font-normal text-center">
            &copy; Adobek Interior Design and Building | All rights reserved
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-terion-orange hover:border-terion-orange text-white flex items-center justify-center transition border border-white/10 shadow-xs"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
