import SingleCart from "../SingleCart/SingleCart";
import PropTypes from "prop-types";

const Cart = ({ carts, totalcredit, TotalSum }) => {
  return (
    <div className="w-[350px] p-3">
      <h3 className="text-left text-lg font-bold text-[#2F80ED] mb-8 pt-3">
        Credit Hour Remaining {totalcredit} hr
      </h3>
      <hr className="h-[2px] bg-[#1C1B1B33]" />
      <h3 className="text-[#1C1B1B] font-bold text-lg text-left my-6">
        Course Name
      </h3>

      {carts.length > 0 ? (
        <div>
          <hr className="h-[2px] bg-[#1C1B1B33]" />
          <div className="mt-3">
            {carts.map((cart, idx) => (
              <SingleCart key={idx} cart={cart} index={idx}></SingleCart>
            ))}
          </div>
          <hr className="h-[2px] bg-[#1C1B1B33] mt-3" />
          <h3 className="text-[#1C1B1B] font-bold text-lg text-left mt-3">
            Total Credit Hour: {TotalSum}
          </h3>
        </div>
      ) : null}
    </div>
  );
};

Cart.protoTypes = {
  carts: PropTypes.array.isRequired,
  totalcredit: PropTypes.number.isRequired,
  TotalSum: PropTypes.number.isRequired,
};

export default Cart;
