"use client";
import React, { useState } from 'react';

export interface ToggleProps {
  label?: string;
  defaultOn?: boolean;
  onChange?: (isOn: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ label, defaultOn = false, onChange }) => {
  const [on, setOn] = useState(defaultOn);
  
  const handleToggle = () => {
    const newState = !on;
    setOn(newState);
    if (onChange) onChange(newState);
  };

  return (
    <div className="toggle-wrap" onClick={handleToggle}>
      <div className={`toggle ${on ? 'on' : ''}`} />
      {label && <span className="toggle-label">{label}</span>}
    </div>
  );
};
