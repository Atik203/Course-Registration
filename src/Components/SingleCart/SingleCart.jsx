const SingleCart = ({ cart }) => {
  const { name } = cart;
  return (
    <div className="mt-2">
      <h1>{name}</h1>
    </div>
  );
};

export default SingleCart;
