import '../styles/shoppingcart.css';
import React, { useEffect, useState } from "react";

const ShoppingCart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({}); // State for quantities

  useEffect(() => {
      // Fetch cart items and quantities from local storage
      const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedItems);

      const storedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
      setQuantities(storedQuantities);
  }, []);

  // Function to handle item deletion
  const handleDeleteItem = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      // Update local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      // Remove quantity information for the deleted item
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[index];
      setQuantities(updatedQuantities);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
  };


const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity),0);
};

  
    return (
      <div className="shopping-cart">
        <div className="items">
          {cartItems.map((item ,index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <img className='item-image' src={require(`../data/${item.thumbnail}`)} alt="" />
                <p className="item-name">{item.title}</p>
                <p>Price:<br/> ${item.price}</p>
                <p>Quantity:<br/> {item.quantity}</p>
              </div>
              <div className="item-total">Total:<br></br>${item.price * item.quantity}</div>
              <button id='btn-cart' onClick={handleDeleteItem}>remove</button>
            </div>
          ))}
        </div>
        <div className="checkout">
          <h2>Checkout</h2>
          <div className="total">
            <p>Total: ${calculateTotal(cartItems)}</p>
          </div>
          <form>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
            <label htmlFor="cardName">Name on Card:</label>
            <input type="text" id="cardName" placeholder="John Smith" />
            <div className="card-details">
              <div>
                <label htmlFor="expiration">Expiration:</label>
                <input type="text" id="expiration" placeholder="MM/YYYY" />
              </div>
              <div>
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" placeholder="***" />
              </div>
            </div>
            <button type="button" className="checkout-button" >
              Checkout
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default ShoppingCart;