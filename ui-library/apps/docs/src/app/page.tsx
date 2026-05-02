"use client";

import { Button, Badge, Card, Input, Modal } from '@veramind/react';
import '@veramind/react/styles.css';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-[#edeaf4] font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold text-plum">Veramind UI</h1>
          <p className="text-slate text-lg">Production-grade React components for the Veramind design system.</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-plum border-b border-lavender pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="dark">Dark Hero</Button>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-plum border-b border-lavender pb-2">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="lavender">Lavender</Badge>
            <Badge variant="plum">Plum</Badge>
            <Badge variant="pink">Pink Soft</Badge>
            <Badge variant="blue">Blue</Badge>
            <Badge variant="green">Growth</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-plum border-b border-lavender pb-2">Inputs</h2>
          <div className="max-w-md space-y-4">
            <Input placeholder="Default input..." />
            <Input placeholder="Error state" error />
            <Input placeholder="Success state" success />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-plum border-b border-lavender pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-plum mb-2">Default Card</h3>
              <p className="text-slate">A standard white card with subtle shadow for general content.</p>
            </Card>
            <Card variant="lavender">
              <h3 className="text-xl font-bold text-plum mb-2">Lavender Card</h3>
              <p className="text-plum/80">Useful for highlighted stats or metrics.</p>
            </Card>
            <Card variant="ai" className="md:col-span-2">
              <Badge variant="plum" className="mb-4">AI Container</Badge>
              <h3 className="text-xl font-bold text-plum mb-2">Vera Copilot</h3>
              <p className="text-slate mb-4">I hear you. Work anxiety is really common. Let's try a quick 3-step grounding exercise together.</p>
              <div className="flex gap-2">
                <Input placeholder="Reply to Vera..." className="flex-1" />
                <Button variant="primary">Send</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
