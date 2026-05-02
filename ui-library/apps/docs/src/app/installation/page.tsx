"use client";

import { Card, Badge } from '@veraui/react';
import '@veraui/react/styles.css';

export default function InstallationPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[800px] w-full mx-auto">
      <div className="breadcrumb">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Installation</span>
      </div>

      <section>
        <div className="section-header">
          <div className="section-title">Installation Guide</div>
          <span className="section-tag">Getting Started</span>
        </div>
        
        <p className="text-slate text-lg mb-8 leading-relaxed">
          VeraUI is a highly tailored, stunning React component library built on top of Tailwind CSS for the Veramind ecosystem. Follow these steps to get up and running.
        </p>

        <div className="flex flex-col gap-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-plum flex items-center gap-2">
                <Badge variant="plum">1</Badge> Install the Package
              </h3>
            </div>
            <p className="text-slate text-sm mb-4">Run the following command in your project directory.</p>
            <div className="bg-[#352b38] text-white p-4 rounded-xl font-mono text-sm flex justify-between items-center shadow-md">
              <code>npm install @veraui/react</code>
              <span className="material-icons text-lavender-deep cursor-pointer hover:text-white transition-colors" style={{ fontSize: 18 }}>content_copy</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-plum flex items-center gap-2">
                <Badge variant="lavender">2</Badge> Import Global Styles
              </h3>
            </div>
            <p className="text-slate text-sm mb-4">Add the core CSS import to the root of your application (e.g., <code>layout.tsx</code> or <code>App.tsx</code>).</p>
            <div className="bg-[#352b38] text-white p-4 rounded-xl font-mono text-sm flex justify-between items-center shadow-md">
              <code>import '@veraui/react/styles.css';</code>
              <span className="material-icons text-lavender-deep cursor-pointer hover:text-white transition-colors" style={{ fontSize: 18 }}>content_copy</span>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-plum flex items-center gap-2">
                <Badge variant="pink">3</Badge> Add Google Fonts & Icons
              </h3>
            </div>
            <p className="text-slate text-sm mb-4">VeraUI relies on the <strong>Urbanist</strong> typeface and <strong>Google Material Icons</strong>. Include these in your HTML head.</p>
            <div className="bg-[#352b38] text-white p-4 rounded-xl font-mono text-sm overflow-x-auto shadow-md">
              <pre className="text-left leading-relaxed"><code>{`<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />\n<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />`}</code></pre>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
