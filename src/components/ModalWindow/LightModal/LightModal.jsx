import { createPortal } from 'react-dom';
import {
  StyledModal,
  StyledContent,
  StyledText,
  StyledWrap,
  StyledClose,
  StyledBackdrop,
} from './LightModal.styled';

import close from '../../../assets/close.svg'
import { useEffect } from 'react';
import OrangeButton from '../../ModalButtons/OrangeButton';
import WhiteButton from '../../ModalButtons/WhiteButton';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

const LightModal = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
  onDelete,
}) => {
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  return createPortal(
    <StyledBackdrop onClick={handleBackdropClose}>
      <StyledModal>
        <StyledClose onClick={closeModal}>
          <img src={close} alt="close" />
        </StyledClose>
        <StyledContent>
          <StyledText>{children}</StyledText>
          <StyledWrap>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              onDelete={onDelete}
            >
              {text ? text : 'YES'}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </StyledWrap>
        </StyledContent>
      </StyledModal>
    </StyledBackdrop>,
    modalRoot
  );
};

export default LightModal;