import React from 'react';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import {
  StyledModal,
  StyledBackdrop,
  StyledText,
  StyledTitle,
} from './DarkModal.styled';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const DarkModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  const handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove('no-scroll');
  };



  useEffect(() => {
    body.classList.add('no-scroll');
    return () => body.classList.remove('no-scroll');
  }, []);

  return createPortal(
    isModalOpen && (
      <StyledBackdrop onClick={handleBackdrop}>
        <StyledModal>
          <StyledTitle>
            Hello! To get started, enter the current balance of your account!
          </StyledTitle>
          <StyledText>You can't spend money until you have it ☻</StyledText>
        </StyledModal>
      </StyledBackdrop>
    ),
    modalRoot
  );
};

export default DarkModal;