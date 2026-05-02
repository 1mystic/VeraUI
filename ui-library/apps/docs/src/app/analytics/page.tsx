"use client";

import { Card } from '@veraui/react';
import '@veraui/react/styles.css';

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      <div className="breadcrumb">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Analytics</span>
      </div>

      <div className="section-header">
        <div className="section-title">Wellbeing Pipeline</div>
        <span className="section-tag">Insights</span>
      </div>

      <Card style={{ overflowX: 'auto' }}>
        <table className="pipeline-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Focus Area</th>
              <th>Sessions</th><th>Completed</th><th>Avg Score</th><th>Streak</th><th>Goal</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Anxiety Relief', vals: [30,24,8.4,12,20], colors: ['#dbeafe','#eff6ff','#dbeafe','#bfdbfe','#e0f2fe'] },
              { label: 'Sleep Improvement', vals: [27,20,7.9,8,15], colors: ['#d8f9e8','#d1fae5','#d8f9e8'] },
              { label: 'Focus & Clarity', vals: [46,30,8.8,15,25], colors: ['#f9d8f0','#fce7f3','#f9d8f0','#fbcfe8'] },
            ].map((row, ri) => (
              <tr key={ri}>
                <td className="row-label">{row.label}</td>
                {row.vals.map((v, vi) => (
                  <td key={vi}><div className="pipeline-cell" style={{ background: row.colors[vi % row.colors.length] }}>{v}</div></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      
      <div className="card-grid card-grid-2 mt-4">
        <Card>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Platform Usage Insights</div>
          {[
            { name: 'Calm', pct: 60, color: '#9b94e8', abbr: 'C', bg: '#ede9fe' },
            { name: 'Headspace', pct: 20, color: '#6ee7b7', abbr: 'H', bg: '#d1fae5' },
            { name: 'Insight Timer', pct: 10, color: '#fca5a5', abbr: 'I', bg: '#fee2e2' },
          ].map((p, i) => (
            <div key={i} className="platform-bar-item">
              <div className="platform-icon" style={{ background: p.bg, color: p.color, fontWeight: 800 }}>{p.abbr}</div>
              <div className="platform-bar-fill">
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--plum)' }}>{p.name}</div>
                <div className="platform-bar-track">
                  <div className="platform-bar-progress" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }} />
                </div>
              </div>
              <span className="platform-pct">{p.pct}%</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
