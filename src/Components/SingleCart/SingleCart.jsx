import PropTypes from "prop-types";
const SingleCart = ({ cart, index }) => {
  const { name } = cart;
  return (
    <div className="mt-2">
      <h1>
        {index + 1}. {name}
      </h1>
    </div>
  );
};
SingleCart.propTypes = {
  cart: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default SingleCart;
