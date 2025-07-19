import React, { useState } from 'react';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existing = cart.find(item => item.id === shoe.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="app">
      <h1>👟 Shoe Store</h1>
      <div className="store-container">
        <ShoeList addToCart={addToCart} />
        <Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
      </div>
    </div>
  );
};

export default App;
