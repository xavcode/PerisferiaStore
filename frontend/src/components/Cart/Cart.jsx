import React, { useContext, useState } from "react";
import { CartContext } from "../../context/Cart";
import { BsFillTrash3Fill, BsCartX } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../../hooks/useCart";
import { MdDelete } from 'react-icons/md';
import { useEffect } from "react";

function CartItem(
  props
) {
  const { cart, removeFromCart } = useCart()  
  const checkProductInCart = prop => {
    if (cart && Array.isArray(cart)) {
    return cart.some(item => item.id === prop.id)
    } 
  }
  const isProductInCart = checkProductInCart(props)

  const handleRemoveFromCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El producto será eliminado del carrito',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(props);
        Swal.fire('¡Borrado!', `${props.title ? props.title : props.name} ha sido eliminado del carrito`, 'success');
      }
    });
  };

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 cart-item">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          <img className="max-w-[120px]" src={props.image ? props.image : props.img} alt="" />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-sm uppercase font-medium max-w-[240px] text-black">
              {props.title ? props.title : props.name} 
            </div>
            <div>
              <div>
                <div
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    handleRemoveFromCart(props)
                  }}>
                  {/*Para borrar*/}
                  <BsFillTrash3Fill className="text-gray-500 hover:text-red-500 transition" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-700 font-medium">
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={props.decreaseQuantity}
              >
                {/*Para restar*/}
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
               {props.quantity} 
              </div>
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={props.addToCart}
              >
                {/*Para sumar*/}

                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around text-gray-700">
            Precio: ${props.price}  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart( {userData}) {
  const { cart, clearCart, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);
  const userMail = userData?.mail;

  const handleCartToggle = () => {
    // setCartOpen(!isCartOpen);
    setCartOpen((prevState) => !prevState);
  };

  const handleClearCart = () => {
    if (cart.length === 0) {
      // Mostrar alerta de carrito vacío
      Swal.fire("Carrito vacío", "El carrito ya está vacío.", "info");
      return;
    }
  
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará todos los productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar todo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("¡Borrado!", "El carrito ha sido vaciado.", "success");
      }
    });
  };
  

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const redirectToPayment = async () => {
    if (!cart || cart.length === 0) {
      console.error("El carrito está vacío");
      return;
    }

    try {
      const products = cart
        .filter((product) => product.quantity > 0) // Filtrar productos con cantidad mayor a cero
        .map((product) => ({
          description: product.description,
          quantity: product.quantity,
          title: product.title,
          id: product.id,
          price: parseFloat(product.price),
        }));

      const response = await axios.post("https://perisferiastore-production.up.railway.app/payment", {
        publicKey: "TEST-1c120130-f27d-4676-930c-ae6d7014d092",
        products: products,
        user:userData
      });
      await axios.post("https://perisferiastore-production.up.railway.app/send-email", {
        to: userMail,
        subject: "Compra realizada",
        message: `Un gran poder conlleva una gran responsabilidad. Gracias por tu compra`,
      });
      console.log("Correo electrónico enviado")

      window.location.href = response.data.init_point;
    } catch (error) {
      console.error("Pago no realizado", error);
    }
  };

  const handleOutsideClick = (event) => {
    // Verifica si el evento se originó dentro del carrito o sus elementos internos
    // if (!event.target.closest(".relative")) {
      // setCartOpen(false);
    // }
    if (!event.target.closest(".relative") && !event.target.closest(".cart-item")) {
      setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  

  return (
    <div>
      <div>
        <div className="relative">
          <div
            className="cursor-pointer flex relative"
            onClick={handleCartToggle}
          >
            <AiOutlineShoppingCart className="w-8 h-8" />
            <div className="absolute -top-1 -right-2 flex justify-center items-center bg-red-900 rounded-full text-white w-4 h-4 text-sm">
              {cart.length}
            </div>
          </div>
          {isCartOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image ? item.image : item.img}
                    title={item.title ? item.title : item.name}
                    price={item.price}
                    quantity={item.quantity}
                    addToCart={() => addToCart(item)}
                    decreaseQuantity={() => decreaseQuantity(item)}
                    clearCart={clearCart}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>
              <button onClick={handleClearCart} style={{ color: "red" }}>
               <MdDelete />
              </button> 
              {cart.length > 0 && (
                <div className="py-2 flex justify-between px-4">
                  <div className="text-sm font-medium text-gray-700">
                    Total: ${totalPrice}
                  </div>
                  <button
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-900 hover:bg-red-600 focus:outline-none"
                    onClick={redirectToPayment}
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
