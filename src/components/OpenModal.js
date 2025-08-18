import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function OpenModal({show, setAddTaskModal}) {
  return (


    <>
    <Button variant="primary" onClick={setAddTaskModal(true)}>
        Launch demo modal
      </Button>

    <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setAddTaskModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={setAddTaskModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
