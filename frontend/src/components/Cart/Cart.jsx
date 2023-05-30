
import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { BsFillTrash3Fill, BsCartX } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

function CartItem({
  image,
  title,
  price,
  quantity,
  addToCart,
  decreaseQuantity,
  removeFromCart,
}) {
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity();
    }
  };

  const handleIncreaseQuantity = () => {
    addToCart();
  };

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          <img className="max-w-[120px]" src={image} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-sm uppercase font-medium max-w-[240px] text-black">
              {title}
            </div>
            <div>
              <div>
                <div
                  className="text-xl cursor-pointer"
                  onClick={removeFromCart}
                >
                  <BsFillTrash3Fill className="text-gray-500 hover:text-red-500 transition" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-700 font-medium">
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={handleDecreaseQuantity}
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {quantity}
              </div>
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={handleIncreaseQuantity}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-gray-700">
              {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium text-gray-700">
              Precio: {price * quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart({ userId }) {
  const { cart, clearCart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user/carrito/${userId}`);
      const userCart = response.data.cart;
      clearCart();
      userCart.products.forEach((product) => {
        addToCart(product);
      });
    } catch (error) {
      console.error("Error al obtener el carrito del usuario:", error);
    }
  };

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleClick = async (event) => {
    event.preventDefault();

    if (!cart || cart.length === 0) {
      console.error("El carrito está vacío");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/payment", {
        publicKey: 'TEST-1c120130-f27d-4676-930c-ae6d7014d092',
        cartId: cart[0].id, // Utiliza el ID del primer producto en el carrito
      });
      console.log("Pago correcto", response);
      console.log(response.data);
      window.location.href = response.data.init_point;
      console.log(response.data.init_point)
    } catch (error) {
      console.error("Pago no realizado", error);
    }
  };

  return (
    <div>
      <div>
        <div className="relative">
          <div
            className="cursor-pointer flex relative"
            onClick={handleCartToggle}
          >
            <AiOutlineShoppingCart className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 flex justify-center items-center bg-red-500 rounded-full text-white w-4 h-4 text-xs">
              {cart.length}
            </div>
          </div>
          {isCartOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    addToCart={() => addToCart(item)}
                    decreaseQuantity={() => decreaseQuantity(item)}
                    removeFromCart={() => removeFromCart(item)}
                  />
                ))}
              </div>
              {cart.length > 0 && (
                <div className="py-2 flex justify-between px-4">
                  <div className="text-sm font-medium text-gray-700">
                    Total: {totalPrice}
                  </div>
                  <button
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none"
                    onClick={handleClick}
                  >
                    Realizar pago
                  </button>
                </div>
              )}
              {cart.length === 0 && (
                <div className="py-2 px-4 text-sm font-medium text-gray-700">
                  No hay productos en el carrito
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}