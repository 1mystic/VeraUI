import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={cn("modal", className)} 
        onClick={(e) => e.stopPropagation()}
      >
        {title && <div className="modal-title">{title}</div>}
        <div className="modal-body">
          {children}
        </div>
        {footer && (
          <div className="modal-actions">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
