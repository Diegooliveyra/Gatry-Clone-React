import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const portalRoot = document.getElementById('portal-root');

const Modal = ({ children, isOpen, onClickClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-modal">
        <button
          className="ui-modal__close-button"
          type="button"
          onClick={onClickClose}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    portalRoot,
  );
};

export default Modal;
