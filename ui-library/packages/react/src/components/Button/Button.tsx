import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'icon' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  pill?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', pill = false, children, ...props }, ref) => {
    
    return (
      <button
        ref={ref}
        className={cn(
          'btn',
          variant !== 'dark' && `btn-${variant}`,
          variant === 'dark' && 'btn-dark',
          size && variant !== 'icon' && variant !== 'dark' && `btn-${size}`,
          pill && 'btn-pill',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
