import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector, useDispatch} from 'react-redux';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { trueRestaurantPopup } from '../../actions/restaurantActions';
import { trueLoginPopup } from '../../actions/userActions';
import { 
  setHomePage, 
  setRestaurantsPage, 
  setBarsPage, 
  setProfilePage,
  clearPages,
  setExcursionsPage
 } from '../../actions/currentPageActions';

 import { clearLoginData } from '../../actions/userActions';

const expand = 'lg';

function MainNav() {
  const contentStyle = { maxWidth: '300px' };

  const {loginPopup} = useSelector((state) => state.popups)
  const { userName } = useSelector((state) => state.user);

  const [logoutPopup, setLogoutPopup] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);


  const [inputUserName, setInputUserName] = useState();
  const [inputPassword, setInputPassword] = useState();
  
  const dispatch = useDispatch()

  return (
    <>
      {logoutPopup ? (
        <Popup
          open={logoutPopup}
          position="center"
          onClose={() => {
            setLogoutPopup(false);
          }}
          {...{
            contentStyle,
          }}
        >
          <button
            className="close"
            onClick={() => {
              setLogoutPopup(false);
            }}
          >
            &times;
          </button>
          <div className="row text-center ">
            <h3>Logout?</h3>
          </div>
          <div className="row m-3 text-center">
            <div className="col-6">
              <button
                className="btn btn-warning"
                onClick={() => {
                  dispatch(clearLoginData());
                  setLogoutPopup(false);
                }}
              >
                Logout
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  setLogoutPopup(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </Popup>
      ) : null}
      <Navbar
        key={expand}
        expand={expand}
        data-bs-theme="dark"
        className="bg-body-tertiary p-3 fixed-top"
      >
        <Container fluid>
          <Navbar.Brand href="#">Travel Madrid</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={menuOpen}
            onHide={() => {
              setMenuOpen(false);
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Travel Madrid
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                data-bs-theme="dark"
                className="justify-content-end flex-grow-1 pe-3"
              >
                <Nav.Link
                  href="#restaurants"
                  onClick={() => {
                    dispatch(setRestaurantsPage());
                  }}
                >
                  Restaurants
                </Nav.Link>
                <Nav.Link
                  href="#bars"
                  onClick={() => {
                    dispatch(setBarsPage());
                  }}
                >
                  Bars
                </Nav.Link>
                <Nav.Link
                  href="#excursions"
                  onClick={() => {
                    dispatch(setExcursionsPage());
                  }}
                >
                  Excursions
                </Nav.Link>
                {userName ? (
                  <NavDropdown
                    title="Submit"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(trueRestaurantPopup());
                      }}
                    >
                      Submit Restaurant
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Submit Bar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Submit Beer
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : null}
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
              {userName ? (
                <button
                  id="loggedInUserButton"
                  className="btn outline-warning mx-1 text-nowrap"
                  onClick={() => {
                    setLogoutPopup(true);
                    setMenuOpen(false);
                  }}
                >
                  {`Hi, ${userName}!`}
                </button>
              ) : (
                <button
                  id="loginButton"
                  className="btn outline-warning mx-1"
                  onClick={() => {
                    dispatch(trueLoginPopup());
                    setMenuOpen(false);
                  }}
                >
                  Login
                </button>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;