import React from 'react';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function AboutPage({ onNavigate, onSelectProject, isSection = false }) {
  const handleProjectClick = (projId) => {
    const proj = DEFAULT_PROJECTS_LIST.find((p) => p.id === projId) || DEFAULT_PROJECTS_LIST[0];
    if (onSelectProject) {
      onSelectProject(proj);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <div className="bg-transparent animate-fade-in transition-colors duration-300">
      
      {/* 1. HERO: Glass Facade & Sky Banner matching Figma Image 4 */}
      <section className="relative w-full min-h-[420px] sm:min-h-[480px] flex items-center justify-center bg-gray-900 overflow-hidden px-6 py-20 text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90')`
          }}
        ></div>
        
        <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[0.5px]"></div>

        {/* Hero Title Overlay */}
        <div className="relative z-10 space-y-2 text-adobek-charcoal">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-adobek-teal dark:text-adobek-gold font-semibold">
            OUR COMPANY
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-adobek-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
            About Us
          </h1>
        </div>
      </section>

      {/* 2. 2-COLUMN INTRO SECTION matching Figma Screen 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left: Heading & Script Accent */}
          <div className="md:col-span-5 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-adobek-charcoal dark:text-white font-normal leading-tight transition-colors duration-300">
              Transforming spaces into timeless, elegant environments.
            </h2>
            <p className="font-script text-2xl sm:text-3xl text-adobek-teal dark:text-adobek-gold pt-2 transition-colors duration-300">
              elevating human experiences
            </p>
          </div>

          {/* Right: Body Narrative */}
          <div className="md:col-span-7 space-y-5 text-gray-700 dark:text-gray-300 font-light text-xs sm:text-[13.5px] leading-relaxed transition-colors duration-300">
            <p>
              Adobek Interior is a premier interior architecture and design atelier rooted in Addis Ababa, Ethiopia. We specialize in high-end governmental complexes, prestigious corporate headquarters, luxury residential retreats, and bespoke commercial environments.
            </p>
            <p>
              Our philosophy bridges Ethiopian neoclassical grandeur with contemporary European minimalism. Every space we sculpt is meticulously tailored with custom timber craftsmanship, refined acoustic engineering, and timeless marble textures designed to inspire for generations.
            </p>
          </div>

        </div>
      </section>

      {/* 2.5 LEADERSHIP SPOTLIGHT: Adobek - Principal Architect */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-adobek-teal dark:text-adobek-gold font-semibold mb-2">
            LEADERSHIP & VISION
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-adobek-charcoal dark:text-white font-normal">
            The Architect Behind the Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center bg-gray-50/60 dark:bg-white/[0.02] border border-gray-200/70 dark:border-white/10 p-8 sm:p-12 rounded-sm">
          {/* Portrait */}
          <div className="md:col-span-4 relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px]">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-200 dark:bg-adobek-charcoal shadow-xl">
                <img
                  src="./assets/adobek_profile.jpg"
                  alt="Adobek — Founder & Principal Interior Architect"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85';
                  }}
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 bg-adobek-teal text-white px-5 py-4 shadow-lg text-center border border-adobek-gold/40">
                <div className="font-serif text-3xl font-light leading-none text-adobek-gold">5+</div>
                <div className="text-[9px] uppercase tracking-widest mt-1 font-medium text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-8 space-y-5 pt-4 md:pt-0">
            <div>
              <h3 className="font-serif text-4xl sm:text-5xl text-adobek-charcoal dark:text-white font-normal leading-tight">
                Adobek
              </h3>
              <p className="text-[11px] uppercase tracking-[0.28em] text-adobek-gold font-semibold mt-2">
                Founder &amp; Principal Interior Architect
              </p>
            </div>

            <div className="w-10 h-[2px] bg-adobek-gold" />

            <p className="text-gray-700 dark:text-gray-300 font-light text-sm leading-relaxed">
              With over five years of distinguished practice, Adobek leads ADObek Design Build with a rare fusion of monumental civic purpose, acoustic mastery, and refined material artistry. His landmark commissions span national governmental headquarters, premier corporate campuses, and intimate private residences across Ethiopia.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
              Rooted in Addis Ababa's architectural tradition yet informed by European minimalism, Adobek's philosophy centres on spaces that carry cultural memory while embracing the clarity of contemporary design.
            </p>

            <blockquote className="border-l-2 border-adobek-gold pl-5 italic text-sm text-gray-600 dark:text-gray-300 font-serif leading-relaxed">
              "Architecture is not merely the enclosure of space; it is the choreographing of light, memory, and human dignity."
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold border border-adobek-teal/40 dark:border-adobek-gold/30 text-adobek-teal dark:text-adobek-gold px-3 py-1.5">
                Interior Architecture
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold border border-adobek-teal/40 dark:border-adobek-gold/30 text-adobek-teal dark:text-adobek-gold px-3 py-1.5">
                Civic Design
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold border border-adobek-teal/40 dark:border-adobek-gold/30 text-adobek-teal dark:text-adobek-gold px-3 py-1.5">
                Luxury Residential
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH FEATURE BANNER: Concrete Atrium & Floating Stairs */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[560px] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
            alt="Adobek Design Atelier Workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 4. CORE VALUES / THREE PILLARS matching Figma */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 text-center md:text-left">
          
          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-adobek-teal dark:text-adobek-gold font-light">01</span>
            <h3 className="font-serif text-xl sm:text-2xl text-adobek-charcoal dark:text-white transition-colors duration-300">
              Authentic Heritage
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Integrating authentic local materials, bespoke indigenous timber craft, and cultural geometries into modern architectural contexts.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-adobek-teal dark:text-adobek-gold font-light">02</span>
            <h3 className="font-serif text-xl sm:text-2xl text-adobek-charcoal dark:text-white transition-colors duration-300">
              Architectural Rigor
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Precision acoustic calculations, sustainable climate zoning, and seamless structural integration across large-scale civic projects.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-serif text-3xl sm:text-4xl text-adobek-teal dark:text-adobek-gold font-light">03</span>
            <h3 className="font-serif text-xl sm:text-2xl text-adobek-charcoal dark:text-white transition-colors duration-300">
              Bespoke Execution
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light transition-colors duration-300">
              Turnkey delivery from schematic concept to master joinery installation, ensuring flawless luxury execution within tight timelines.
            </p>
          </div>

        </div>
      </section>

      {/* 5. QUOTE BANNER matching Figma Image 4 */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-adobek-charcoal dark:text-white leading-relaxed font-light transition-colors duration-300">
          “Architecture should speak of its time and place, but yearn for timelessness.”
        </blockquote>
      </section>

      {/* 6. "Recent Projects" Section matching Figma Image 4 */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 space-y-12">
        
        {/* Heading with Divider Lines */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
          <h3 className="font-serif text-2xl sm:text-3xl text-adobek-charcoal dark:text-white tracking-wide transition-colors duration-300">
            Recent Projects
          </h3>
          <div className="h-[1px] bg-gray-300 dark:bg-white/10 flex-1 max-w-[240px]"></div>
        </div>

        {/* 2 Project Cards with Solid Teal Label Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Amibara Properties */}
          <div 
            onClick={() => handleProjectClick(5)}
            className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
              alt="Amibara Properties"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 bg-adobek-teal/95 dark:bg-adobek-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
              <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                PRIVATE COMPANY
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                Amibara Properties
              </h4>
            </div>
          </div>

          {/* Card 2: Ministry of Revenues */}
          <div 
            onClick={() => handleProjectClick(6)}
            className="group relative cursor-pointer aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src="./assets/p6_revenues.png"
              alt="Ministry of Revenues"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 bg-adobek-teal/95 dark:bg-adobek-teal/95 backdrop-blur-[2px] p-5 sm:p-6 text-white transition-all duration-300">
              <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.28em] text-white/80 font-medium block">
                GOVERNMENTAL
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-normal mt-0.5 text-white">
                Ministry of Revenues
              </h4>
            </div>
          </div>

        </div>

        {/* View All Projects Link */}
        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('projects')}
            className="text-[10.5px] uppercase tracking-[0.28em] font-semibold text-gray-800 dark:text-gray-200 hover:text-adobek-teal dark:hover:text-adobek-gold transition border-b border-gray-400 dark:border-white/20 pb-0.5"
          >
            VIEW ALL PROJECTS
          </button>
        </div>

      </section>

    </div>
  );
}
