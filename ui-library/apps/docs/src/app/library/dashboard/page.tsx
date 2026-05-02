"use client";

import { Card, Button } from '@veraui/react';
import '@veraui/react/styles.css';

export default function DashboardExample() {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      <div className="dash-header">
        <div>
          <div className="dash-greeting">Good morning, Alexandra</div>
          <div className="dash-sub">Here is what's happening with your wellbeing today.</div>
        </div>
        <Button variant="dark" pill>Start Session <span className="material-icons ml-1 text-sm">arrow_forward</span></Button>
      </div>

      <div className="card-grid card-grid-4">
        <Card isStatCard variant="lavender">
          <div className="stat-label">Sessions Today</div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="stat-value">2</div>
            <span className="stat-change up flex items-center"><span className="material-icons" style={{ fontSize: 14 }}>arrow_upward</span> 1</span>
          </div>
        </Card>
        <Card isStatCard variant="pink">
          <div className="stat-label">Mood Score</div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="stat-value">8.4</div>
            <span className="stat-change down flex items-center"><span className="material-icons" style={{ fontSize: 14 }}>arrow_downward</span> 14%</span>
          </div>
        </Card>
        <Card isStatCard variant="blue">
          <div className="stat-label">Mindful Minutes</div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="stat-value">2.4h</div>
            <span className="stat-change up flex items-center"><span className="material-icons" style={{ fontSize: 14 }}>arrow_upward</span> 30%</span>
          </div>
        </Card>
        <Card isStatCard variant="green">
          <div className="stat-label">Current Streak</div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="stat-value">12d</div>
            <span className="stat-change up flex items-center"><span className="material-icons" style={{ fontSize: 14 }}>arrow_upward</span> 8%</span>
          </div>
        </Card>
      </div>

      <div className="card-grid card-grid-2">
        <Card variant="ai">
          <div className="ai-label flex items-center gap-1"><span className="material-icons text-sm">auto_awesome</span> Vera Copilot</div>
          <div className="ai-prompt">Based on your sleep patterns, I suggest a 10-minute body scan tonight</div>
          <div className="ai-response mb-4">Your average sleep onset was 47 minutes this week, 23% above your baseline. A progressive muscle relaxation session before bed could reduce this significantly. Want me to schedule one?</div>
          <div className="ai-actions">
            <Button variant="primary" size="sm" pill>Schedule session</Button>
            <Button variant="ghost" size="sm" pill>Tell me more</Button>
          </div>
        </Card>

        <Card>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Upcoming Schedule</div>
          <div className="timeline">
            <div className="timeline-item">
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 12 }}>
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Midday Reset</div>
                <div className="timeline-time">12:30 PM</div>
                <div className="timeline-desc">5-minute box breathing.</div>
              </div>
            </div>
            <div className="timeline-item">
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 12 }}>
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-title">Evening Wind Down</div>
                <div className="timeline-time">9:00 PM</div>
                <div className="timeline-desc">Sleep story + progressive muscle relaxation.</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
