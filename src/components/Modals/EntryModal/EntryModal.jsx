import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ModalWindow,
  Backdrop,
  ModalText,
  ModalTitle,
} from "./EntryModal.styled";

const modalRoot = document.querySelector("#modal-root");
const body = document.querySelector("body");

export default function EntryModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove("no-scroll");
  };
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };
  useEffect(() => {
    body.classList.add("no-scroll");
    return () => body.classList.remove("no-scroll");
  }, []);

  return createPortal(
    isModalOpen && (
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>
          <ModalTitle>
            Hello! To get started, enter the current balance of your account!
          </ModalTitle>
          <ModalText>You can't spend money until you have it</ModalText>
        </ModalWindow>
      </Backdrop>
    ),
    modalRoot
  );
}
