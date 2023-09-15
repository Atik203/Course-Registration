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

export default SingleCart;
