import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Star, 
  Compass, 
  Layers, 
  DraftingCompass, 
  Award, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';
import { getDynamicProjects } from '../services/firebaseService';

const DEFAULT_HERO_SLIDES = [
  {
    id: 1,
    tag: 'PROJECT #43 • 500 SQM',
    title: 'Lifetime Property Office Interior',
    image: './assets/telegram/tg_image_1.jpg',
    fallbackImage: './assets/telegram/tg_image_7.jpg',
    subtitle: 'COMMERCIAL INTERIOR • 500 SQM',
    location: 'Addis Ababa, Ethiopia',
    description: 'A bespoke 500 sqm commercial office interior architecture commission for Lifetime Property Office in Addis Ababa.'
  },
  {
    id: 2,
    tag: 'PROJECT #44 • 300 SQM',
    title: 'Residence Interior Design',
    image: './assets/telegram/tg_image_2.jpg',
    fallbackImage: './assets/telegram/tg_image_9.jpg',
    subtitle: 'RESIDENTIAL • 300 SQM',
    location: 'Addis Ababa, Ethiopia',
    description: 'A 300 sqm private luxury residence interior combining bespoke timber joinery with contemporary spatial warmth.'
  },
  {
    id: 3,
    tag: 'PROJECT #45 • 750 SQM',
    title: 'Aychesh Apartment',
    image: './assets/telegram/tg_image_3.jpg',
    fallbackImage: './assets/telegram/tg_image_12.jpg',
    subtitle: 'ARCHITECTURAL RESIDENCE • 750 SQM',
    location: 'Bole Airport, Ethiopia',
    description: 'A grand 750 sqm architectural and interior residential commission for W/ro Aychesh at Bole Airport.'
  },
  {
    id: 4,
    tag: 'PROJECT #39 • 500 SQM',
    title: 'Luxury Residence Design',
    image: './assets/telegram/p39_luxury_residence_1.jpg',
    fallbackImage: './assets/telegram/p39_luxury_residence_2.jpg',
    subtitle: 'RESIDENTIAL • 500 SQM',
    location: 'Jacros, Addis Ababa',
    description: 'A 500 sqm private luxury residence commission celebrating organic woodwork and dramatic spatial lighting.'
  }
];

const METRICS = [
  { value: '45+', label: 'Landmark Projects', subtext: 'Executed nationwide' },
  { value: '5+', label: 'Years Experience', subtext: 'In architecture & interiors' },
  { value: '15+', label: 'Civic Commissions', subtext: 'Federal & governmental' },
  { value: '100%', label: 'Turnkey Delivery', subtext: 'On time & on specification' },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation & Discovery',
    description: 'We begin with an in-depth dialogue to understand your lifestyle, spatial priorities, aesthetic aspirations, and functional program.'
  },
  {
    number: '02',
    title: 'Concept & Spatial Planning',
    description: 'Developing photorealistic 3D visualisations, moodboards, architectural space plans, and circadian lighting simulations.'
  },
  {
    number: '03',
    title: 'Bespoke Craft & Materiality',
    description: 'Carefully curating hand-selected natural timber, Italian marble, custom brass details, and bespoke architectural millwork.'
  },
  {
    number: '04',
    title: 'Turnkey Execution & Delivery',
    description: 'Meticulous on-site management and artisanal installation to unveil a flawlessly finished space ready for living.'
  }
];

const SERVICES_PREVIEW = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    category: 'Private Living',
    description: 'Tailored luxury residences, private villas, and penthouses sculpted with bespoke joinery, soothing lighting schemas, and warm organic textures.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'space-planning',
    title: 'Space Planning & Architecture',
    category: 'Spatial Engineering',
    description: 'Comprehensive structural articulation, spatial flow optimization, acoustic zoning, and sustainable climate integration.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'commercial',
    title: 'Commercial & Civic Design',
    category: 'Institutional',
    description: 'Prestigious presidential suites, parliamentary bureaus, broadcast centers, and luxury corporate headquarters built for prominence.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'furniture',
    title: 'Bespoke Furniture & Joinery',
    category: 'Artisanal Craft',
    description: 'Custom handcrafted timber credenzas, acoustic timber domes, and tailored upholstery executed by local master woodworkers.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  }
];

