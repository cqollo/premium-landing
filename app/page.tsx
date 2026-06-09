'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductionFunnel() {
  // Contact Form Engine State
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Interactive FAQ Engine State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  async function handleInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch('/api/inquire', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) setFormStatus('success');
      else setFormStatus('error');
    } catch {
      setFormStatus('error');
    }
  }

  const faqData = [
    {
      q: "What is your typical development timeline?",
      a: "A premium bespoke platform generally spans 4 to 6 weeks. This includes architectural planning, visual drafts, and complete React/Next.js engineering with structural optimizations."
    },
    {
      q: "Do you use third-party templates or page builders?",
      a: "Never. Every line of code is written completely from scratch tailored to your exact business constraints. This ensures clean dependency trees, extreme performance speeds, and unmatched structural security."
    },
    {
      q: "How do you handle post-launch application maintenance?",
      a: "Every engagement includes 30 days of direct structural support. Following launch, we offer custom monthly engineering retainers to continually audit performance, update dependencies, and optimize feature deployments."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C2C2C] font-sans antialiased selection:bg-[#9C6B53] selection:text-white">
      
      {/* 1. BRAND NAVIGATION HEADER */}
      <header className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between border-b border-[#2C2C2C]/5 animate-fade-in-up">
        <div className="text-xl font-semibold tracking-tight uppercase">
          North <span className="font-light text-[#9C6B53]">&</span> Knot
        </div>
        <nav className="hidden md:flex space-x-10 text-xs uppercase tracking-widest font-medium text-[#2C2C2C]/70">
          <a href="#work" className="hover:text-[#2C2C2C] transition-colors duration-200">Selected Works</a>
          <a href="#process" className="hover:text-[#2C2C2C] transition-colors duration-200">Our Method</a>
          <a href="#faq" className="hover:text-[#2C2C2C] transition-colors duration-200">FAQ</a>
        </nav>
        <a 
          href="#contact" 
          className="text-xs uppercase tracking-widest border border-[#2C2C2C] px-6 py-3 hover:bg-[#2C2C2C] hover:text-[#F9F8F6] transition-all duration-300 ease-out"
        >
          Initiate Project
        </a>
      </header>

      <main>
        
        {/* 2. THE HERO INTERFACE */}
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center md:pt-40 md:pb-36">
          <span className="text-xs uppercase tracking-widest text-[#9C6B53] font-semibold block mb-4">
            Digital Architecture Studio
          </span>
          <h1 className="text-4xl md:text-7xl font-normal tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto text-balance">
            We design and build elite digital architecture for premium brands.
          </h1>
          <p className="text-lg md:text-xl text-[#2C2C2C]/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            No templates. No bloated codebases. Just tailored React applications built with strict precision to convert high-value traffic into predictable revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-xs uppercase tracking-widest bg-[#9C6B53] text-[#F9F8F6] px-10 py-5 font-medium hover:bg-[#835943] transition-colors duration-200 shadow-sm text-center"
            >
              Secure a Consultation
            </a>
            <a 
              href="#work" 
              className="w-full sm:w-auto text-xs uppercase tracking-widest text-[#2C2C2C] border border-[#2C2C2C]/10 px-10 py-5 font-medium hover:bg-[#2C2C2C]/5 transition-colors duration-200 text-center"
            >
              View Portfolio
            </a>
          </div>
        </section>

        {/* 3. PROOF ANCHOR ROW */}
        <section className="bg-[#2C2C2C]/5 py-12 border-y border-[#2C2C2C]/5">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs uppercase tracking-widest text-[#2C2C2C]/40 font-medium mb-8">
              Trusted by operators at premium enterprises
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale contrast-200">
              <span className="text-xs font-semibold uppercase tracking-widest">Mivuli Kern Atelier</span>
              <span className="text-xs font-semibold uppercase tracking-widest">Axiom Automated</span>
              <span className="text-xs font-semibold uppercase tracking-widest">Vitalis Labs</span>
            </div>
          </div>
        </section>

        {/* 4. HIGH-RESOLUTION CASE STUDIES */}
<section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-36">
  <div className="mb-20">
    <span className="text-xs uppercase tracking-widest text-[#9C6B53] font-semibold block mb-2">
      Case Studies
    </span>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight">
      Selected Gallery
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
    
    {/* Project Card 1: The Artisan Furniture Platform */}
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] bg-[#2C2C2C]/5 overflow-hidden mb-8 relative border border-[#2C2C2C]/5">
        <Image 
          src="/projects/mivuli-atelier.webp"
          alt="Bespoke luxury furniture designs showcasing natural grain wood finishes"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          priority
        />
      </div>
      <h3 className="text-2xl font-normal mb-2 group-hover:text-[#9C6B53] transition-colors duration-200">
        01 / The Artisan Furniture Platform
      </h3>
      <p className="text-sm text-[#2C2C2C]/60 font-light max-w-md leading-relaxed">
        A custom configuration platform combining raw, architectural precision with rich timber grain visualization. Engineered for an elite local woodworking collective.
      </p>
    </div>

    {/* Project Card 2: High-Frequency Trading System */}
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] bg-[#2C2C2C]/5 overflow-hidden mb-8 relative border border-[#2C2C2C]/5">
        <Image 
          src="/projects/axiom-dashboard.webp"
          alt="Minimalist dark mode user interface dashboard showing analytical metrics"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <h3 className="text-2xl font-normal mb-2 group-hover:text-[#9C6B53] transition-colors duration-200">
        02 / High-Frequency Trading System
      </h3>
      <p className="text-sm text-[#2C2C2C]/60 font-light max-w-md leading-relaxed">
        An advanced custom React dashboard featuring live state parsing, continuous data streams, and ultra-secure endpoint filter integration.
      </p>
    </div>

  </div>
</section>

        {/* 5. PROCESS ARCHITECTURE TIMELINE */}
        <section id="process" className="border-t border-[#2C2C2C]/5 py-24 md:py-36 bg-[#F1EFEA]/40">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-20 md:text-center">
              <span className="text-xs uppercase tracking-widest text-[#9C6B53] font-semibold block mb-2">
                Our Method
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight max-w-xl md:mx-auto">
                A highly disciplined engineering sequence.
              </h2>
            </div>

            <div className="space-y-16 max-w-3xl mx-auto">
              <div className="relative pl-10 border-l border-[#2C2C2C]/10 group">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#9C6B53]" />
                <span className="text-xs font-mono text-[#9C6B53] block mb-2 font-medium">Phase 01 / Discovery</span>
                <h3 className="text-xl font-medium mb-3">Digital Architecture Definition</h3>
                <p className="text-sm text-[#2C2C2C]/70 font-light leading-relaxed">
                  We audit your traffic blueprints and ad hooks. We construct a comprehensive technical roadmap, defining specific state management pipelines and user tracking models before writing a line of code.
                </p>
              </div>

              <div className="relative pl-10 border-l border-[#2C2C2C]/10 group">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#9C6B53]" />
                <span className="text-xs font-mono text-[#9C6B53] block mb-2 font-medium">Phase 02 / Interface</span>
                <h3 className="text-xl font-medium mb-3">Premium Aesthetic Engineering</h3>
                <p className="text-sm text-[#2C2C2C]/70 font-light leading-relaxed">
                  We map out custom wireframes focused heavily on whitespace distribution, typographic scales, and high-conversion landing pathways. Your brand looks incredibly polished, custom, and expensive.
                </p>
              </div>

              <div className="relative pl-10 border-l border-[#2C2C2C]/10 group">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-[#9C6B53]" />
                <span className="text-xs font-mono text-[#9C6B53] block mb-2 font-medium">Phase 03 / Construction</span>
                <h3 className="text-xl font-medium mb-3">Bespoke React & Next.js Coding</h3>
                <p className="text-sm text-[#2C2C2C]/70 font-light leading-relaxed">
                  Approved layouts are engineered using clean, server-first React components. We eliminate unnecessary script libraries, enforce fast mobile page speeds, and integrate strict server-side form validations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FRICTION-REDUCING FAQ ACCORDION */}
        <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:py-36">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#9C6B53] font-semibold block mb-2">
              Clear Alignment
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight">
              Frequently Answered Concerns
            </h2>
          </div>

          <div className="border-y border-[#2C2C2C]/10 divide-y divide-[#2C2C2C]/10 max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-medium text-base md:text-lg text-[#2C2C2C] focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span className="text-xl ml-4 font-light text-[#9C6B53]">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`mt-3 text-sm text-[#2C2C2C]/70 font-light leading-relaxed overflow-hidden transition-all duration-300 max-h-0 ${
                    activeFaq === index ? 'max-h-40' : ''
                  }`}
                >
                  <p className="pb-2">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. PRE-QUALIFIED CONVERSION ENGINE */}
        <section id="contact" className="bg-white border-t border-[#2C2C2C]/5 py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-widest text-[#9C6B53] font-semibold block mb-2">
                Limited Availability
              </span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-4">
                Initiate Digital Briefing
              </h2>
              <p className="text-sm text-[#2C2C2C]/60 max-w-md mx-auto font-light leading-relaxed">
                We accept exactly two high-tier construction client engagements simultaneously to preserve rigorous engineering focus.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-16 bg-[#A3B19B]/10 border border-[#A3B19B]/30 p-8 max-w-xl mx-auto">
                <h3 className="text-xl font-medium mb-2">Transmission Successful</h3>
                <p className="text-sm text-[#2C2C2C]/70 font-light">
                  We verify your structural requirements carefully. Expect a highly specific layout brief in your inbox within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="max-w-xl mx-auto space-y-8">
                {formStatus === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 p-4 text-center font-medium">
                    Network disruption encountered. Please verify connection metrics and retry.
                  </p>
                )}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-3">
                    Identity / Venture Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-4 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200"
                    placeholder="e.g., John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-3">
                    Secure Email Point
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-4 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200"
                    placeholder="johndoe@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-3">
                    Allocated Resource Scope
                  </label>
                  <select
                    name="budget"
                    id="budget"
                    required
                    className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-4 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200 appearance-none cursor-pointer text-[#2C2C2C]"
                  >
                    <option value="sme">Premium Business Hub (KES 100k — 250k)</option>
                    <option value="enterprise">Custom Enterprise System (KES 250k — 500k+)</option>
                    <option value="retainer">Dedicated Engineering Retainer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-3">
                    Strategic Intent & Scope Brief
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-4 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200 resize-none"
                    placeholder="Tell us about the digital platform parameters you intend to establish..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full text-xs uppercase tracking-widest bg-[#2C2C2C] text-[#F9F8F6] py-5 font-semibold hover:bg-[#9C6B53] disabled:bg-[#2C2C2C]/40 transition-colors duration-300 ease-out shadow-sm"
                >
                  {formStatus === 'submitting' ? 'Transmitting Specifications...' : 'Authorize Project Briefing'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* 8. MINIMAL DESIGN FOOTER */}
      <footer className="bg-[#2C2C2C] text-[#F9F8F6]/50 text-xs py-16 border-t border-[#F9F8F6]/5">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; 2026 North & Knot Studio. Handcrafted completely custom.</p>
          <p className="tracking-widest uppercase text-[10px] text-[#F9F8F6]/30">
            Nairobi, Kenya &bull; Optimized Next.js Architecture
          </p>
        </div>
      </footer>
    </div>
  );
}