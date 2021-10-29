import React, {Component} from 'react';
import axios from 'axios'
import {Spinner, Container, Table, Button} from 'react-bootstrap'

export default class ListComponent extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.handleClick = this.handleClick.bind(this);
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
   
   handleClick(event) {
    event.preventDefault();
    const data = event.target.name;
    console.log(data)
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

   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>
          <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>;
      } else {
        return (       
          <Container fluid className="w-75">
          <Table responsive>
          <thead>
            <tr class="bg-secondary">
              <th>id</th>
              <th>Type</th>
              <th>Value</th>
              <th>Concept</th>
              <th>Date</th>
              <th>Edit</th>            
            </tr>
          </thead>
          <tbody>       
            {items.map(item => (
              <tr key={item.id}>
                <td>
                 {item.id}
                </td>
                <td>
                 {item.tipo}
                </td>
                <td>
                 $ {item.valor}
                </td>
                <td>
                 {item.concepto}
                </td>
                <td>
                 {item.fecha}
                </td>
                <td>
                <Button variant="success" type="button" name="edit" onClick={this.handleClick}>Edit</Button>
                <Button variant="danger" type="button" name="delete" onClick={this.handleClick}>Delete</Button>                
                </td>
                </tr>
              ))}         
          </tbody>
        </Table>
        </Container>
        );
      }
    }
  }