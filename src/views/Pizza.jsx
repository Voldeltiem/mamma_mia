import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Contexto } from "../Contex";

function Pizza(props) {
  const { id } = useParams();
  const { carta } = useContext(Contexto);
  const { addToCart } = useContext(Contexto);
  const pizza = carta.find((index) => index.id === id);
  console.log(pizza);

  if (!pizza) {
    return <div>No se encontró la pizza con el ID especificado</div>;
  }
  const { name, price, img } = pizza;
  
  const handleAddToCart = () => {
    addToCart(id, name, price, img);
  };

  return (
    <div className="conteinerCardBig">
      <Card className="cardBig">
        <Card.Img className="imgCardBig" variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <p>{pizza.desc}</p>
            {pizza.ingredients.map((ingredient, index) => (
              <ul>
                <li>
                  {<FontAwesomeIcon icon={faPizzaSlice} />} {ingredient}
                </li>
              </ul>
            ))}
          </Card.Text>
          <div className="priceBotom">
            <h3>${pizza.price}</h3>
            <Button variant="danger" onClick={handleAddToCart}>
              Añadir
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pizza;
