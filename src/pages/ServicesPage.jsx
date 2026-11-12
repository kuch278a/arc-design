import React, { useState } from 'react';
import { Sparkles, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

const SERVICES_DATA = [
  {
    id: 1,
    number: '01',
    title: 'Residential Interior Design',
    category: 'Private Living',
    tagline: 'Sculpting intimate sanctuaries of warmth, light, and enduring elegance.',
    description: 'We deliver turnkey interior design for luxury estates, villas, and modern apartments. From spatial layout to bespoke dressing suites, our approach blends classical architectural proportions with tactile organic materials.',
    deliverables: [
      'Comprehensive 3D spatial renders & lighting schemas',
      'Bespoke kitchen, bathroom, and dressing room millwork',
      'Curated Italian marble, travertine, and fine timber sourcing',
      'Full FF&E procurement, styling, and white-glove handover'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 2,
    number: '02',
    title: 'Space Planning & Architectural Design',
    category: 'Spatial Engineering',
    tagline: 'Harmonizing flow, natural light, and structural precision.',
    description: 'Master spatial planning that optimizes room proportions, circulation paths, and internal sightlines. We specialize in circadian daylight engineering and seamless spatial transitions.',
    deliverables: [
      'Architectural space planning & partition redesign',
      'Acoustic resonance appraisals & modular paneling',
      'Circadian automation & concealed lighting troughs',
      'Structural feasibility & MEP engineering coordination'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 3,
    number: '03',
    title: 'Commercial & Civic Interior Design',
    category: 'Institutional & Corporate',
    tagline: 'Monumental civic bureaus and corporate headquarters built for prominence.',
    description: 'Designing state presidential suites, media broadcast studios, and financial corporate flagships. We fuse Ethiopian cultural geometry with modern institutional dignity.',
    deliverables: [
      'Grand ceremonial state rooms & executive suites',
      'Broadcast-grade acoustic studios & recording rooms',
      'High-security biometric routing & executive lounges',
      'Corporate spatial identity & reception landmarks'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 4,
    number: '04',
    title: 'Bespoke Furniture & Artisanal Joinery',
    category: 'Artisanal Craftsmanship',
    tagline: 'Tailored architectural millwork executed with master woodworkers.',
    description: 'Every landmark commission features bespoke elements made specifically for that space — handcrafted timber credenzas, parametric acoustic domes, and brass-inlaid dining tables.',
    deliverables: [
      'Custom coffered timber domes and acoustic wall fins',
      'Handcrafted executive desks & boardroom tables',
      'Precision architectural joinery & concealed storage',
      'Artisanal metalwork, brass accents, and upholstery'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
  }
];

export default function ServicesPage({ onNavigate, onSelectProject, isSection = false }) {
  const [expandedService, setExpandedService] = useState(1);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* Header Banner */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 text-center space-y-4">
          <Badge
            variant="neutral"
            icon={<Sparkles className="w-3 h-3 text-terion-orange" />}
            label="Core Capabilities"
            className="!py-1.5 !px-4 !rounded-full !text-[10.5px] !tracking-[0.25em] !uppercase !bg-terion-card dark:!bg-terion-card-dark !border !border-terion-border/60 dark:!border-white/10 !text-terion-stone dark:!text-terion-gray !shadow-xs"
          />

          <h1 className="font-serif text-4xl sm:text-6xl text-terion-charcoal dark:text-white font-light tracking-tight">
            Comprehensive <span className="italic font-normal">Interior &amp; Architecture</span>
          </h1>

          <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light max-w-xl mx-auto leading-relaxed">
            From initial spatial appraisals to turnkey master joinery installation, we craft spaces that radiate calm and distinction.
          </p>
        </section>
      )}

      {/* 4 Dedicated Service Cards with Expandable Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        {SERVICES_DATA.map((srv) => {
          const isOpen = expandedService === srv.id;
          return (
            <div
              key={srv.id}
              className="rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 overflow-hidden shadow-terion transition-all duration-300"
            >
              {/* Card Header Row */}
              <button
                onClick={() => toggleService(srv.id)}
                className="w-full p-6 sm:p-10 flex items-center justify-between gap-4 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="font-serif text-2xl sm:text-3xl text-terion-orange font-light">
                    {srv.number}
                  </span>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-terion-stone dark:text-terion-gray font-light block">
                      {srv.category}
                    </span>
                    <h2 className="font-serif text-xl sm:text-3xl text-terion-charcoal dark:text-white font-normal">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-terion-border dark:border-white/10 flex items-center justify-center text-terion-stone dark:text-white hover:bg-terion-orange hover:text-white transition shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {/* Expandable Body */}
              {isOpen && (
                <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-2 border-t border-terion-border/40 dark:border-white/5 animate-fade-in grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-5">
                    <p className="font-serif italic text-base sm:text-lg text-terion-charcoal dark:text-terion-sand font-light">
                      “{srv.tagline}”
                    </p>
                    <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-terion-charcoal dark:text-white">
                        Key Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-terion-stone dark:text-terion-gray">
                        {srv.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-terion-orange shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <Button
                        label="Inquire About This Service"
                        variant="primary"
                        size="md"
                        onClick={() => onNavigate('contact')}
                        endContent={<ArrowRight className="w-3.5 h-3.5" />}
                        className="!px-6 !py-2.5 !rounded-full !bg-terion-orange hover:!bg-terion-orange-hover !text-white !border-none !text-xs !font-semibold !tracking-wide !shadow-sm transition"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Consultation Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <div className="rounded-3xl bg-terion-card text-terion-charcoal p-10 sm:p-14 space-y-4 border border-terion-border/60 shadow-terion">
          <span className="text-[10px] uppercase tracking-[0.28em] text-terion-orange font-semibold">
            BOOK A CONSULTATION
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-terion-charcoal font-light">
            Need a Tailored Architectural Proposal?
          </h3>
          <p className="text-xs text-terion-stone font-light max-w-md mx-auto">
            Our principal team will review your drawings, program requirements, and schedule a dedicated spatial consultation.
          </p>
          <div className="pt-2">
            <Button
              label="Contact Our Studio"
              variant="primary"
              size="lg"
              onClick={() => onNavigate('contact')}
              endContent={<ArrowRight className="w-3.5 h-3.5" />}
              className="!px-8 !py-3.5 !rounded-full !bg-terion-orange hover:!bg-terion-orange-hover !text-white !border-none !text-xs !font-semibold !tracking-wide !shadow-sm transition"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
