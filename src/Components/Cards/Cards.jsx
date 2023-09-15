import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCart] = useState([]);
  const [totalcredit, setCredit] = useState(20);
  const handleCart = (card) => {
    const newCart = [...carts, card];
    setCart(newCart);
  };

  const handleCredit = (credit) => {
    console.log(credit);
    setCredit(totalcredit - credit);
  };

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="flex gap-5 mx-auto justify-center">
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center items-center">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleCart={handleCart}
            handleCredit={handleCredit}
          ></Card>
        ))}
      </div>
      <div className="flex-1">
        <Cart carts={carts} totalcredit={totalcredit}></Cart>
      </div>
    </div>
  );
};

export default Cards;
