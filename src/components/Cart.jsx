import React from 'react';
import './Cart.css';

const Cart = ({ cart, increaseQty, decreaseQty }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {/* <div className="cart-item">
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <span>${item.price * item.quantity}</span>
              </div> */}
              <div className="cart-item">
  <span>{item.name}</span>
  <div className="quantity-controls">
    <button onClick={() => decreaseQty(item.id)}>-</button>
    <span>{item.quantity}</span>
    <button onClick={() => increaseQty(item.id)}>+</button>
    <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>${item.price * item.quantity}</span>
  </div>
</div>

            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
