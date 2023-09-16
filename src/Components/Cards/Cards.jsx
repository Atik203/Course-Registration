import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [carts, setCart] = useState([]);
  const [totalcredit, setCredit] = useState(20);
  const [TotalSum, setTotalSum] = useState(0);

  const handleCart = (card, id) => {
    const isExist = carts.find((item) => item.id === id);
    if (isExist) {
      return toast.error("You can not add same course", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const newCredit = totalcredit - card.credit;
      if (newCredit >= 0) {
        const newCart = [...carts, card];
        setCart(newCart);
      } else {
        return toast.warn("You can't add more than 20 cr", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const handleTotalsum = (credit, id) => {
    const newCredit = totalcredit - credit;
    const isExist = carts.find((item) => item.id === id);
    if (!isExist && newCredit >= 0) {
      setTotalSum(TotalSum + credit);
    }
  };

  const handleCredit = (credit, id) => {
    const isExist = carts.find((item) => item.id === id);
    const newCredit = totalcredit - credit;

    if (!isExist && newCredit >= 0) {
      setCredit(newCredit);
    }
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
