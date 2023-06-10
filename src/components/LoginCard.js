import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LoginCard() {
  return (
    <div> <figure className="card_login">
     <Form>
     <Form.Group className="mb-3 mx-auto">
        <Row >
        <div className="d-grid gap-3 p-2 mt-4">
            <Col className="mx-auto" >
            <Form.Label>Име:</Form.Label>
            <Form.Control 
            placeholder='John' 
            size="lg" 
            name='firstName' 
/>
            </Col>
            </div>

            <div className="d-grid gap-3 p-2 ">
            <Col className="mx-auto ">
            <Form.Label>Фамилия:</Form.Label>
            <Form.Control 
            placeholder='Doe' 
            size="lg" 
            name='lastName'
            />
            </Col>
            </div>
        </Row>
        </Form.Group>
        </Form>
</figure></div>
  )
}
