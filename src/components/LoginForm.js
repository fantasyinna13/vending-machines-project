import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm);
  };
 

  return (
    <section className='loginSection'>
    <div  className='cardLogin d-flex flex-column align-items-center mt-4' >
      <div className="circle"></div>
    <div className="circle"></div>
    <div className="card-inner">
      {isLoginForm ? (
        <div className="login-form">
        <Container>
          <Row className="justify-content-center">
            <Col className="col">
        <Form className='loginForm'>
           <h2>Вход</h2>
          <Form.Group className="mb-3 mx-auto" controlId="validationEmail"  >
        <Form.Label>Email:</Form.Label>
      
        <Form.Control 
        type="email" 
        placeholder="johndoe@gmail.com" 
        size="lg" 
        name='email'
        aria-describedby="inputGroupPrepend"
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-auto" controlId="validationNames">
        <Row >
      
        <div className="d-grid gap-3 p-2 mt-4">

            <div className="d-grid gap-3 p-2 ">
            <Col>
            <Form.Label>Парола:</Form.Label>
            <Form.Control 
            type='password'
            placeholder='password' 
            size="lg" 
            name='password'
         
            />
            </Col>
            </div>
            </div>
        </Row>
        </Form.Group>
          <Button variant="primary">
            Login
          </Button>
          <p>
            Don't have an account?{' '}
            <Button variant="link" onClick={handleFormToggle}>
              Register here
            </Button>
          </p>
        </Form>
        </Col>
          </Row>
          </Container>
          
          </div>
         
       
      ) : (
        <Container>
        <Row>
          <Col>
        <Form>
          <h2>Регистрация</h2>
          <Form.Group className="mb-3 mx-auto" controlId="validationEmail"  >
        <Form.Label>Email:</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="johndoe@gmail.com" 
        size="lg" 
        name='email'
        aria-describedby="inputGroupPrepend"
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-auto" controlId="validationEmail"  >
        <Form.Label>Username:</Form.Label>
        <Form.Control 
        type="username" 
        placeholder="johndoe1" 
        size="lg" 
        name='username'
        aria-describedby="inputGroupPrepend"
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-auto" controlId="validationEmail"  >
        <Form.Label>Парола:</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="password" 
        size="lg" 
        name='password'
        />
      </Form.Group>
      <Form.Group className="mb-3 mx-auto" controlId="validationEmail"  >
        <Form.Label>Потвърдете паролата:</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="repeat password" 
        size="lg" 
        name='confirmPassword'
        />
      </Form.Group>
          <Button variant="primary" className='registerButton'>
          <Link to="HomePage">Register</Link> 
          </Button>
          <p>
            Already have an account?{' '}
            <Button variant="link" onClick={handleFormToggle}>
              Login here
            </Button>
          </p>
        </Form>
        </Col>
        </Row>
        </Container>
      )}
      </div>
    </div>
    </section>
  );
};

export default LoginForm;