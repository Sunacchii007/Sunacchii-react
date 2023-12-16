import React from 'react';
import '../styles/product.css';
import Item from './oneprd';
import About from './About';
import { All,Manga,Anime } from '../data/datax';
import { useState } from 'react';
// import { Category } from './category';

const saveToLocalStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};
const NumberOfItems = () => {
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  return items.length;
};
const handleAddToCart = (thumbnail, title, price) => {
  const newCartItem = { thumbnail, title, price, quantity: 1 };
  // Retrieve existing items from local storage
  const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the item already exists in the cart
  const existingItemIndex = existingItems.findIndex((item) => item.title === title);

  if (existingItemIndex !== -1) {
    // Item already exists, update the quantity
    existingItems[existingItemIndex].quantity += 1;
  } else {
    // Item is new, add it to the cart
    existingItems.push(newCartItem);
  }

  // Save the updated array back to local storage
  saveToLocalStorage("cartItems", existingItems);
};

const Theprds = (props) => {
  const [array, setArray] = useState(All)
  function get1() {
    setArray(All)

  }
  function get2() {
    setArray(Manga)

  }
  function get3() {
    setArray(Anime)
  }

  
  return (
  <div>
    <About />

    <div className="theprds-top">
      <li onClick={get1} className='header-link'><h2>All</h2></li>
      <li onClick={get2} className='header-link'><h2>Anime</h2></li>
      <li onClick={get3} className='header-link'><h2>Manga</h2></li>
    </div>
    {/* <Category /> */}

    <div className='Theprds'>
      <div className='theprds-item'>
        {array.map((item) => {
          return <Item id={item.id} title={item.title}
            thumbnail={item.thumbnail} price={item.price} onAddToCart={()=>handleAddToCart(item.thumbnail,item.title,item.price)} />
        })}
      </div>
    </div>
  </div>
)
}

export default Theprds;
export { NumberOfItems};
