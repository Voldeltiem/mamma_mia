import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Contexto } from "../Contex";
import { useContext } from "react";

function Carrito() {
  const { carrito, setCarrito } = useContext(Contexto);
  const { total } = useContext(Contexto);


  return (
    <div className="conteiner-carrito">
      <ListGroup>
        {carrito.map((index) => {
          return (
            <ListGroup.Item variant="danger" className="conteiner-line-cart">
              <div className="price-botom">
              <img
                className="img-conteiner-line-cart"
                src={index.img}
                alt={index.name}
              />
              <p>{index.name}</p>
              </div>
              <div className="price-botom">
                <p>${index.price}</p>
                <Button className="btnX" variant="danger" >X</Button>{" "}
              </div>
            </ListGroup.Item>
          );
        })}
        <ListGroup.Item variant="success">Total: ${total}</ListGroup.Item>
        <ListGroup.Item>
          <Button variant="success">Pagar</Button>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Carrito;
