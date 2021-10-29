import React, {useState} from 'react';
import axios from 'axios'
import {Form, Button, Alert, FloatingLabel, Container} from 'react-bootstrap'
import ListComponent from './listComponent'

export default function AddComponent() {

  const [item, setItem] = useState({
    tipo: " ",
    concepto: " ",
    valor: 0
  });

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  
  const handleSubmit = event => {
    event.preventDefault();
    const data = item;
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://localhost:3000/api/add', data, {
      headers: headers
    })
      .then(res=>{
        console.log(res);
      })
  }

         return (
             <>
             <Container fluid>
            <Alert variant="success" className="w-25">
            <Alert.Heading>Add New item to Balance</Alert.Heading>
          </Alert>

          </Container>
          <Container fluid className="pb-5">
            <Form className="w-50" onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingSelect" label="Type">
                <Form.Select aria-label="Floating label select example" name="tipo" onChange={handleChange}>
                    <option>Select from menu</option>
                    <option value="Debit" name="tipo">Debit</option>
                    <option value="Credit" name="tipo">Credit</option>
                </Form.Select>
                </FloatingLabel>    
            <Form.Group className="mb-3">
              <Form.Label>Concept</Form.Label>
              <Form.Control type="text" name="concepto" placeholder="Concept" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Value</Form.Label>
              <Form.Control type="number" name="valor" placeholder="$" onChange={handleChange}/>
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Submit Item
            </Button>
          </Form>
          </Container>

          <ListComponent />
          </>
        );
  };