import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Sparkles } from 'lucide-react';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { getDynamicJournalPosts } from '../services/firebaseService';
import { DEFAULT_JOURNAL_POSTS } from '../data/defaultData';

export default function JournalPage({ isSection = false }) {
  const [posts, setPosts] = useState(DEFAULT_JOURNAL_POSTS);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getDynamicJournalPosts().then((data) => {
      if (data && data.length > 0) {
        setPosts(data);
      }
    });
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24 pb-24 transition-colors duration-300">
      
      {/* Editorial Header */}
      {!isSection && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 text-center space-y-4">
          <Badge
            variant="neutral"
            icon={<Sparkles className="w-3 h-3 text-terion-orange" />}
            label="Design Monograph"
            className="!py-1.5 !px-4 !rounded-full !text-[10.5px] !tracking-[0.25em] !uppercase !bg-terion-card !border !border-terion-border/60 !text-terion-stone !shadow-xs"
          />

          <h1 className="font-serif text-4xl sm:text-6xl text-terion-charcoal font-light tracking-tight">
            Architectural <span className="italic font-normal">Journal &amp; Insights</span>
          </h1>

          <p className="text-xs sm:text-sm text-terion-stone font-light max-w-xl mx-auto leading-relaxed">
            Essays on bespoke timber craftsmanship, circadian lighting automation, and translating cultural heritage into contemporary sanctuaries.
          </p>
        </section>
      )}

      {/* Terion 3-Column Journal Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer rounded-3xl bg-terion-card border border-terion-border/60 overflow-hidden shadow-terion hover:shadow-terion-hover transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="neutral"
                    label={post.category}
                    className="!bg-white/95 !backdrop-blur-sm !text-[9px] !uppercase !tracking-[0.2em] !font-medium !text-terion-charcoal !border !border-black/5 !rounded-full !px-3 !py-1"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10.5px] text-terion-stone font-light">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-terion-charcoal font-normal group-hover:text-terion-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-terion-stone font-light leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-2 text-xs font-semibold text-terion-orange flex items-center gap-1.5">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-terion-card border border-terion-border/60 shadow-2xl p-6 sm:p-10 my-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-terion-bg flex items-center justify-center text-terion-stone hover:bg-terion-orange hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 pr-10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
                {selectedPost.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-terion-charcoal font-normal">
                {selectedPost.title}
              </h2>
              <div className="text-xs text-terion-stone font-light flex items-center gap-3">
                <span>{selectedPost.date}</span>
                <span>&bull;</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-terion-stone font-light leading-relaxed">
              {selectedPost.paragraphs ? (
                selectedPost.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                <p>{selectedPost.summary}</p>
              )}
            </div>

            <div className="pt-4 border-t border-terion-border/40 flex justify-end">
              <Button
                label="Close Article"
                variant="secondary"
                size="md"
                onClick={() => setSelectedPost(null)}
                className="!px-6 !py-2.5 !rounded-full !bg-terion-charcoal !text-white !text-xs !font-semibold hover:!bg-terion-orange hover:!text-white transition"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
