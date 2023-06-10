import React from 'react'
import ContactCup from '../assets/contact-cup.jpg'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import * as formik from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';


export default function ContactSection() {

  const {Formik} = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });

    const contactStyle = {
        width: '100%',
        height: '100%'
    }

    const formStyle = {
width: '50%'
    }
  return (
    <Formik 
    validationSchema={schema}
    onSubmit={console.log}
    initialValues={{
      firstName:'',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }}
    >
{({ handleSubmit, handleChange, values, touched, errors }) => (

    <div>

<section className="">

  <div className="container-fluid px-0 ">
    <div className="row g-0">

      <div className="col-lg-6 vh-100">

      <img src={ContactCup}  style={contactStyle}
                alt="coffee" />
      </div>
      <div className="col-lg-6 vh-100">
       
     <Form noValidate onSubmit={handleSubmit}>
     <Form.Group className="mb-3 mx-auto" c style={formStyle} controlId="validationNames">
     <h2 className="pt-4 ">Свържете се с нас!</h2>
        <Row >
      
        <div className="d-grid gap-3 p-2 mt-4">
            <Col>
            <Form.Label>Име:</Form.Label>
            <Form.Control 
            placeholder='John' 
            size="lg" 
            name='firstName' 
            value={values.firstName}
            onChange={handleChange}
            isInvalid={!!errors.firstName}
            />
           <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
            </Col>
            </div>

            <div className="d-grid gap-3 p-2 ">
            <Col>
            <Form.Label>Фамилия:</Form.Label>
            <Form.Control 
            placeholder='Doe' 
            size="lg" 
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
            isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
            </Col>
            </div>
        </Row>
        </Form.Group>
          
        <Form.Group className="mb-3 mx-auto" controlId="validationEmail" style={formStyle} >
        <Form.Label>Email:</Form.Label>
        <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control 
        type="email" 
        placeholder="johndoe@gmail.com" 
        size="lg" 
        name='email'
        aria-describedby="inputGroupPrepend"
        value={values.email}
        onChange={handleChange}
        isInvalid={!!errors.email}
        />
         <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3 mx-auto" controlId="validationPhone" style={formStyle} >
      <Form.Label>Телефон:</Form.Label>
        <Form.Control 
        type='tel' 
        placeholder="089-123-4567" 
        size="lg" 
        name='phone'
        value={values.phone}
        onChange={handleChange}
        isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
      </Form.Group>

<Form.Group className="mb-3 mx-auto" controlId="
validationMessage" style={formStyle} >
        <Form.Label>Съобщение:</Form.Label>
        <Form.Control 
        size="lg" 
        as="textarea" 
        rows={4} 
        name='message' 
        placeholder="Въведете Вашето съобщение..."
        value={values.message}
        onChange={handleChange}
        isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 mx-auto" style={formStyle}>
      <Button variant="primary" type="submit" className="mt-4" size='lg'>
        Изпрати
      </Button>
      </Form.Group>
     </Form>
          
     </div>

    </div>
  </div>

</section>
    </div>
)}
    </Formik>
    
  );
}
