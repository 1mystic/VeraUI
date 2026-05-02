import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'lavender' | 'pink' | 'blue' | 'green' | 'ai';
  isStatCard?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', isStatCard = false, children, ...props }, ref) => {
    
    let baseClass = isStatCard ? 'stat-card' : 'card';
    if (variant === 'ai') baseClass = 'ai-container';

    const colorClass = (variant !== 'default' && variant !== 'ai') ? variant : '';

    return (
      <div
        ref={ref}
        className={cn(baseClass, colorClass, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
