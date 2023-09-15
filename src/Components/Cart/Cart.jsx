import SingleCart from "../SingleCart/SingleCart";

const Cart = ({ carts, totalcredit }) => {
  return (
    <div className="w-[350px] p-3">
      <h3 className="text-left text-lg font-bold text-[#2F80ED] mb-8 pt-3">
        Credit Hour Remaining {totalcredit} hr
      </h3>
      <hr className="h-[2px] bg-[#1C1B1B33]" />
      <h3 className="text-[#1C1B1B] font-bold text-lg text-left my-6">
        Course Name: {carts.length}
      </h3>
      <hr className="h-[2px] bg-[#1C1B1B33]" />
      <div className="mt-3">
        {carts.map((cart) => (
          <SingleCart key={cart.id} cart={cart}></SingleCart>
        ))}
      </div>
      <hr className="h-[2px] bg-[#1C1B1B33] mt-3" />
      <h3 className="text-[#1C1B1B] font-bold text-lg text-left mt-3">
        Total Credit:
      </h3>
    </div>
  );
};

export default Cart;
