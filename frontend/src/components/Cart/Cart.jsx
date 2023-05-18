// import { useId } from "react";
// import { CartIcon, ClearCartIcon } from "./Icons.jsx";
// import { useCart } from '../hooks/useCart.js'

// function CartItem ({thumbnail, price, title, quantity, addToCart}){
  //   return(
    //     <li>
    //     <img
    //       src={thumbnail}
    //       alt={title}
    //     />
    //      <div>
    //       <strong>{title}</strong> -{price}
    //     </div>
    //     <footer>
//       <small >Qty: {quantity}</small>
//       <button onClick={addToCart}>+</button>
//     </footer>
//   </li>
//   )
// }

import "./Cart.css";
import React from 'react';
// import { FooterCart } from "../footerCart";


export default function Cart() {
  return (
    <>
      <label className="cart-button" /*htmlFor={cartCheckboxId}*/>C E</label>
      <input /*id={cartCheckboxId}*/ type="checkbox" hidden />
      {/* <div className="cart"> */}
      <ul>
        <li>
          <img
            src="https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg"
            alt="phne"
          />
          <div>
            <strong>phone</strong> -$1000
          </div>

          <footer>
            <small>
              Qty: 1
            </small>
            <button style={{backgroundColor: 'black'}}>+</button>
          </footer>
        </li>
      </ul>
      <button style={{backgroundColor: 'red', color: 'black'}} /*onClick={clearCart}*/>
            Borrar carrito
          </button>
      <br />
      <br />
      <br />
      {/* <FooterCart /> */}
    </>
  );
}