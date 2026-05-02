"use client";

import { Card } from '@veraui/react';
import '@veraui/react/styles.css';

export default function LibraryPage() {
  return (
    <div className="flex flex-col gap-12 max-w-[1200px] mx-auto w-full">
      <div className="breadcrumb -mb-4">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Library & Templates</span>
      </div>

      <section>
        <div className="section-header">
          <div className="section-title">Library Templates</div>
          <span className="section-tag">Showcase</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/library/dashboard" className="block">
            <Card className="hover:-translate-y-1 transition-transform cursor-pointer border-2 border-transparent hover:border-lavender-deep h-full">
              <div className="h-32 bg-gradient-to-br from-[#edeaf4] to-[#dad8f9] rounded-xl mb-4 flex items-center justify-center text-4xl text-plum">
                <span className="material-icons" style={{ fontSize: 'inherit' }}>dashboard</span>
              </div>
              <div className="font-bold text-lg mb-1">Dashboard Example</div>
              <p className="text-sm text-slate">Full admin overview with AI Copilot</p>
            </Card>
          </a>
          <a href="/landing" className="block">
            <Card className="hover:-translate-y-1 transition-transform cursor-pointer border-2 border-transparent hover:border-lavender-deep h-full">
              <div className="h-32 bg-gradient-to-br from-[#f4f3f8] to-[#e4e1f5] rounded-xl mb-4 flex items-center justify-center text-4xl text-plum">
                <span className="material-icons" style={{ fontSize: 'inherit' }}>auto_awesome</span>
              </div>
              <div className="font-bold text-lg mb-1">Landing Page Example</div>
              <p className="text-sm text-slate">Marketing site with modern heroes</p>
            </Card>
          </a>
          <a href="/analytics" className="block">
            <Card className="hover:-translate-y-1 transition-transform cursor-pointer border-2 border-transparent hover:border-lavender-deep h-full">
              <div className="h-32 bg-gradient-to-br from-[#d8edf9] to-[#bfdbfe] rounded-xl mb-4 flex items-center justify-center text-4xl text-plum">
                <span className="material-icons" style={{ fontSize: 'inherit' }}>analytics</span>
              </div>
              <div className="font-bold text-lg mb-1">Analytics View</div>
              <p className="text-sm text-slate">Data tables and insight charts</p>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
}
