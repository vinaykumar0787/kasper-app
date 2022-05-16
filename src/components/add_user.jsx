import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useCallback, useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";

export default function AddEditUser(props) {
  const textBoxRef = useRef(null);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(props.user ? props.user.name : '');
  },[props.user]);

  const handleSave = useCallback(() => {
    if(name === ``) {
        return;
    }
    props.onHandleSave(name, props.user ? props.user.id : 0);
    setName('');
  }, [props, name]);

  const handleClose = useCallback(() => {
    props.onHandleClose();
    setName('');
  }, [props]);

  useEffect(() => {
    if (textBoxRef.current) {
      textBoxRef.current.style.height = "";
      textBoxRef.current.style.height = `${
        textBoxRef.current.scrollHeight + 3
      }px`;
      textBoxRef.current.focus();
    }


  }, []);

  const handleNameChange = useCallback((ev) => {
    setName(ev.target.value);
  }, []);

  const handleNameControlBlur = useCallback((ev) => {
    setName(ev.target.value);
  }, []);

  return (
    <Modal
            show={props.showAddUser}
            onHide={handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameControlBlur}    
            ref={textBoxRef}
            />
            {!name && 
                <span className='error'>Enter a Name</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
    </Modal>
  );
}