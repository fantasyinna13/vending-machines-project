import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import coffee from '../assets/coffee-bag1.png'

const CardComponent = ({ loading, date, options, message, onEdit, onDelete }) => {

  const iconStyle = {
    alignContent: "center"
  }
    return (
      <>
      <Card>
        <Card.Body >
          <Card.Title> Зареждане{loading}</Card.Title>
          <img src={coffee} className="d-block w-100" style={iconStyle}/>
          {options && options.length > 0 && (
          <Card.Text> <strong>Продукт:  </strong> {options.join(", ")} </Card.Text>  )}
          <Card.Text> <strong> Дата: </strong> {date}</Card.Text>
          <Card.Text> <strong>Забележка: </strong> {message}</Card.Text>
         
          <Button variant="primary" onClick={onEdit}>Edit</Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
      </>
    );
  };
  export default CardComponent;