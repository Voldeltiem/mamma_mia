import { useContext } from "react";
import PizzaCard from '../components/PizzaCard'
import { Contexto } from "../Contex";

function Home() {
  const {carta} = useContext(Contexto);

  return (
    <div className="containerHome">
      {carta.map((index, id) => (
        <PizzaCard
          key={id}
          name={index.name}
          img={index.img}
          ingredients={index.ingredients}
          price={index.price}
          desc={index.desc}
          id={index.id}
        />
      ))}
    </div>
  );
}

export default Home;
