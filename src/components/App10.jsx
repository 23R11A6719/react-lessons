import React, { useState } from 'react';

const App10 = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 23 },
    { id: 2, name: 'Product 2', price: 45 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 60 }
  ];

  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: {
        ...product,
        quantity: prev[product.id] ? prev[product.id].quantity + 1 : 1
      }
    }));
  };

  const increment = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        quantity: prev[productId].quantity + 1
      }
    }));
  };

  const decrement = (productId) => {
    setCart(prev => {
      const updatedQuantity = prev[productId].quantity - 1;
      if (updatedQuantity <= 0) {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      }
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          quantity: updatedQuantity
        }
      };
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>App10</h2>
      <h3>Assignment</h3>

      <h4>Products</h4>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.id}. {product.name} - ${product.price} 
          <button 
            onClick={() => addToCart(product)} 
            style={{ marginLeft: '10px', padding: '4px 8px' }}
          >
            Add
          </button>
        </div>
      ))}

      <hr />

      <h4>My Cart</h4>
      {Object.keys(cart).length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        Object.values(cart).map(item => (
          <div key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} - ${item.price} - 
            <button 
              onClick={() => decrement(item.id)} 
              style={{ margin: '0 5px' }}
            >
              -
            </button>
            {item.quantity}
            <button 
              onClick={() => increment(item.id)} 
              style={{ margin: '0 5px' }}
            >
              +
            </button>
            - ${item.price * item.quantity}
          </div>
        ))
      )}
    </div>
  );
};

export default App10;