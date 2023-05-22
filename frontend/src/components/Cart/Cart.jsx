import React, { useState } from "react";
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
  decreaseQuantity,
}) {
  return (
    <div >
      <div>
        {/* image */}
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
       
      
  );
}

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, decreaseQuantity } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="relative">
        <label
          className="cart-button bg-blue-500 rounded-full text-white cursor-pointer"
          htmlFor={cartCheckboxId}
          onClick={handleCartToggle}
        >
          <CartIcon />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-sm">
              {cart.length}
            </span>
          )}
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden />
        {isCartOpen && (
          <div className="cart-overlay fixed inset-0 bg-black opacity-50" onClick={handleCartToggle} />
        )}
        <div
          className={`cart bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-md p-4 overflow-y-auto ${
            isCartOpen ? "" : "hidden"
          }`}
          style={{ maxHeight: "80vh" }} // Establece una altura máxima para el scroll
        >
          <button
            className="bg-red-500 text-white rounded-full p-2 absolute top-2 right-2"
            onClick={handleCartToggle}
          >
            <ClearCartIcon />
          </button>
          <ul>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                decreaseQuantity={() => decreaseQuantity(product)}
                {...product}
              />
            ))}
          </ul>
          {cart.length === 0 && <p className="text-center text-gray-500">Tu Carrito esta vacio</p>}
        </div>
      </div>
    </>
  );
}