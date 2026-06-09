'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    
    try {
      // Direct call to our backend API route
      const response = await fetch('/api/inquire', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 bg-[#A3B19B]/10 border border-[#A3B19B]/30 p-8 max-w-xl mx-auto">
        <h3 className="text-xl font-medium mb-2 text-[#2C2C2C]">Inquiry Received</h3>
        <p className="text-sm text-[#2C2C2C]/70 font-light">
          Thank you for reaching out. We review project configurations carefully and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 p-3 text-center">
          Something went wrong. Please check your connection and try again.
        </p>
      )}

      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-2">
          Your Name / Company
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200"
          placeholder="e.g., Alex Maina"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200"
          placeholder="alex@company.com"
        />
      </div>

      {/* Premium Budget Filter */}
      <div>
        <label htmlFor="budget" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-2">
          Estimated Project Scope
        </label>
        <select
          name="budget"
          id="budget"
          required
          className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="corporate">SME Platform (KES 100k — 250k)</option>
          <option value="enterprise">Custom Enterprise System (KES 250k — 500k+)</option>
          <option value="retainer">Monthly Engineering Retainer</option>
        </select>
      </div>

      {/* Project Brief */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-semibold mb-2">
          Project Brief / Ambition
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full bg-[#2C2C2C]/5 border-b border-[#2C2C2C]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#9C6B53] transition-colors duration-200 resize-none"
          placeholder="Tell us about the digital product you want to build..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full text-xs uppercase tracking-widest bg-[#2C2C2C] text-[#F9F8F6] py-4 font-medium hover:bg-[#9C6B53] disabled:bg-[#2C2C2C]/40 transition-colors duration-300 ease-out"
      >
        {status === 'submitting' ? 'Transmitting Inquiries...' : 'Initiate Briefing'}
      </button>
    </form>
  );
}