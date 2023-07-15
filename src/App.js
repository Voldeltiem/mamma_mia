//Importaciones
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nava";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import { Contexto } from "./Contex";
import { useState, useEffect } from "react";

export default function App() {
  const [carta, setCarta] = useState([]);
  let [total, setTotal] = useState(0);
  let [carrito, setCarrito] = useState([]);
  const data = "/pizzas.json";

  const getCarta = async () => {
    const response = await fetch(data);
    const dataResponse = await response.json();
    setCarta([...dataResponse]);
    console.log(dataResponse);
  };

  useEffect(() => {
    const newTotal = carrito.reduce((total, pizza) => total + pizza.price, 0);
    setTotal(newTotal);
  }, [carrito]);
  
  const addToCart = (id, name, price, img) => {
    const pizza = {
      id,
      name,
      price,
      img
    };
    setCarrito([...carrito, pizza]);
  };

  useEffect(() => {
    console.log(carrito);
  }, [carrito]);

  useEffect(() => {
    getCarta();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Contexto.Provider value={{ carta, total,setTotal,carrito, setCarrito,addToCart}}>
        <NavBar></NavBar>
        <Routes>
          {/* enrrutamiento */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Pizza/:id" element={<Pizza />} />
        </Routes>
      </Contexto.Provider>
    </BrowserRouter>
  </div>
  );
}
