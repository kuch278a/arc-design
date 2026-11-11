import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { getDynamicProjects } from '../services/firebaseService';
import { DEFAULT_PROJECTS_LIST } from '../data/defaultData';

export default function ProjectsPage({ onNavigate, onSelectProject, isSection = false }) {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS_LIST);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  useEffect(() => {
    getDynamicProjects().then((data) => {
      if (data && data.length > 0) {
        setProjects(data);
      }
    });
  }, []);

  const categories = ['ALL', 'GOVERNMENTAL', 'PRIVATE ORGANIZATION', 'PRIVATE CORPORATION', 'PRIVATE COMPANY'];

  const filteredProjects = selectedFilter === 'ALL'
    ? projects
    : projects.filter((p) => (p.category || p.tag) === selectedFilter);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* Editorial Header Banner */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 text-center space-y-4">
          <Badge
            variant="neutral"
            icon={<Sparkles className="w-3 h-3 text-terion-orange" />}
            label="Curated Portfolio"
            className="!py-1.5 !px-4 !rounded-full !text-[10.5px] !tracking-[0.25em] !uppercase !bg-terion-card dark:!bg-terion-card-dark !border !border-terion-border/60 dark:!border-white/10 !text-terion-stone dark:!text-terion-gray !shadow-xs"
          />

          <h1 className="font-serif text-4xl sm:text-6xl text-terion-charcoal dark:text-white font-light tracking-tight">
            Architectural <span className="italic font-normal">Works &amp; Commissions</span>
          </h1>

          <p className="text-xs sm:text-sm text-terion-stone dark:text-terion-gray font-light max-w-xl mx-auto leading-relaxed">
            Explore our curated portfolio of commercial headquarters, luxury residences, healthcare complexes, and architectural landmarks.
          </p>
        </section>
      )}

      {/* Projects 2-Column Terion Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div key={selectedFilter} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-fade-in">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => handleProjectClick(item)}
              className="group cursor-pointer rounded-3xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 overflow-hidden shadow-terion hover:shadow-terion-hover transition-all duration-300 flex flex-col"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = item.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Meta Footer */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-terion-charcoal dark:text-white font-normal group-hover:text-terion-orange transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full border border-terion-border dark:border-white/15 flex items-center justify-center text-terion-stone dark:text-white group-hover:bg-terion-orange group-hover:text-white group-hover:border-terion-orange transition-all duration-200 shrink-0">
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
