"use client";

import { Button, Badge, Card, Input, Modal, Toggle, Alert, Accordion } from '@veraui/react';
import '@veraui/react/styles.css';
import { useState } from 'react';

export default function LibraryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="flex flex-col gap-12 max-w-[1200px] mx-auto w-full">

      <div className="breadcrumb -mb-8">
        <a href="#">VeraUI</a>
        <span className="breadcrumb-sep">›</span>
        <a href="#">Design System</a>
        <span className="breadcrumb-sep">›</span>
        <span className="current">Component Library</span>
      </div>

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
          <div className="label mt-4">Sizes</div>
          <div className="btn-row">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
          <div className="label mt-4">Pill / CTA</div>
          <div className="btn-row">
            <Button variant="primary" pill>Start Session</Button>
            <Button variant="secondary" pill>Learn More</Button>
            <Button variant="dark">Get Started →</Button>
          </div>
        </Card>
      </section>

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
                <Input placeholder="alex@veramind.com" icon="✉" />
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

    </div>
  );
}
