import React from 'react'
import '../styles/oneprd.css';

const Item = ({ title, price, thumbnail,onAddToCart }) => {
  let srcimg = require('../data/' + thumbnail)
  const handleClick = () => {
    if (onAddToCart) {
      onAddToCart(thumbnail, title, price);
    }
  };

  return (
    <div className='item'>
      <img src={srcimg} alt="" />
      <p>{title}</p>
      <div className='name-price'>
        <p id='pp'>{price}</p>
        <button onClick={handleClick}>buy now</button>
      </div>
    </div>
  )
}
export default Item;
// import React from 'react';

// const OneProduct = ({ image, title, price, onAddToCart }) => {
//   let srcimage = require('./pics/' + image);



//   return (
//     <div id="products" className="col mb-5">
//       <div id="card" className="card h-100">
//         {/* Product image */}
//         <img className="card-img-top" src={srcimage} alt="Product Image" />

//         {/* Product details */}
//         <div className="card-body p-4">
//           <div className="text-center">
//             {/* Product name */}
//             <h5 id="title" className="fw-bolder">
//               {title}
//             </h5>
//             <h5 id="price" className="fw-bolder">
//               {price}
//             </h5>
//           </div>
//         </div>
//         {/* Product actions */}
//         <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//           <div className="text-center">
//             <button
//               id="btn"
//               className="btn btn-outline-dark mt-auto"
//               onClick={handleClick}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OneProduct;