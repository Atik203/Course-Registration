import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "./../Cart/Cart";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="flex gap-5 mx-auto justify-center">
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center items-center">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
      <div className="flex-1">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Cards;
