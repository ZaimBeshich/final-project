import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, ButtonGroup, Button } from 'react-bootstrap';


const Navigation = () => {

  return (
    <Navbar
      bg="primary"
      className="d-flex flex-row align-items-center justify-content-between  sticky-top">
      <Nav.Item>
        <h1 className='fs-1 fw-bolder text-light font-monospace'>Pokedex</h1>
      </Nav.Item>

      <ButtonGroup
        className="d-flex flex-row align-self-center">

        <NavLink
          exact to="/home">
          <Button
            className="btn-outline-light">
            Home
            </Button>
        </NavLink>

        <NavLink
          exact to="/collection">
          <Button
            className="btn-outline-light">
            Collection
            </Button>
        </NavLink>

      </ButtonGroup>
    </Navbar>
  );
};

export default Navigation;

