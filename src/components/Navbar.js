import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';





const NavigationBar = ({searchText, setSearchText}) => {
  
  const history = useHistory()
    const updateSearchText = (e) => {
    history.push('/search' )
    setSearchText(e.target.value)
    }

  
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
    <Container>
    <Navbar.Brand href="/">MovieBrowser</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to ="/">
          <Nav.Link>
          Home
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to ="/about">
          <Nav.Link>
          About
          </Nav.Link>
        </LinkContainer>
        
        <LinkContainer to ="#" disabled>
          <Nav.Link>
        Link
      </Nav.Link>
      </LinkContainer>
        </Nav>
      <Nav>
      <Form className="d-flex">
      <FormControl
       className="form-control me-2"
       type="search"
       placeholder="Search English movie"
       aria-label="Search"
       value={searchText}
       onChange={updateSearchText}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavigationBar;
