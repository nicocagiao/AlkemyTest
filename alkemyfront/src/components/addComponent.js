import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Form, Button, Alert, FloatingLabel, Container, Table, Modal} from 'react-bootstrap'


export default function AddComponent() {

  const [APIData, setAPIData] = useState([]);
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
    const form = document.forms[0];
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post('http://localhost:3000/api/add', data, {
      headers: headers
    })
      .then(form.reset())
      .then(res => {
        getData();
      })
}

useEffect(() => {
  axios.get('http://localhost:3000/api/balance')
  .then(response => {
    setAPIData(response.data.data)
})}, [])

const onDelete = (id) => {
  axios.delete(`http://localhost:3000/api/delete/${id}`)
    .then(() => {
      getData();
    })
}


const onEdit = (item) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  const id = item.id;
  console.log(item)

  axios.put(`http://localhost:3000/api/update/${id}`, item, {
    headers: headers
  })
    .then(res => {
      console.log(res)
    })
}

const getData = () => {
  axios.get('http://localhost:3000/api/balance')
      .then((getData) => {
           setAPIData(getData.data.data);
       })
}

return (
             <>
             <Container fluid className="d-flex justify-content-center align-items-center">
            <Alert variant="success">
            <Alert.Heading>Add New item</Alert.Heading>
          </Alert>

          </Container>
          <Container fluid className="pb-5 d-flex justify-content-center align-items-center">
            <Form className="w-50" onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingSelect" label="Debit or credit?" className="pb-3">
                <Form.Select aria-label="Floating label select example" name="tipo" onChange={handleChange}>
                    <option>Select from menu</option>
                    <option value="Debit" name="tipo">Debit</option>
                    <option value="Credit" name="tipo">Credit</option>
                </Form.Select>
                </FloatingLabel>    
            <Form.Group className="mb-3">
              
              <Form.Control type="text" name="concepto" required placeholder="Concept" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
             
              <Form.Control type="number" name="valor" required placeholder="$" onChange={handleChange}/>
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Submit Item
            </Button>
          </Form>
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
          <th>Edit</th>            
        </tr>
      </thead>
      <tbody>       
        {APIData.map(item => (
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
            <Button variant="success" type="button" name="edit" onClick={() => onEdit(item)}>Edit</Button>
            &nbsp;
            <Button variant="danger" type="button" name="delete" onClick={() => onDelete(item.id)}>Delete</Button>               
            </td>
            </tr>
          ))}         
      </tbody>
    </Table>
    {APIData.length === 0 &&
                      <Alert variant="danger">
                        There are no items in the DB!
                      </Alert>
                    }   
    </Container>

    </>
)
}