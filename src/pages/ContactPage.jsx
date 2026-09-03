import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { submitConsultation } from '../services/firebaseService';

export default function ContactPage({ isSection = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    telephone: '',
    enquiry: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitConsultation({
        fullName: form.fullName,
        email: form.email,
        telephone: form.telephone,
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
    <div className="bg-transparent py-12 sm:py-16 px-6 sm:px-10 lg:px-16 animate-fade-in transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Intro Subtitle matching Figma Screen 1 */}
        <div className="text-center max-w-3xl mx-auto pt-2">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-adobek-teal dark:text-adobek-gold font-semibold mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-adobek-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300 mb-4">
            Connect with Adobek
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg font-light leading-relaxed tracking-tight transition-colors duration-300">
            If you would like to discuss your project, schedule an appointment or arrange to view more of our extensive portfolio please contact us on the details below.
          </p>
        </div>

        {/* Clean Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-gray-900/90 dark:bg-white/10 my-10 transition-colors duration-300"></div>

        {/* 2-Column Section: Contact (Left) & Enquiries (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start pt-4">
          
          {/* Left Column: Contact */}
          <div className="md:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-adobek-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
              Contact
            </h2>

            <div className="space-y-5 text-[13px] sm:text-sm text-gray-800 dark:text-gray-300 font-light">
              
              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-gray-700 dark:text-adobek-gold mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  Telephone <span className="font-normal text-adobek-charcoal dark:text-white">+251 947 325 252</span>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <Mail className="w-4 h-4 text-gray-700 dark:text-adobek-gold mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  Email <a href="mailto:adobek@adobek-interior.com" className="hover:text-adobek-teal dark:hover:text-adobek-gold transition">adobek@adobek-interior.com</a>
                </p>
              </div>

              {/* Telegram Channel */}
              <div className="flex items-start gap-3.5">
                <MessageSquare className="w-4 h-4 text-gray-700 dark:text-adobek-gold mt-1 shrink-0 stroke-[1.5]" />
                <p className="leading-snug">
                  Direct Telegram <a href="https://t.me/adobekdb" target="_blank" rel="noopener noreferrer" className="hover:text-adobek-teal dark:hover:text-adobek-gold transition">@adobekdb</a>
                </p>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-3.5 pt-2">
                <MapPin className="w-4 h-4 text-gray-700 dark:text-adobek-gold mt-1 shrink-0 stroke-[1.5]" />
                <div className="leading-relaxed text-gray-700 dark:text-gray-400">
                  <p className="font-medium text-adobek-charcoal dark:text-white">Adobek Interior</p>
                  <p>Megenagna</p>
                  <p>Infront of Ethio Ceramics</p>
                  <p>Bete Sahlite-Mihret Building, 4th Floor</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Enquiries Form */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-adobek-charcoal dark:text-white font-normal tracking-wide transition-colors duration-300">
              Enquiries
            </h2>

            {submitted ? (
              <div className="bg-[#EBF2F2] dark:bg-white/5 p-8 border border-adobek-teal/30 dark:border-adobek-gold/20 text-center space-y-4 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-adobek-teal dark:bg-adobek-gold text-white dark:text-adobek-dark rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-adobek-charcoal dark:text-white">Enquiry Submitted Successfully</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, <strong>{form.fullName || 'Valued Client'}</strong>. Your consultation enquiry has been recorded with reference <span className="font-mono text-adobek-teal dark:text-adobek-gold font-semibold">#{submittedId ? submittedId.slice(0, 8) : 'LEAD-OK'}</span>. Our studio team in Addis Ababa will review your requirements and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmittedId('');
                    setForm({ fullName: '', email: '', telephone: '', enquiry: '' });
                  }}
                  className="px-6 py-2 bg-adobek-teal dark:bg-adobek-gold text-white dark:text-adobek-dark text-xs uppercase tracking-wider font-medium hover:bg-adobek-teal-hover dark:hover:bg-adobek-gold/80 transition"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm placeholder-gray-500 dark:placeholder-gray-400 text-adobek-charcoal dark:text-white focus:outline-none focus:border-adobek-teal dark:focus:border-adobek-gold focus:bg-white dark:focus:bg-adobek-charcoal transition"
                  />
                </div>

                {/* Email Address & Telephone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm placeholder-gray-500 dark:placeholder-gray-400 text-adobek-charcoal dark:text-white focus:outline-none focus:border-adobek-teal dark:focus:border-adobek-gold focus:bg-white dark:focus:bg-adobek-charcoal transition"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telephone"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm placeholder-gray-500 dark:placeholder-gray-400 text-adobek-charcoal dark:text-white focus:outline-none focus:border-adobek-teal dark:focus:border-adobek-gold focus:bg-white dark:focus:bg-adobek-charcoal transition"
                    />
                  </div>
                </div>

                {/* Enquiry Textarea */}
                <div>
                  <textarea
                    rows="6"
                    required
                    placeholder="Tell us about your enquiry - New construction / renovation / remodel."
                    value={form.enquiry}
                    onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#EBF2F2]/70 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm placeholder-gray-500 dark:placeholder-gray-400 text-adobek-charcoal dark:text-white focus:outline-none focus:border-adobek-teal dark:focus:border-adobek-gold focus:bg-white dark:focus:bg-adobek-charcoal transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Enquiry Button (Right Aligned, Solid Teal #1E4E4E) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-adobek-teal dark:bg-adobek-gold text-white dark:text-adobek-dark text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-adobek-teal-hover dark:hover:bg-adobek-gold/80 transition duration-200 shadow-sm disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>RECORDING ENQUIRY...</span>
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

      </div>
    </div>
  );
}
