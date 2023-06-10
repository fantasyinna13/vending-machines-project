
import React from "react";
import LoadMachine from "./LoadMachine";
import RepairMachine from "./RepairMachine";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import CardComponent from '../components/CardComponent';

import { Col, Container, Row } from "react-bootstrap";

import RepairCard from "./RepairCard";




const MaintenanceList = () => {
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);


    const handleAddItem = (data) => {
        if (editIndex === -1) {
            setItems([...items, data]);
          } else {
            const updatedItems = [...items];
            updatedItems[editIndex] = data;
            setItems(updatedItems);
            setEditIndex(-1);
          }
          setShowForm(false);
        };

        const handleDeleteItem = (index) => {
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
          };
        
          const handleEditItem = (index) => {
            const itemToEdit = items[index];
            setEditIndex(index);
            setShowForm(true);
          };
  

    return (
        <>
<Container>
    <Row>
        <Col>
        <Button variant="primary" className="mt-4" onClick={() => setShowForm(true)}>
            Добави:
          </Button>
        </Col>
</Row>

 <Row>
        {items.map((item, index) => (
          <Col key={index}>
            <CardComponent
              {...item}
              onEdit={() => handleEditItem(index)}
              onDelete={() => handleDeleteItem(index)}
            />
          </Col>
        ))}
      </Row>

      {showForm && (
        <Row>
          <Col>
            <LoadMachine
              onSubmit={handleAddItem}
              initialData={editIndex === -1 ? null : items[editIndex]}
            />
          </Col>
        </Row>
      )}
</Container>
</>
    );
};


export default MaintenanceList;