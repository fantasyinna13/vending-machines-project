import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const RepairMachine = ({ onSubmit, initialData, isEditing, onEdit })=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [formData, setFormData] = useState(initialData || {
    repair: '',
    dateRepair: '',
    error: '',
    repairType: '',
    usedParts: '',
    price: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  
  return (
    <>
      <Button variant="primary" className="mt-4" onClick={handleShow}>
       Ремонт
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавете ремонт:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

    <Form.Group
              className="mb-3"
              controlId="repairMachineForm.ControlInput1"
            >
    <Form.Control
        type="text"
        placeholder="Ремонт"
        name='repair'
        value='Ремонт'
        onChange={handleChange}
        disabled
        readOnly
      />
      </Form.Group>

      <Form.Group controlId="formMessage">
          <Form.Label>Дата:</Form.Label>
          <Form.Control
            type='date'
            name="dateRepair"
            value={formData.date}
            onChange={handleChange}
          />

            </Form.Group>
            <Form.Group className="mb-3" controlId="repairMachineForm.ControlInput1">
              <Form.Label>Грешка:</Form.Label>
              <Form.Control
                type="text"
                placeholder="guasto gruppo caffe"
                name="error"
                value={formData.error}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="repairMachineForm.ControlTextarea1"
            >
              <Form.Label>Вид ремонт:</Form.Label>
              <Form.Control as="textarea" 
              rows={2} 
              placeholder='Добавете вид ремонт:'
              name="repairType"
              value={formData.repairType}
              onChange={handleChange} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="repairMachineForm.ControlTextarea1"
            >
              <Form.Label>Използвани части:</Form.Label>
              <Form.Control as="textarea" 
              rows={2} 
              placeholder='Добавете използвани части:' 
              name="usedParts"
              value={formData.usedParts}
              onChange={handleChange} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="repairMachineForm.ControlTextarea1"
            >
              <Form.Label>Стойност на ремонта:</Form.Label>
              <Form.Control type='number'
              placeholder='23.74' 
              name="price"
              value={formData.price}
              onChange={handleChange}/>
            </Form.Group>
       
       
        
        <Button variant="primary" className="mt-4" type="submit">
          Запази
        </Button> 
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );

  };

export default RepairMachine;