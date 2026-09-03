import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { getDynamicBlogPosts } from '../services/firebaseService';
import { DEFAULT_BLOG_POSTS } from '../data/defaultData';

export default function BlogPage({ isSection = false }) {
  const [posts, setPosts] = useState(DEFAULT_BLOG_POSTS);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    getDynamicBlogPosts().then((data) => {
      if (data && data.length > 0) {
        setPosts(data);
      }
    });
  }, []);

  return (
    <div className="bg-transparent transition-colors duration-300 animate-fade-in">
      
      {/* 1. HERO BANNER: Neoclassical Editorial Title */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-10 text-center space-y-3">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-adobek-teal dark:text-adobek-gold font-semibold">
          THE ADOBEK JOURNAL
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-adobek-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
          Insights & Monograph
        </h2>
        <div className="w-16 h-[2px] bg-adobek-teal dark:bg-adobek-gold mx-auto mt-4"></div>
      </section>

      {/* 2. FEATURED ARTICLES (2-Column Grid) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {posts.slice(0, 2).map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer space-y-4"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal shadow-xs relative">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-adobek-teal dark:bg-adobek-gold text-white dark:text-adobek-dark text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1 shadow-xs">
                  Featured
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10.5px] text-gray-500 dark:text-gray-400 font-medium">
                  <span className="uppercase tracking-wider text-adobek-teal dark:text-adobek-gold">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-adobek-charcoal dark:text-white group-hover:text-adobek-teal dark:group-hover:text-adobek-gold transition duration-300">
                  {post.title}
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 font-light line-clamp-2">
                  {post.summary}
                </p>
                <button className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.2em] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-adobek-teal dark:group-hover:text-adobek-gold transition duration-200">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MORE STORIES */}
      {posts.length > 2 && (
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 border-t border-gray-200 dark:border-white/10">
          <h3 className="font-serif text-2xl sm:text-3xl text-adobek-charcoal dark:text-white mb-8 tracking-wide transition-colors duration-300">
            More Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {posts.slice(2).map((post) => (
              <div 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal shadow-xs">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                    <span className="uppercase tracking-wider text-adobek-teal dark:text-adobek-gold mr-3">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="font-serif text-xl text-adobek-charcoal dark:text-white group-hover:text-adobek-teal dark:group-hover:text-adobek-gold transition duration-300 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-gray-600 dark:text-gray-300 font-light line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. FULL READ OVERLAY MODAL */}
      {selectedPost && (
        <div 
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-adobek-dark w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 dark:border-white/5 transition-colors duration-300"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-adobek-charcoal/90 text-gray-700 dark:text-gray-200 hover:text-adobek-teal dark:hover:text-adobek-gold p-2 rounded-full shadow-sm hover:scale-105 transition"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Image Header */}
            <div className="w-full aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-adobek-charcoal">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  <span className="uppercase tracking-[0.15em] text-adobek-teal dark:text-adobek-gold font-semibold">{selectedPost.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <span>{selectedPost.date}</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl text-adobek-charcoal dark:text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>

              {/* Clean Horizontal Divider */}
              <div className="h-[1px] bg-gray-200 dark:bg-white/10 w-full"></div>

              {/* Body Paragraphs */}
              <div className="font-serif text-[15px] sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6 font-light">
                {selectedPost.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Footer CTA in Modal */}
              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-adobek-teal dark:bg-adobek-gold text-white dark:text-adobek-dark text-[10.5px] uppercase tracking-wider font-semibold hover:bg-adobek-teal-hover dark:hover:bg-adobek-gold/80 transition"
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
