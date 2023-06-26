/* eslint-disable react/prop-types */
export default function Cart({ cart }) {
  //calculate cart total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
