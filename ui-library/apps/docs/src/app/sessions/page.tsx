"use client";

import { Card, Badge, Button } from '@veraui/react';
import '@veraui/react/styles.css';

export default function SessionsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      <div className="breadcrumb">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Sessions</span>
      </div>

      <div className="section-header">
        <div className="section-title">Session History</div>
        <span className="section-tag">Records</span>
      </div>

      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--lavender-soft)' }}>
          <div style={{ fontWeight: 700, fontSize: 15 }}>All Past Sessions</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="ghost" size="sm">⊞ Filter</Button>
            <Button variant="primary" size="sm">+ New</Button>
          </div>
        </div>
        <div style={{ overflowX: 'auto', padding: '8px 0' }}>
          <table className="data-table" style={{ minWidth: 600 }}>
            <thead>
              <tr>
                <th>User</th><th>Session Type</th><th>Duration</th><th>Status</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Alexandra M.', 'Guided Meditation', '20 min', 'completed', 'May 2'],
                ['Alexandra M.', 'Breathwork', '10 min', 'completed', 'May 2'],
                ['Alexandra M.', 'Body Scan', '30 min', 'in-progress', 'May 2'],
              ].map(([name, type, dur, status, date], i) => (
                <tr key={i}>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="list-avatar" style={{ width: 28, height: 28, fontSize: 11 }}>AM</div>
                    <span style={{ fontWeight: 600 }}>{name}</span>
                  </div></td>
                  <td>{type}</td>
                  <td style={{ fontWeight: 600 }}>{dur}</td>
                  <td><span className={`badge ${status === 'completed' ? 'badge-green' : 'badge-blue'}`}>{status}</span></td>
                  <td style={{ color: 'var(--slate)' }}>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
