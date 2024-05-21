import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  ModalWindow,
  ContentDiv,
  Text,
  DivWithButtons,
  CloseButton,
  ModalBackdrop,
} from "./BalanceModal.styled";
import { OrangeButton } from "../../ModalButtons/OrangeButton";
import { WhiteButton } from "../../ModalButtons/WhiteButton";
import icons from "../../../assets/icons.svg";
// Query selectors
const modalRoot = document.getElementById("modal-root");
const body = document.querySelector("body");

// Modal window
const BalanceModal = ({
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
    <ModalBackdrop className="modal-backdrop" onClick={handleBackdropClose}>
      {/* Modal window */}
      <ModalWindow>
        {/* Close button img X */}
        <CloseButton onClick={closeModal}>
          <svg>
            <use href={`${icons}#close`}></use>
          </svg>
        </CloseButton>
        <ContentDiv>
          <Text>{children}</Text>
          <DivWithButtons>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              {text ? text : "YES"}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </DivWithButtons>
        </ContentDiv>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};

BalanceModal.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.func,
  text: PropTypes.string,
};
export default BalanceModal;
