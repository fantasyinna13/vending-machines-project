import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewMachine() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} size='lg'>
       Добави машина
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добави машина</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addMachineForm.ControlInput1">
              <Form.Label>Добави заглавие:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Spazio - Рамус"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addMachineForm.ControlTextarea1"
            >
              <Form.Label>Локация:</Form.Label>
              <Form.Control type='text'
              placeholder='Рамус' />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addMachineForm.ControlTextarea1"
            >
              <Form.Label>Марка:</Form.Label>
              <Form.Control type='text'
              placeholder='Zanussi' />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addMachineForm.ControlTextarea1"
            >
              <Form.Label>Модел:</Form.Label>
              <Form.Control type='text'
              placeholder='Spazio' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отказ
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Запази
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewMachine;