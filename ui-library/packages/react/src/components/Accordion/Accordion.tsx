"use client";
import React, { useState } from 'react';

export interface AccordionItem {
  title: React.ReactNode;
  body: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="accordion-item">
          <div className="accordion-header" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.title}</span>
            <span className={`accordion-icon ${open === i ? 'open' : ''}`}>⌄</span>
          </div>
          <div className={`accordion-body ${open === i ? 'open' : ''}`}>
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
};