const TESTIMONIALS = [
  {
    quote: 'Adobek Interior elevated our governmental headquarters beyond our highest expectations. Their command over acoustic engineering, cultural craftsmanship, and timeless timber geometry is unmatched in East Africa.',
    author: 'Executive Bureau Director',
    role: 'Civic Project Commission',
    location: 'Addis Ababa'
  },
  {
    quote: 'From initial 3D visualization to turnkey handover, the team executed every bespoke detail with flawless precision. Our corporate flagship now exudes sophistication and international prestige.',
    author: 'Chief Operating Officer',
    role: 'Lifetime Property Office Interior',
    location: 'Corporate Suite'
  },
  {
    quote: 'The level of care in balancing contemporary minimalism with warm cultural identity turned our private villa into a serene, light-filled sanctuary. Truly exceptional artistry.',
    author: 'Private Residence Client',
    role: 'Luxury Villa Commission',
    location: 'Bole, Addis Ababa'
  }
];

export default function HomePage({ onNavigate, onSelectProject }) {
  const [slides, setSlides] = useState(DEFAULT_HERO_SLIDES);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    getDynamicProjects().then((data) => {
      if (data && data.length > 0) {
        setSlides(data);
      }
    });
  }, []);

  // Slide autoplay
  useEffect(() => {
    if (isPaused || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const activeSlide = slides[currentSlide] || DEFAULT_HERO_SLIDES[0];

  const handleHeroClick = () => {
    const project = DEFAULT_PROJECTS_LIST.find((p) => String(p.id) === String(activeSlide.id)) || activeSlide;
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  const handleProjectCardClick = (project) => {
    const fullProject = DEFAULT_PROJECTS_LIST.find((p) => String(p.id) === String(project.id)) || project;
    if (onSelectProject) {
      onSelectProject(fullProject);
    }
  };

  // Filter portfolio
  const categories = ['ALL', 'GOVERNMENTAL', 'PRIVATE ORGANIZATION', 'PRIVATE CORPORATION', 'PRIVATE COMPANY'];
  const filteredProjects = activeCategory === 'ALL'
    ? DEFAULT_PROJECTS_LIST.slice(0, 6)
    : DEFAULT_PROJECTS_LIST.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 transition-colors duration-300">
      
      {/* 1. ADOBEK HERO SECTION */}
      <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-2 sm:pt-4">
        
        {/* Terion Hero Visual Slider Box */}
        <div 
          onClick={handleHeroClick}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="group relative cursor-pointer w-full h-[52vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] min-h-[360px] sm:min-h-[440px] max-h-[680px] 2xl:max-h-[760px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181715] shadow-terion-hover border border-terion-border/40 dark:border-white/10 select-none"
        >
          {/* Images Sliding Track */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
          >
            {slides.map((slide, idx) => (
              <div key={slide.id} className="w-full h-full shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = slide.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Luxury Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-10" />

          {/* Bottom Floating Card with Project Meta */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5 text-white max-w-xl">
              {activeSlide.tag && (
                <Badge
                  variant="neutral"
                  label={activeSlide.tag}
                  className="!bg-white/15 !backdrop-blur-md !text-[9px] !uppercase !tracking-[0.25em] !font-medium !text-white/90 !border !border-white/20 !rounded-full !px-3 !py-1"
                />
              )}
              <h2 className="font-serif text-2xl sm:text-4xl text-white font-light">
                {activeSlide.title}
              </h2>
            </div>

            {/* Slider Dots & Progress Bar */}
            <div className="flex items-center gap-2 self-end sm:self-auto select-none">
              {slides.map((_, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(idx);
                    }}
                    className={`h-1.5 transition-all duration-300 rounded-full focus:outline-none overflow-hidden relative ${
                      isActive ? 'w-8 bg-white/30' : 'w-2 bg-white/40 hover:bg-white'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  >
                    {isActive && (
                      <div 
                        className={`h-full bg-terion-orange rounded-full ${isPaused ? 'w-full' : 'animate-progress-fill'}`}
                        style={{ animationDuration: '6s' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slider Hover Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-terion-orange text-white backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide((prev) => (prev + 1) % slides.length);
            }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-terion-orange text-white backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </section>

      {/* 2. EDITORIAL STATEMENT / HEADLINE (BETWEEN HERO AND PROJECTS) */}
      <section className="max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-terion-charcoal dark:text-white leading-[1.18] sm:leading-[1.14] md:leading-[1.1] tracking-tight">
          Elevating Spaces Through <span className="italic font-normal">Timeless Architecture</span>
        </h1>
      </section>

      {/* 3. FEATURED WORKS (TERION EDITORIAL GRID) */}
      <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-10">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-terion-charcoal dark:text-white font-light tracking-tight">
            Our Works
          </h2>
        </div>

        {/* 2x3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectCardClick(project)}
              className="group cursor-pointer rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 overflow-hidden shadow-terion hover:shadow-terion-hover transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = project.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
                  }}
                />
              </div>

              {/* Meta Card Details */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-terion-charcoal dark:text-white font-normal group-hover:text-terion-orange transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full border border-terion-border dark:border-white/15 flex items-center justify-center text-terion-stone dark:text-white group-hover:bg-terion-orange group-hover:text-white group-hover:border-terion-orange transition-all duration-200 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-4">
          <Button
            label="Explore Complete Portfolio"
            variant="secondary"
            size="lg"
            onClick={() => onNavigate('projects')}
            endContent={<ArrowUpRight className="w-4 h-4" />}
            className="!rounded-full !border !border-terion-charcoal dark:!border-white/20 !text-terion-charcoal dark:!text-white !text-xs !font-semibold !tracking-wide hover:!bg-terion-charcoal hover:!text-white dark:hover:!bg-white dark:hover:!text-terion-charcoal transition-all duration-200 !px-8 !py-3.5"
          />
        </div>

      </section>

      {/* 4. STUDIO PHILOSOPHY / ABOUT SECTION */}
      <section className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 sm:p-14 shadow-terion space-y-10">
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
              OUR PHILOSOPHY
            </span>
            <span className="text-xs text-terion-stone dark:text-terion-gray font-light">
              Est. Addis Ababa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl sm:text-4xl text-terion-charcoal dark:text-white leading-snug font-light">
                “Design is not merely aesthetic ornamentation — it is the choreographing of <span className="italic font-normal text-terion-orange">light, memory,</span> and human dignity.”
              </h3>
              <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light leading-relaxed">
                Led by Founder & Principal Interior Architect Bereket Grima, Adobek Interior Design shapes monumental civic bureaus, high-end broadcast ateliers, and private luxury residences. We celebrate organic timber, polished stone, and circadian illumination.
              </p>
            </div>

            <div className="md:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="./assets/telegram/tg_image_5.jpg"
                  alt="Adobek Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-white border border-terion-border/60 shadow-sm text-left">
                <div className="text-xs font-semibold text-terion-charcoal">Bereket Grima</div>
                <div className="text-[10px] text-terion-stone">Principal Architect</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS SLIDER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-center">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-terion-orange font-semibold">
            WORDS OF TRUST
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-terion-charcoal dark:text-white font-light">
            Client Endorsements
          </h2>
        </div>

        <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 sm:p-14 shadow-terion space-y-6">
          <div className="flex justify-center gap-1 text-terion-orange">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <blockquote className="font-serif italic text-lg sm:text-2xl text-terion-charcoal dark:text-white font-light leading-relaxed max-w-2xl mx-auto">
            “{TESTIMONIALS[activeTestimonial].quote}”
          </blockquote>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-terion-charcoal dark:text-white">
              {TESTIMONIALS[activeTestimonial].author}
            </div>
            <div className="text-[11px] text-terion-stone dark:text-terion-gray font-light">
              {TESTIMONIALS[activeTestimonial].role} &bull; {TESTIMONIALS[activeTestimonial].location}
            </div>
          </div>

          {/* Testimonial Nav Dots */}
          <div className="flex justify-center gap-2 pt-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  activeTestimonial === idx ? 'w-6 bg-terion-orange' : 'w-2 bg-terion-border dark:bg-white/20'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
