"use client";

import { Button } from '@veraui/react';
import '@veraui/react/styles.css';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section className="hero" style={{ minHeight: '80vh', padding: '0 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" />
        <div className="orb orb-1 float" />
        <div className="orb orb-2 float-2" />
        <div className="hero-inner mx-auto pt-24 text-center">
          <div className="hero-pill fade-up inline-flex mx-auto mb-6">
            <div className="hero-pill-dot" />
            Trusted by 50,000+ practitioners worldwide
          </div>
          <h1 className="hero-title fade-up-d1 text-[64px] font-black leading-tight tracking-tight text-plum mb-6 mx-auto max-w-[800px]">
            Your mind deserves<br/><span className="accent">genuine care</span>
          </h1>
          <p className="hero-sub fade-up-d2 text-lg text-slate mx-auto max-w-[600px] mb-10">
            VeraUI is a science-backed mindfulness platform that guides you toward lasting calm, sharper focus, and deeper sleep.
          </p>
          <div className="hero-ctas fade-up-d3 flex gap-4 justify-center">
            <Button variant="primary" pill size="lg" className="px-8 font-bold text-lg h-14">Begin your journey →</Button>
            <Button variant="ghost" pill size="lg" className="px-8 font-bold text-lg border-2 border-lavender-mid h-14">Watch overview</Button>
          </div>
        </div>
      </section>

      <section className="section py-24 max-w-[1200px] mx-auto w-full px-6" id="features">
        <div className="section-label inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lavender-deep bg-lavender-soft border border-lavender rounded-full px-4 py-1.5 mb-6">
          ✦ Features
        </div>
        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
          <h2 className="section-title text-[40px] font-extrabold tracking-tight text-plum leading-tight max-w-[500px]">
            Everything your mind<br/>needs in one place
          </h2>
          <p className="section-sub text-lg text-slate max-w-[500px] leading-relaxed">
            Built on peer-reviewed research in cognitive neuroscience, positive psychology, and contemplative practice.
          </p>
        </div>
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🧘', bg: '#ede9fe', name: 'Guided Meditation', desc: 'Personalized sessions crafted by certified mindfulness teachers.' },
            { icon: '🌙', bg: '#fef9c3', name: 'Sleep Intelligence', desc: 'Science-backed sleep stories, body scans, and wind-down rituals.' },
            { icon: '💨', bg: '#d1fae5', name: 'Breathwork Studio', desc: 'Box breathing, 4-7-8, coherence breathing guided by real-time biofeedback.' },
          ].map((f, i) => (
            <div key={i} className="feature-card bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(53,43,56,0.06)] border border-[rgba(218,216,249,0.4)] transition-transform hover:-translate-y-1">
              <div className="feature-icon w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: f.bg }}>{f.icon}</div>
              <div className="feature-name text-lg font-bold mb-2">{f.name}</div>
              <div className="feature-desc text-sm text-slate leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="cta-section mx-6 md:mx-12 mb-20 bg-gradient-to-br from-plum to-[#4a3550] rounded-[32px] p-16 text-center relative overflow-hidden">
        <div className="cta-title text-4xl md:text-5xl font-black text-white mb-4 relative z-10">Start your free trial today</div>
        <p className="cta-sub text-lg text-lavender-soft mb-10 relative z-10 max-w-[500px] mx-auto">Join thousands of others in discovering a calmer, more focused version of yourself.</p>
        <div className="cta-ctas flex gap-4 justify-center relative z-10">
          <Button variant="primary" pill size="lg" className="bg-white text-plum hover:bg-white/90">Get Started Now</Button>
        </div>
      </section>
    </div>
  );
}
