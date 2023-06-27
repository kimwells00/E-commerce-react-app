/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function Cart({ cart }) {
  //calculate cart total
  //.reduce() method to iterate over each item in the cart array and accumulate the total price.
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-container">
      {/* renders cart info */}
      <h1 className="cart-header">your cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="cart-card">
          <p>{item.name}</p>
          {/* <img src={item.image} alt={item.name} /> */}
          <p>Price: ${item.price}</p>
          <p>x {item.quantity}</p>
        </div>
      ))}
      <p className="cart-total">Total Price: ${totalPrice}</p>
      <button>
        <Link to={`/products`}> Keep Shopping </Link>
      </button>
    </div>
  );
}
