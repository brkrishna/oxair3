import React from 'react';
import { Modal } from 'react-bootstrap';
import ButtonComponent from './Buttons';

const CustomModal = ({ show, handleClose, modalTitle, modalContent }) => {
  return (
    <Modal fullscreen={true} show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body >{modalContent}</Modal.Body>
      <Modal.Footer>
        <ButtonComponent label="Close" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;