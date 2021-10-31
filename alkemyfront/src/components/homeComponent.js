import React, {Component} from 'react';
import axios from 'axios'
import {Spinner, Container, Col, Row, Table} from 'react-bootstrap'

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
        let balance = 0
        items.forEach(function(items){
          if(items.tipo === "Debit"){
            balance -= items.valor;
          }else{
            balance += items.valor;
          }
          
        });

        return (
          <>
          <Container fluid>
              <Row>
                <Col>
                <h1 class="text-center m-5">
                <p class="text-primary">TOTAL BALANCE</p>
                {balance > 0 && <p class="text-success">$ {balance}</p>}
                {balance === 0 && <p class="text-info">$ {balance}</p>}
                {balance < 0 && <p class="text-danger">$ {balance}</p>}
                </h1>
                </Col>
              </Row>
          </Container>
          
          <Container fluid className="w-75">
          <Table responsive>
          <thead>
            <tr class="bg-secondary">
              <th>id</th>
              <th>Type</th>
              <th>Value</th>
              <th>Concept</th>
              <th>Date</th>            
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
                </tr>
              ))}         
          </tbody>
        </Table>
        </Container>

        </>
        );
      }
    }
  }