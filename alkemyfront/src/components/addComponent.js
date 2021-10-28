import React, {Component} from 'react';
import axios from 'axios'
import {Form, Button, Alert, FloatingLabel} from 'react-bootstrap'

export default class HomeComponent extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        this.getApidata();  
    }

    getApidata() {
      axios.get('http://localhost:3000/api/balance').then(response => {
           this.setState({
            isLoaded: true,
            items: response.data.data})
       });
   }

   render() {
         return (
             <>
            <Alert variant="success">
            <Alert.Heading>Add New item to Balance</Alert.Heading>
        
          </Alert>

            <Form>
            <FloatingLabel controlId="floatingSelect" label="Type">
                <Form.Select aria-label="Floating label select example">
                    <option>Select from menu</option>
                    <option value="1">Debit</option>
                    <option value="2">Credit</option>
                </Form.Select>
                </FloatingLabel>    
            <Form.Group className="mb-3">
              <Form.Label>Concept</Form.Label>
              <Form.Control type="text" placeholder="Concept" />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Submit Item
            </Button>
          </Form>
          </>
        );
      }
  }