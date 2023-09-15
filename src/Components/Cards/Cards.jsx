import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCart] = useState([]);
  const [totalcredit, setCredit] = useState(20);
  const [TotalSum, setTotalSum] = useState(0);

  const handleCart = (card) => {
    const newCart = [...carts, card];
    setCart(newCart);
  };

  const handleTotalsum = (credit) => {
    setTotalSum(TotalSum + credit);
  };

  const handleCredit = (credit, id) => {
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
            handleTotalsum={handleTotalsum}
          ></Card>
        ))}
      </div>
      <div className="flex-1">
        <Cart
          carts={carts}
          totalcredit={totalcredit}
          TotalSum={TotalSum}
        ></Cart>
      </div>
    </div>
  );
};

export default Cards;
