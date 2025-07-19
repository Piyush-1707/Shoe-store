import React from 'react';
import './ShoeList.css';

const shoes = [
  { id: 1, name: "Nike Air Max", price: 120, img: "nike-air-max.jpg" },
  { id: 2, name: "Adidas Ultraboost", price: 150, img: "Adidas Ultraboost.avif" },
  { id: 3, name: "Puma Rider", price: 90, img: "Puma Rider.webp" },
  { id: 4, name: "Reebok Flex", price: 85, img: "Reebok Flex.avif" },
  { id: 5, name: "New Balance 574", price: 110, img: "New Balance 574.jpg" },
  { id: 6, name: "Converse All Star", price: 70, img: "Converse All Star.jpeg" },
];

const ShoeList = ({ addToCart }) => {
  return (
    <div className="shoe-list">
      <h2>Available Shoes</h2>
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-card">
          <img src={shoe.img} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
