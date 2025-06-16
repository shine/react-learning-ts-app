// src/components/Modal.tsx
import React from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'; // We'll create this CSS Module

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  // Find the portal root element from the DOM
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    // This is a safety check. In a real app, this should never happen.
    console.error("The element #portal-root was not found in the DOM.");
    return null;
  }

  // Use createPortal to render the modal content into the portal-root element
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
