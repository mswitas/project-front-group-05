import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  ModalWrapper,
  ContentWrapper,
  Text,
  ButtonsWrapper,
  CloseButton,OrangeButton,WhiteButton,
  Backdrop,
} from "./LightModalWindow.styled";
import { OrangeButton } from '../ModalButtons/OrangeButton'
import { WhiteButton } from "../ModalButtons/WhiteButton";
// Query selectors
const modalRoot = document.getElementById("modal-root");
const body = document.querySelector("body");

// Modal window
export const LightModalWindow = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}) => {
  // Close on Esc button
  const handleEscapeClose = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };
  // Close on backdrop click
  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  // No scroll of body when modal window is open
  useEffect(() => {
    window.addEventListener("keydown", handleEscapeClose);

    return () => {
      window.removeEventListener("keydown", handleEscapeClose);
      body.classList.toggle("no-scroll");
    };
  });

  return createPortal(
    // Backdrop
    <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
      {/* Modal window */}
      <ModalWrapper>
        {/* Close button img X */}
        <CloseButton onClick={closeModal}>
          <svg>
            <use href={`${icons}#close`}></use>
          </svg>
        </CloseButton>
        <ContentWrapper>
          <Text>{children}</Text>
          <ButtonsWrapper>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              {text ? text : "YES"}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </ButtonsWrapper>
        </ContentWrapper>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

LightModalWindow.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.func,
  text: PropTypes.string,
};
