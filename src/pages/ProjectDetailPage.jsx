import React from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, MapPin, Calendar, Layers } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function ProjectDetailPage({ onNavigate, onSelectProject, project }) {
  const activeProject = project || DEFAULT_PROJECTS_LIST[0];

  const gallery = (activeProject.gallery && activeProject.gallery.length > 0)
    ? activeProject.gallery
    : [
        activeProject.image || './assets/telegram/tg_image_1.jpg',
        './assets/telegram/tg_image_7.jpg',
        './assets/telegram/tg_image_8.jpg',
        './assets/telegram/tg_image_9.jpg',
        './assets/telegram/tg_image_10.jpg',
        './assets/telegram/tg_image_11.jpg'
      ];

  const recommendations = DEFAULT_PROJECTS_LIST.filter((p) => p.id !== activeProject.id).slice(0, 2);

  const handleRecommendationClick = (recProject) => {
    if (onSelectProject) {
      onSelectProject(recProject);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* Back to Portfolio pill */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6">
        <Button
          label="Back to Portfolio"
          variant="secondary"
          size="sm"
          onClick={() => onNavigate('projects')}
          icon={<ArrowLeft className="w-3.5 h-3.5" />}
          className="!rounded-full !bg-terion-card dark:!bg-terion-card-dark !border !border-terion-border/60 dark:!border-white/10 !text-xs !font-medium !text-terion-stone dark:!text-terion-gray hover:!text-terion-charcoal dark:hover:!text-white transition !shadow-xs"
        />
      </div>

      {/* Main Project Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Title & Metadata Header */}
        <div className="space-y-4">
          <Badge
            variant="neutral"
            icon={<Sparkles className="w-3 h-3 text-terion-orange" />}
            label={activeProject.category || 'COMMISSION'}
            className="!px-3.5 !py-1 !rounded-full !bg-terion-orange/10 !text-terion-orange !text-[10px] !uppercase !tracking-[0.25em] !font-semibold !border-none"
          />

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-terion-charcoal dark:text-white font-light tracking-tight">
            {activeProject.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-terion-stone dark:text-terion-gray">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-terion-orange" />
              <span>{activeProject.location || 'Addis Ababa, Ethiopia'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-terion-orange" />
              <span>{activeProject.subtitle || activeProject.area || 'Architectural & Interior Design'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-terion-orange" />
              <span>{activeProject.year ? `Completed ${activeProject.year}` : 'Completed 2025'}</span>
            </div>
          </div>
        </div>

        {/* Big Showcase Image */}
        <div className="aspect-[16/10] sm:aspect-[21/10] rounded-3xl overflow-hidden bg-black shadow-terion-hover border border-terion-border/40 dark:border-white/10">
          <img
            src={activeProject.image || activeProject.fallbackImage}
            alt={activeProject.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = activeProject.fallbackImage || './assets/telegram/tg_image_1.jpg';
            }}
          />
        </div>

      </section>


      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        <h3 className="font-serif text-2xl text-terion-charcoal dark:text-white font-light">
          Visual Perspectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.slice(0, 4).map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 dark:bg-black shadow-terion border border-terion-border/40 dark:border-white/10"
            >
              <img
                src={imgUrl}
                alt={`${activeProject.title} Perspective ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* You May Also Like Recommendations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <h3 className="font-serif text-2xl text-terion-charcoal dark:text-white font-light text-center">
          Explore Other Commissions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              onClick={() => handleRecommendationClick(rec)}
              className="group cursor-pointer rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 overflow-hidden shadow-terion hover:shadow-terion-hover transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black">
                <img
                  src={rec.image}
                  alt={rec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl text-terion-charcoal dark:text-white group-hover:text-terion-orange transition">
                    {rec.title}
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full border border-terion-border dark:border-white/10 flex items-center justify-center group-hover:bg-terion-orange group-hover:text-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
