import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

export default class NavComponent extends Component {
   render() {
         return (
            <Navbar collapseOnSelect expand="lg" bg="light" className="mb-5">
        <Container fluid>
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
        );
      }
  }