import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/homeComponent'
import AddRoute from './components/addComponent'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

import './App.css';

function App() {
    return (
      <Router>
           <div className="App">
           <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand>
            <img src="/logo.svg" width="50%" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            BalanceAPP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-3">
            <Link to="/"><Button variant="warning">Balance</Button></Link>
            <Link to="/add"><Button variant="info">Add</Button></Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/add' component={AddRoute}></Route>
            </Switch>
          </div>
       </Router>
);
}
export default App;