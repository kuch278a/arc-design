import React from 'react';
import { Sparkles, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function AboutPage({ onNavigate, onSelectProject, isSection = false }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* Editorial Header */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 text-center space-y-4">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 text-[10.5px] uppercase tracking-[0.25em] text-terion-stone dark:text-terion-gray shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-terion-orange" />
            <span>Studio Heritage &amp; Vision</span>
          </Badge>

          <h1 className="font-serif text-4xl sm:text-6xl text-terion-charcoal dark:text-white font-light tracking-tight">
            Sculpting Spaces with <span className="italic font-normal">Soul &amp; Precision</span>
          </h1>

          <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light max-w-xl mx-auto leading-relaxed">
            Adobek Interior Design is an Addis Ababa-based atelier devoted to creating timeless architectural environments for discerning civic, corporate, and private clients.
          </p>
        </section>
      )}

      {/* Main Studio Narrative Box */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 sm:p-14 shadow-terion grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-6 space-y-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
              OUR ATELIER
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-terion-charcoal dark:text-white font-light leading-snug">
              Bridging Ethiopian Neoclassical Grandeur with European Minimalism
            </h2>
            <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light leading-relaxed">
              Founded by Principal Architect Bereket Grima, our studio approaches every project as a bespoke sculptural composition. We do not apply standardized formulas; rather, we decode the client’s identity and manifest it through authentic materiality, circadian lighting, and custom joinery.
            </p>
            <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light leading-relaxed">
              From the sophisticated 500 sqm corporate suites of Lifetime Property Office to landmark healthcare institutions such as Mesh General Hospital, our portfolio demonstrates architectural authority and uncompromising attention to detail.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <img
                src="./assets/telegram/tg_image_6.jpg"
                alt="Adobek Interior Design Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Spotlight: Bereket Grima */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#1C1A18] text-white border border-white/5 p-8 sm:p-14 shadow-terion-dark">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Portrait */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src="./assets/adobek_profile.jpg"
                  alt="Bereket Grima"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
                  <div className="font-serif text-lg text-white font-light">5+ Years</div>
                  <div className="text-[9px] uppercase tracking-wider text-terion-orange font-medium">
                    Architectural Mastery
                  </div>
                </div>
              </div>
            </div>

            {/* Bio & Vision */}
            <div className="md:col-span-8 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
                PRINCIPAL ARCHITECT
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-white font-light">
                Bereket Grima
              </h3>
              <p className="text-xs sm:text-sm text-terion-gray font-light leading-relaxed">
                As Founder and Lead Interior Architect of Adobek Interior Design, Bereket Grima has established a distinguished signature in civic and luxury residential design. His philosophy roots itself in cultural authenticity, celebrating indigenous timber carving techniques and monumental masonry.
              </p>
              
              <blockquote className="border-l-2 border-terion-orange pl-4 italic text-xs sm:text-sm text-terion-sand font-serif leading-relaxed">
                “Architecture is not merely the enclosure of space; it is the choreographing of light, memory, and human dignity.”
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Civic Masterplanning', 'Acoustic Architecture', 'Luxury Residential', 'Bespoke Joinery'].map((badge, idx) => (
                  <Badge
                    key={idx}
                    variant="neutral"
                    className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white font-medium"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Core Values / Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-terion-charcoal dark:text-white font-light">
            Our Three Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 shadow-terion space-y-3">
            <div className="font-serif text-3xl text-terion-orange font-light">01</div>
            <h3 className="font-serif text-xl text-terion-charcoal dark:text-white font-normal">
              Authentic Heritage
            </h3>
            <p className="text-xs text-terion-stone dark:text-terion-gray font-light leading-relaxed">
              Integrating authentic local materials, bespoke indigenous timber craft, and cultural geometries into modern architectural contexts.
            </p>
          </div>

          <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 shadow-terion space-y-3">
            <div className="font-serif text-3xl text-terion-orange font-light">02</div>
            <h3 className="font-serif text-xl text-terion-charcoal dark:text-white font-normal">
              Architectural Rigor
            </h3>
            <p className="text-xs text-terion-stone dark:text-terion-gray font-light leading-relaxed">
              Precision acoustic calculations, sustainable climate zoning, and seamless structural integration across large-scale civic projects.
            </p>
          </div>

          <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-8 shadow-terion space-y-3">
            <div className="font-serif text-3xl text-terion-orange font-light">03</div>
            <h3 className="font-serif text-xl text-terion-charcoal dark:text-white font-normal">
              Bespoke Execution
            </h3>
            <p className="text-xs text-terion-stone dark:text-terion-gray font-light leading-relaxed">
              Turnkey delivery from schematic concept to master joinery installation, ensuring flawless luxury execution within tight timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <div className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-10 sm:p-14 space-y-4 shadow-terion">
          <h3 className="font-serif text-2xl sm:text-3xl text-terion-charcoal dark:text-white font-light">
            Ready to Begin Your Spatial Journey?
          </h3>
          <p className="text-xs text-terion-stone dark:text-terion-gray font-light max-w-md mx-auto">
            Contact our studio to schedule an architectural consultation with Bereket Grima and our senior design team.
          </p>
          <div className="pt-2 flex justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              label="Book an Appointment"
              variant="primary"
              size="lg"
              endContent={<ArrowRight className="w-4 h-4 ml-1.5" />}
              className="!rounded-full !bg-terion-orange hover:!bg-terion-orange-hover !text-white text-xs font-semibold tracking-wide shadow-sm"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
