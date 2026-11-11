import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { submitConsultation } from '../services/firebaseService';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    telephone: '',
    enquiry: '',
    companyUrl: '' // honeypot
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.companyUrl) {
      // Spam honeypot triggered
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitConsultation({
        fullName: form.fullName,
        email: form.email,
        telephone: form.telephone,
        projectType: 'General Enquiry',
        enquiry: form.enquiry
      });
      if (res && res.id) {
        setSubmittedId(res.id);
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-terion-bg dark:bg-terion-bg-dark min-h-screen animate-fade-in transition-colors duration-300 font-serif">
      
      {/* Editorial Header Section - Compact so content is visible above the fold */}
      <section aria-labelledby="contact-page-heading" className="w-full pt-8 sm:pt-12 pb-6 px-5 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-terion-orange font-semibold">
            GET IN TOUCH
          </span>
          <h1 id="contact-page-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-terion-charcoal dark:text-white font-normal">
            Contact Us
          </h1>
          <p className="font-serif text-base sm:text-xl text-terion-stone dark:text-terion-gray leading-relaxed max-w-2xl mx-auto">
            If you would like to discuss your project, schedule an appointment or arrange to view more of our extensive portfolio please contact us on the details below.
          </p>
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" aria-hidden="true">
        <div className="h-[1px] bg-terion-border dark:bg-white/10 w-full mb-8 sm:mb-10"></div>
      </div>

      {/* Main 2-Column Contact & Enquiries Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Direct Atelier Information (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-terion-charcoal dark:text-white font-normal tracking-wide">
                Direct Contact
              </h2>
              <p className="text-xs text-terion-stone dark:text-terion-gray font-light">
                Reach Principal Architect Bereket Grima and our senior design atelier.
              </p>
            </div>
            
            <div className="space-y-3 font-serif">
              {/* Telephone Card */}
              <div className="p-4 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 shadow-xs flex items-start gap-4 hover:border-terion-orange/50 transition">
                <div className="w-10 h-10 rounded-full bg-terion-orange/10 text-terion-orange flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-terion-stone dark:text-terion-gray font-semibold">
                    Telephone
                  </p>
                  <p className="text-sm font-semibold text-terion-charcoal dark:text-white">
                    <a
                      href="tel:+251947325252"
                      className="hover:text-terion-orange transition"
                    >
                      +251 947 325 252
                    </a>
                  </p>
                  <p className="text-sm font-semibold text-terion-charcoal dark:text-white">
                    <a
                      href="tel:+251923704339"
                      className="hover:text-terion-orange transition text-terion-stone dark:text-terion-gray hover:text-terion-orange"
                    >
                      +251 923 704 339
                    </a>
                  </p>
                </div>
              </div>

              {/* Telegram Card (High Visibility with Paper Plane SVG) */}
              <div className="p-4 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 shadow-xs flex items-start gap-4 hover:border-terion-orange/50 transition">
                <div className="w-10 h-10 rounded-full bg-[#0088cc]/10 text-[#0088cc] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.941z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-terion-stone dark:text-terion-gray font-semibold">
                    Telegram Channel &amp; Direct
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://t.me/bereketgirma16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition text-xs font-semibold"
                    >
                      <span>@bereketgirma16</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href="https://t.me/Bek0308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terion-bg dark:bg-white/10 text-terion-charcoal dark:text-white hover:bg-terion-orange hover:text-white transition text-xs font-medium"
                    >
                      <span>@Bek0308</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 shadow-xs flex items-start gap-4 hover:border-terion-orange/50 transition">
                <div className="w-10 h-10 rounded-full bg-terion-orange/10 text-terion-orange flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-terion-stone dark:text-terion-gray font-semibold">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-terion-charcoal dark:text-white">
                    <a
                      href="mailto:adobek@adobek-interior.com"
                      className="hover:text-terion-orange transition"
                    >
                      adobek@adobek-interior.com
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 shadow-xs flex items-start gap-4 hover:border-terion-orange/50 transition">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-terion-stone dark:text-terion-gray font-semibold">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-terion-charcoal dark:text-white">
                    <a
                      href="https://wa.me/251947325252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition"
                    >
                      +251 947 325 252
                    </a>
                  </p>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terion-orange/10 text-terion-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 leading-relaxed">
                  <p className="text-[10px] uppercase tracking-wider text-terion-stone dark:text-terion-gray font-semibold">
                    Atelier Location
                  </p>
                  <p className="text-sm font-semibold text-terion-charcoal dark:text-white">Adobek Interior Design</p>
                  <p className="text-xs text-terion-stone dark:text-terion-gray">Bole Medhanialem, Behind Edna Mall</p>
                  <p className="text-xs text-terion-stone dark:text-terion-gray">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiries Form (7 Cols) */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-terion-charcoal dark:text-white font-normal tracking-wide">
                Send an Enquiry
              </h2>
              <p className="text-xs text-terion-stone dark:text-terion-gray font-light">
                Fill in your details below and our team will get in touch regarding your architectural commission.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 text-center space-y-4 animate-fade-in font-serif shadow-terion">
                <div className="w-12 h-12 rounded-full bg-terion-orange/10 text-terion-orange mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-terion-charcoal dark:text-white font-normal">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-sm text-terion-stone dark:text-terion-gray max-w-md mx-auto leading-relaxed">
                  Your message has been received. Our atelier team will review your enquiry and contact you promptly.
                </p>
                {submittedId && (
                  <p className="text-xs text-terion-orange font-mono tracking-wider">
                    Reference #{submittedId.slice(0, 8).toUpperCase()}
                  </p>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        fullName: '',
                        email: '',
                        telephone: '',
                        enquiry: '',
                        companyUrl: ''
                      });
                    }}
                    className="px-8 py-3.5 bg-terion-orange hover:bg-terion-orange-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition duration-200 rounded-sm shadow-md"
                  >
                    <span>SUBMIT ANOTHER ENQUIRY</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-serif bg-terion-card dark:bg-terion-card-dark border border-terion-border/60 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-terion">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="companyUrl">Leave Blank</label>
                  <input
                    id="companyUrl"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.companyUrl}
                    onChange={(e) => setForm({ ...form, companyUrl: e.target.value })}
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-terion-charcoal dark:text-white mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    maxLength={200}
                    placeholder="e.g. Bereket Grima"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-terion-bg/60 dark:bg-white/5 border border-terion-border/70 dark:border-white/10 text-base sm:text-sm placeholder-terion-stone/50 dark:placeholder-white/40 text-terion-charcoal dark:text-white focus:outline-none focus:border-terion-orange dark:focus:border-terion-orange focus:ring-1 focus:ring-terion-orange transition rounded-xl font-serif"
                  />
                </div>

                {/* Email & Telephone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-terion-charcoal dark:text-white mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={320}
                      placeholder="client@company.et"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-terion-bg/60 dark:bg-white/5 border border-terion-border/70 dark:border-white/10 text-base sm:text-sm placeholder-terion-stone/50 dark:placeholder-white/40 text-terion-charcoal dark:text-white focus:outline-none focus:border-terion-orange dark:focus:border-terion-orange focus:ring-1 focus:ring-terion-orange transition rounded-xl font-serif"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-xs font-medium text-terion-charcoal dark:text-white mb-1.5">
                      Telephone Number *
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      required
                      maxLength={40}
                      placeholder="+251 947 325 252"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className="w-full px-4 py-3 bg-terion-bg/60 dark:bg-white/5 border border-terion-border/70 dark:border-white/10 text-base sm:text-sm placeholder-terion-stone/50 dark:placeholder-white/40 text-terion-charcoal dark:text-white focus:outline-none focus:border-terion-orange dark:focus:border-terion-orange focus:ring-1 focus:ring-terion-orange transition rounded-xl font-serif"
                    />
                  </div>
                </div>

                {/* Enquiry Textarea */}
                <div>
                  <label htmlFor="enquiry" className="block text-xs font-medium text-terion-charcoal dark:text-white mb-1.5">
                    Project Details &amp; Scope *
                  </label>
                  <textarea
                    id="enquiry"
                    rows={5}
                    required
                    maxLength={5000}
                    placeholder="Tell us about your project - Commercial office, luxury residence, healthcare complex, or civic architecture."
                    value={form.enquiry}
                    onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                    className="w-full px-4 py-3 bg-terion-bg/60 dark:bg-white/5 border border-terion-border/70 dark:border-white/10 text-base sm:text-sm placeholder-terion-stone/50 dark:placeholder-white/40 text-terion-charcoal dark:text-white focus:outline-none focus:border-terion-orange dark:focus:border-terion-orange focus:ring-1 focus:ring-terion-orange transition rounded-xl resize-none font-serif"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-terion-orange hover:bg-terion-orange-hover text-white text-xs uppercase tracking-[0.2em] font-semibold transition duration-200 rounded-full shadow-md disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING ENQUIRY...</span>
                      </>
                    ) : (
                      <span>SUBMIT ENQUIRY</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
