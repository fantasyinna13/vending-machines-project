import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import repairimg from '../assets/maintenance.png';

const RepairCard = ({ repair, dateRepair, error, repairType, usedParts, price, onEdit, onDelete }) => {
    const iconStyle = {
        width: '25%',
        height: '30%'
        
      }
    return (
      <Card className="custom-card">
        <Card.Body>
          <Card.Title> Ремонт{repair}</Card.Title>
          <img src={repairimg} alt="repairImage"  className="d-block w-100" style={iconStyle}/>
          <Card.Text> <strong> Дата: </strong> {dateRepair} </Card.Text>
          <Card.Text> <strong> Грешка: </strong> {error} </Card.Text>
          <Card.Text> <strong> Вид ремонт: </strong> {repairType} </Card.Text>
          <Card.Text> <strong> Използвани части: </strong> {usedParts} </Card.Text>
          <Card.Text> <strong> Стойност:</strong>  {price} </Card.Text>

          <Button variant="primary" onClick={onEdit}>Edit</Button>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        </Card.Body>
      </Card>
    );
  };
  export default RepairCard;