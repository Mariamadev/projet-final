import React from 'react';

const Product = ({ name, price, image, description, onAddToCart }) => {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
  }).format(parseInt(price.replace(/,/g, ''), 10));

  return (
      <div className="product-card">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{formattedPrice}</p>
          <button onClick={onAddToCart}>Ajouter au panier</button>
      </div>
  );
};


export default Product;

