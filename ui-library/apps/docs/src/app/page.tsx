"use client";

import { Button, Badge, Card, Input, Modal, Toggle, Alert, Accordion } from '@veraui/react';
import '@veraui/react/styles.css';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="app-shell flex bg-[#edeaf4] min-h-screen">
      {/* Sidebar Placeholder */}
      <nav className="sidebar !hidden md:!flex">
        <div className="sidebar-logo">
          <div className="logo-mark">V</div>
          <span className="logo-text">VeraUI</span>
        </div>
        <div className="sidebar-nav">
          <span className="nav-section-label">Main</span>
          <a className="nav-item active" href="#">
            <span style={{ fontSize: 16 }}>⌂</span> Dashboard
          </a>
          <a className="nav-item" href="#">
            <span style={{ fontSize: 16 }}>▦</span> Library
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content flex-1 md:ml-[220px]">
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-title">VeraUI Component Library</div>
          <div className="topbar-actions hidden sm:flex">
            <div className="icon-btn">🔔</div>
            <div className="avatar">AM</div>
          </div>
        </div>

        {/* Page Body */}
        <div className="page-body p-8 flex flex-col gap-12">

          {/* Cards Section */}
          <section>
            <div className="section-header">
              <div className="section-title">Stat Cards</div>
              <span className="section-tag">Dashboard</span>
            </div>
            <div className="card-grid card-grid-4">
              <Card isStatCard variant="lavender">
                <div className="stat-label">Sessions Today</div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="stat-value">+42</div>
                  <span className="stat-change up">↑ 24%</span>
                </div>
              </Card>
              <Card isStatCard variant="pink">
                <div className="stat-label">Mood Score</div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="stat-value">8.4</div>
                  <span className="stat-change down">↓ 14%</span>
                </div>
              </Card>
              <Card isStatCard variant="blue">
                <div className="stat-label">Mindful Minutes</div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="stat-value">2.4h</div>
                  <span className="stat-change up">↑ 30%</span>
                </div>
              </Card>
              <Card isStatCard variant="green">
                <div className="stat-label">Streak</div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="stat-value">12d</div>
                  <span className="stat-change up">↑ 8%</span>
                </div>
              </Card>
            </div>
          </section>

          {/* Buttons Section */}
          <section>
            <div className="section-header">
              <div className="section-title">Buttons</div>
              <span className="section-tag">Actions</span>
            </div>
            <Card className="flex-col !flex">
              <div className="label">Variants</div>
              <div className="btn-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="icon">⚙</Button>
              </div>
              <div className="label mt-2">Sizes</div>
              <div className="btn-row">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="xl">Extra Large</Button>
              </div>
              <div className="label mt-2">Pill / CTA</div>
              <div className="btn-row">
                <Button variant="primary" pill>Start Session</Button>
                <Button variant="secondary" pill>Learn More</Button>
                <Button variant="dark">Get Started →</Button>
              </div>
            </Card>
          </section>

          {/* Badges Section */}
          <section>
            <div className="section-header">
              <div className="section-title">Badges & Indicators</div>
              <span className="section-tag">Labels</span>
            </div>
            <Card className="flex-col !flex">
              <div className="label">Badges</div>
              <div className="btn-row">
                <Badge variant="lavender">Lavender</Badge>
                <Badge variant="plum">Plum</Badge>
                <Badge variant="green">Active</Badge>
                <Badge variant="red">Urgent</Badge>
                <Badge variant="yellow">Pending</Badge>
                <Badge variant="blue">Info</Badge>
                <Badge variant="pink">Featured</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Card>
          </section>

          {/* Forms Section */}
          <section>
            <div className="section-header">
              <div className="section-title">Form Inputs</div>
              <span className="section-tag">Forms</span>
            </div>
            <Card>
              <div className="card-grid card-grid-2 gap-5">
                <div className="flex-col !flex">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <Input placeholder="Alexandra Moore" />
                    <span className="form-hint">This will appear on your profile</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <Input placeholder="alex@veraui.com" icon="✉" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <Input type="password" value="••••••" readOnly error />
                    <span className="form-error">✕ Passwords do not match</span>
                  </div>
                </div>
                <div className="flex-col !flex">
                  <div className="form-group">
                    <label className="form-label">Search + Action</label>
                    <div className="input-group">
                      <Input placeholder="Search sessions…" />
                      <Button variant="primary" className="rounded-l-none">Go</Button>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label className="label mb-2">Toggles</label>
                    <Toggle label="Daily reminders" defaultOn />
                    <Toggle label="Dark mode" />
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Advanced Components */}
          <section>
            <div className="section-header">
              <div className="section-title">Feedback & Overlays</div>
              <span className="section-tag">Interactive</span>
            </div>
            <div className="card-grid card-grid-2">
              <div className="flex flex-col gap-3">
                <Alert variant="info" title="Session starting soon">Your scheduled guided meditation begins in 5 minutes.</Alert>
                <Alert variant="success" title="Streak achieved!">Congratulations on your 7-day mindfulness streak. Keep it up!</Alert>
                <Alert variant="warning" title="High stress detected">Your biometric data suggests elevated stress.</Alert>
              </div>
              <Card className="flex flex-col gap-4">
                <div className="label">Modals</div>
                <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Open Action Modal</Button>
                <Modal 
                  isOpen={isModalOpen} 
                  onClose={() => setIsModalOpen(false)}
                  title="Archive Session?"
                  footer={
                    <>
                      <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                      <Button variant="primary" onClick={() => setIsModalOpen(false)}>Archive</Button>
                    </>
                  }
                >
                  This mindfulness session will be moved to your archive. You can restore it at any time from your session history.
                </Modal>

                <div className="label mt-2">Accordion</div>
                <Accordion items={[
                  { title: 'What is mindfulness meditation?', body: 'Mindfulness meditation is a mental training practice that teaches you to slow down racing thoughts...' },
                  { title: 'How long should I meditate daily?', body: 'Even 5–10 minutes a day can create meaningful change.' }
                ]} />
              </Card>
            </div>
          </section>

          {/* AI Section */}
          <section>
            <div className="section-header">
              <div className="section-title">AI & Generative UI</div>
              <span className="section-tag">Intelligence</span>
            </div>
            <div className="card-grid card-grid-2">
              <Card variant="ai">
                <div className="ai-label">✦ Vera AI</div>
                <div className="ai-prompt">Based on your sleep patterns, I suggest a 10-minute body scan tonight</div>
                <div className="ai-response mb-4">Your average sleep onset was 47 minutes this week, 23% above your baseline. A progressive muscle relaxation session before bed could reduce this significantly. Want me to schedule one?</div>
                <div className="ai-actions">
                  <Button variant="primary" size="sm" pill>Schedule session</Button>
                  <Button variant="ghost" size="sm" pill>Tell me more</Button>
                </div>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
