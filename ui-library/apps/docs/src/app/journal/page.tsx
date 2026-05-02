"use client";

import { Card } from '@veraui/react';
import '@veraui/react/styles.css';

export default function JournalPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      <div className="breadcrumb">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Journal</span>
      </div>

      <div className="section-header">
        <div className="section-title">Journal & Reflections</div>
        <span className="section-tag">Entries</span>
      </div>

      <div className="card-grid card-grid-2">
        <Card>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Today's Reflection</div>
          <p className="text-sm text-slate leading-relaxed">
            I felt a lot of stress this morning regarding the upcoming project deadline, but the 10-minute breathwork session really helped ground me. 
            I noticed my heart rate dropped significantly, and I was able to approach my emails with a clearer mind.
          </p>
          <div className="text-xs text-lavender-deep font-bold mt-4">May 2, 2026 • 2:14 PM</div>
        </Card>
        <Card variant="lavender">
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Gratitude Log</div>
          <ul className="text-sm text-plum space-y-2 list-disc list-inside">
            <li>A quiet morning coffee before everyone woke up.</li>
            <li>The supportive feedback from the design team.</li>
            <li>Getting a full 8 hours of sleep last night.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
