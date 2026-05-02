"use client";

export default function SamplePage() {
  return (
    <div style={{ margin: '-2rem', height: 'calc(100vh - 68px)' }}>
      <iframe 
        src="/landing.html" 
        className="w-full h-full border-none bg-white" 
        title="Sample Landing Page"
      />
    </div>
  );
}
