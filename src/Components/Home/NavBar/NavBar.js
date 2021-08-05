import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import imgOne from "../../../img/Logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow NavBar navbar-nav-scroll "
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="imgOne" src={imgOne} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Home" className="menu-1">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Admin" className="menu-1">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} to="/Orders" className="menu-1">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/Login" className="">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
