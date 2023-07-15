//Importacion
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { Contexto } from "../Contex";

export default function Nava  (){
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  const {total} = useContext(Contexto);
  
  return (
    <Navbar bg="success" data-bs-theme="success">
      <Container>
        {/* creacion de NavBar con uso de bootstrap y NavLink */}
        <FontAwesomeIcon icon={faPizzaSlice} size="2xl"/>
        <Nav className="me-left">
          <NavLink className={ setActiveClass } to='./Home'>Home</NavLink>
          <NavLink className={ setActiveClass } to='./Carrito'>Carrito</NavLink>
          <Navbar.Text>Total: {total}</Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
}

