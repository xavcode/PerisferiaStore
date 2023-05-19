import "./Cart.css";
import React from "react";
import { CartIcon, ClearCartIcon } from "../Icons.jsx";
import { useId } from "react";
import { useCart } from "../../hooks/useCart";

function CartItem({ image, title, rating, price, quantity, addToCart }) {
  return (
    <li >
      <img src={image} alt={title} className="w-21 h-21" />
      <div>
        <h1 className="text-lg font-bold">⭐: {rating}</h1>
        <strong className="text-xl">{title}</strong> -${price}
      </div>

      <footer className="flex items-center justify-between mt-2">
        <small className="text-sm">Qty: {quantity}</small>
        <button onClick={addToCart} className="px-2 py-0 bg-blue-500 text-white rounded-md">
          +
        </button>
      </footer>
    </li>
  );
}

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <div className="cart">
      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
      </ul>
      <button
        style={{
          backgroundColor: "red",
          color: "black",
          padding: '9px',
          borderRadius: '50%'
        }}
        onClick={clearCart}
      >
        <ClearCartIcon />
      </button>
      </div>
    </>
  );
}
