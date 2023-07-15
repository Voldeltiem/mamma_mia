import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../Contex";
import { useContext } from "react";

function PizzaCard({ name, img, ingredients, price, id }) {
  const { addToCart } = useContext(Contexto);
  const {carrito, setCarrito} = useContext(Contexto);
  const {carta} = useContext(Contexto);
  

  const navigate = useNavigate();
  const detalle = () => {
    navigate(`/Pizza/${id}`);
  };

  const handleAddToCart = () => {
    addToCart(id,name,price,img)
  };

  return (
    <div className="cardPizza">
      <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {ingredients.map((ingredients) => (
            <ul>
              <li>
                {<FontAwesomeIcon icon={faPizzaSlice} />} {ingredients}
              </li>
            </ul>
          ))}
        </Card.Text>
        <h3>${price}</h3>
        <div className="priceBotom">
        <Button variant="primary" onClick={detalle}>
          Ver mas
        </Button>
        <Button variant="danger" onClick={handleAddToCart}>Añadir</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default PizzaCard;
