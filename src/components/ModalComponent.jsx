import React from "react";
import { Modal } from "react-bootstrap";
import ButtonComponent from "./Buttons";

const ModalComponent = ({ show, handleClose, modalTitle, modalContent }) => {
  const contentString = modalContent.toString();
  const paragraphs = contentString
    .split("\n\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="myModal">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{paragraphs}</Modal.Body>
      <Modal.Footer>
        <ButtonComponent label="Close" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
