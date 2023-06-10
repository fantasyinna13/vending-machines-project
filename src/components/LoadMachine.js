import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 




const LoadMachine = ({ onSubmit, initialData, isEditing, onEdit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [formData, setFormData] = useState(initialData || {
    loading: '',
    date: '',
    options: [],
    message: ''
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedOptions = [...formData.options];

    if (checked) {
      updatedOptions.push(name);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== name);
    }

    setFormData({
      ...formData,
      options: updatedOptions
    });
  };
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

    <div>
    <Button variant="primary" className="mt-4" onClick={handleShow}>
       Зареждане
      </Button>
      
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добави ново зареждане</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Form onSubmit={handleSubmit}>
<Form.Group>
    <Form.Control
        type="text"
        placeholder="Зареждане"
        name='loading'
        value='зареждане'
        onChange={handleChange}
        disabled
        readOnly
      />
      </Form.Group>
     
      <Form.Group controlId="formMessage">
          <Form.Label>Дата:</Form.Label>
          <Form.Control
            type='date'
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="loadMachineForm.ControlTextarea1"   
            >
              <Form.Label>Продукт/и:</Form.Label>
              <Form.Check label="Кафе" 
              type="checkbox" 
              name="Кафе" 
              checked={formData.options.includes('Кафе')}
              onChange={handleCheckboxChange}/>

              <Form.Check label="Захар" type="checkbox" 
              name="Захар" 
              checked={formData.options.includes('Захар')}
              onChange={handleCheckboxChange}/>

              <Form.Check label="Инстантно кафе"
              type="checkbox" 
              name="Инстантно кафе" 
              checked={formData.options.includes('Инстантно кафе')}
              onChange={handleCheckboxChange} />

              <Form.Check label="Мляко" 
              type="checkbox" 
              name="Мляко" 
              checked={formData.options.includes('Мляко')}
              onChange={handleCheckboxChange} />

              <Form.Check label="Шоколад" 
              type="checkbox" 
              name="Шоколад" 
              checked={formData.options.includes('Шоколад')}
              onChange={handleCheckboxChange} />

              <Form.Check label="Чай" 
              type="checkbox" 
              name="Чай" 
              checked={formData.options.includes('Чай')}
              onChange={handleCheckboxChange}/>

              <Form.Check label="Вода" 
              type="checkbox" 
              name="Вода" 
              checked={formData.options.includes('Вода')}
              onChange={handleCheckboxChange}/>

              <Form.Check label="Чаши" 
              type="checkbox" 
              name="Чаши" 
              checked={formData.options.includes('Чаши')}
              onChange={handleCheckboxChange}/>

              <Form.Check label="Бъркалки" 
              type="checkbox" 
              name="Бъркалки" 
              checked={formData.options.includes('Бъркалки')}
              onChange={handleCheckboxChange}/>

            </Form.Group>
  
  
        <Form.Group controlId="formMessage">
          <Form.Label>Забележка</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3} 
            placeholder="Добави забележка"
          />
        </Form.Group>
        <Button variant="primary" className="mt-4" type="submit">
          Запази
        </Button>      
      </Form>
      
      
        </Modal.Body>
        </Modal>
        </div>
    
  );
  
};


export default LoadMachine;