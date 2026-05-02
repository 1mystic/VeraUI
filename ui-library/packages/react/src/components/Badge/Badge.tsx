import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'lavender' | 'plum' | 'green' | 'red' | 'yellow' | 'blue' | 'pink' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'lavender', children, ...props }, ref) => {
    
    return (
      <span
        ref={ref}
        className={cn('badge', `badge-${variant}`, className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
