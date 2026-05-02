import React from 'react';
import { cn } from '../../utils/cn';

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', icon, title, children, ...props }, ref) => {
    
    const defaultIcons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕',
    };

    return (
      <div
        ref={ref}
        className={cn('alert', `alert-${variant}`, className)}
        {...props}
      >
        <span className="alert-icon">{icon || defaultIcons[variant]}</span>
        <div className="alert-body">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-desc">{children}</div>
        </div>
      </div>
    );
  }
);
Alert.displayName = 'Alert';
