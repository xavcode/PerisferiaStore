import "./Cart.css";
import React from "react";
import { CartIcon, ClearCartIcon } from "../Icons.jsx";
import { useId } from "react";
import { useCart } from "../../hooks/useCart";

function CartItem({
  img,
  image,
  name,
  title,
  rating,
  price,
  quantity,
  addToCart,
  decreaseQuantity
}) {

  return (
    <li>
      <img src={img ? img : image} alt={name ? name : title} className="w-21 h-21" />
      <div>
        <h1 className="text-lg font-bold">⭐: {rating}</h1>
        <strong className="text-xl">{name ? name  : title}</strong> -${price}
      </div>

      <footer className="flex items-center justify-between mt-2">
        <small className="text-sm">Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={decreaseQuantity}>-</button>
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
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "9px",
            borderRadius: "50%",
          }}
          onClick={clearCart}
        >
          <ClearCartIcon />
        </button>
        {cart.map((product) => (
          <ul key={product.id}>
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          </ul>
        ))}
      </div>
    </>
  );
}
