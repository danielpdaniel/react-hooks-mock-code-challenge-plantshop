import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);
  const {id, name, image, price} = plant;

  function handleInStockClick(){
    setInStock(inStock=>!inStock)
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
