import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useDispatch} from 'react-redux';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { trueRestaurantPopup } from '../../actions/restaurantActions';



const expand = 'lg';

function MainNav() {
  const dispatch = useDispatch()

  return (
    <>
        <Navbar key={expand} expand={expand} data-bs-theme="dark" className="bg-body-tertiary p-3 fixed-top">
          <Container fluid>
            <Navbar.Brand href="#">Travel Madrid</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Travel Madrid 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav data-bs-theme="dark" className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Restaurants</Nav.Link>
                  <Nav.Link href="#action2">Bars</Nav.Link>
                  <Nav.Link href="#action2">Beers</Nav.Link>
                  <NavDropdown
                    title="Submit"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={() => {
                      dispatch(trueRestaurantPopup())
                      }}>Submit Restaurant</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                    Submit Bar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Submit Beer
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default MainNav;