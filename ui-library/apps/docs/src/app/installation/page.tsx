"use client";

import { Card } from '@veraui/react';
import '@veraui/react/styles.css';

export default function InstallationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-like header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f3f8] to-[#e4e1f5] rounded-[32px] p-12 md:p-20 text-center mb-16 mx-4 mt-2 shadow-[0_2px_8px_rgba(53,43,56,0.06)] border border-[#eceaf9]">
        <div className="absolute top-[-100px] right-[-50px] w-96 h-96 bg-[radial-gradient(circle,rgba(155,148,232,0.22),transparent)] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[radial-gradient(circle,rgba(218,216,249,0.3),transparent)] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#dad8f9] rounded-full px-4 py-1.5 text-xs font-bold text-[#9b94e8] mb-6 shadow-[0_2px_12px_rgba(155,148,232,0.12)] uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#9b94e8]" />
            Getting Started
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#352b38] tracking-tight leading-tight mb-4" style={{ textWrap: 'balance' }}>
            Install <span className="bg-gradient-to-br from-[#9b94e8] via-[#b8b4f0] to-[#352b38] text-transparent bg-clip-text">VeraUI</span> in minutes
          </h1>
          <p className="text-lg text-[#7e808c] leading-relaxed max-w-lg" style={{ textWrap: 'pretty' }}>
            A highly tailored, stunning React component library built on top of Tailwind CSS for the Veramind ecosystem.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 max-w-[900px] mx-auto w-full mb-24 relative">
        <div className="absolute left-[54px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#eceaf9] via-[#dad8f9] to-[#eceaf9] hidden md:block" />
        
        <div className="flex flex-col gap-12">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex-shrink-0 relative z-10 hidden md:flex items-center justify-center w-[84px] h-[84px] bg-[#edeaf4] rounded-[24px]">
              <div className="w-[60px] h-[60px] bg-[#dad8f9] rounded-[20px] flex items-center justify-center text-2xl font-black text-[#352b38] shadow-[0_4px_16px_rgba(155,148,232,0.2)]">
                1
              </div>
            </div>
            <Card className="flex-1 border-[#eceaf9] hover:-translate-y-1 transition-transform !p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="md:hidden w-10 h-10 bg-[#dad8f9] rounded-xl flex items-center justify-center text-lg font-black text-[#352b38]">1</div>
                <h3 className="text-xl font-extrabold text-[#352b38]">Install the Package</h3>
              </div>
              <p className="text-[#7e808c] text-[15px] mb-6 leading-relaxed">
                Run the following command in your Next.js or React project directory to install the core package.
              </p>
              <div className="bg-[#352b38] text-white p-5 rounded-2xl font-mono text-[14px] flex justify-between items-center shadow-[0_8px_32px_rgba(53,43,56,0.1)] group cursor-pointer transition-transform hover:-translate-y-1">
                <code>npm install @veraui/react</code>
                <span className="material-icons text-[#9b94e8] opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontSize: 20 }}>content_copy</span>
              </div>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex-shrink-0 relative z-10 hidden md:flex items-center justify-center w-[84px] h-[84px] bg-[#edeaf4] rounded-[24px]">
              <div className="w-[60px] h-[60px] bg-[#f9d8f0] rounded-[20px] flex items-center justify-center text-2xl font-black text-[#9d174d] shadow-[0_4px_16px_rgba(249,216,240,0.5)]">
                2
              </div>
            </div>
            <Card className="flex-1 border-[#eceaf9] hover:-translate-y-1 transition-transform !p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="md:hidden w-10 h-10 bg-[#f9d8f0] rounded-xl flex items-center justify-center text-lg font-black text-[#9d174d]">2</div>
                <h3 className="text-xl font-extrabold text-[#352b38]">Import Global Styles</h3>
              </div>
              <p className="text-[#7e808c] text-[15px] mb-6 leading-relaxed">
                Add the core CSS import to the root of your application (e.g., <code>layout.tsx</code> or <code>App.tsx</code>).
              </p>
              <div className="bg-[#352b38] text-white p-5 rounded-2xl font-mono text-[14px] flex justify-between items-center shadow-[0_8px_32px_rgba(53,43,56,0.1)] group cursor-pointer transition-transform hover:-translate-y-1">
                <code>import '@veraui/react/styles.css';</code>
                <span className="material-icons text-[#9b94e8] opacity-60 group-hover:opacity-100 transition-opacity" style={{ fontSize: 20 }}>content_copy</span>
              </div>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex-shrink-0 relative z-10 hidden md:flex items-center justify-center w-[84px] h-[84px] bg-[#edeaf4] rounded-[24px]">
              <div className="w-[60px] h-[60px] bg-[#d8edf9] rounded-[20px] flex items-center justify-center text-2xl font-black text-[#1e40af] shadow-[0_4px_16px_rgba(216,237,249,0.5)]">
                3
              </div>
            </div>
            <Card className="flex-1 border-[#eceaf9] hover:-translate-y-1 transition-transform !p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="md:hidden w-10 h-10 bg-[#d8edf9] rounded-xl flex items-center justify-center text-lg font-black text-[#1e40af]">3</div>
                <h3 className="text-xl font-extrabold text-[#352b38]">Add Google Fonts & Icons</h3>
              </div>
              <p className="text-[#7e808c] text-[15px] mb-6 leading-relaxed">
                VeraUI relies on the <strong>Urbanist</strong> typeface and <strong>Google Material Icons</strong>. Include these in your HTML head.
              </p>
              <div className="bg-[#352b38] text-white p-5 rounded-2xl font-mono text-[13px] shadow-[0_8px_32px_rgba(53,43,56,0.1)] group relative transition-transform hover:-translate-y-1 overflow-x-auto">
                <span className="material-icons text-[#9b94e8] opacity-60 group-hover:opacity-100 transition-opacity absolute top-5 right-5 cursor-pointer hover:text-white" style={{ fontSize: 20 }}>content_copy</span>
                <pre className="text-left leading-loose pr-8"><code>{`<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />\n<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />`}</code></pre>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
