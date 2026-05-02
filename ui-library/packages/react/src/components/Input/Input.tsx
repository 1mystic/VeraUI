import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, icon, ...props }, ref) => {
    
    const inputClasses = cn(
      'input',
      error && 'error',
      success && 'success',
      className
    );

    if (icon) {
      return (
        <div className="input-icon-wrap">
          <span className="input-icon">{icon}</span>
          <input ref={ref} className={inputClasses} {...props} />
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={inputClasses}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
