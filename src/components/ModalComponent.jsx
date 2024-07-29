import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "./Buttons";
import '@/styles/globals.css';

const ModalComponent = ({ show, handleClose, modalTitle, modalContent }) => {
  let content;

  if (typeof modalContent === "string") {
    const paragraphs = modalContent.split("\n\n").map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    content = <>{paragraphs}</>;
  } else {
    content = modalContent;
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" className="myModal">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="scrollable-modal-body">{content}</Modal.Body>
      <Modal.Footer>
        <ButtonComponent label="Close" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
