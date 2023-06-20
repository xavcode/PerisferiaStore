import React from "react";
import { Link } from "react-router-dom";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { useEffect } from "react"; 
import axios from "axios";
import { useSpring, animated } from 'react-spring';

const Card = (props) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const { user, loginWithPopup } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const checkProductInCart = (prop) => {
    if (cart && Array.isArray(cart)) {
      return cart.some((item) => item.id === prop.id);
    }
  };
  const isProductInCart = checkProductInCart(props);

  const handleCartClick = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Iniciar sesión",
        text: "Debes iniciar sesión para agregar productos al carrito.",
        confirmButtonText: "Iniciar sesión",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithPopup();
        } else {
          Swal.fire({
            icon: "info",
            title: "Acceso denegado",
            text: "No podrás realizar ninguna compra hasta que inicies sesión.",
          });
        }
      });
    } else {
      isProductInCart ? removeFromCart(props) : addToCart(props);
    }
  };

  const [isFav, setIsFav] = useState(null);

  const addToFavorites = async (props) => {
    try {
      const response = await axios.post("http://localhost:3001/fav", props);
      setIsFav(true);
    } catch (error) {
      console.error("Error al agregar el producto a favoritos:", error);
    }
  };

  const removeFromFavorites = async (props) => {
    try {
      const response = await axios.delete(`http://localhost:3001/fav/${props.id}`);
      setIsFav(false);
    } catch (error) {
      console.error("Error al eliminar el producto de favoritos:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/fav")
      .then((response) => {
        const favorites = response.data;
        const isFavorite = favorites.some((favorite) => favorite.id === props.id);
        setIsFav(isFavorite);
      })
      .catch((error) => {
        console.error("Error al obtener los favoritos:", error);
      });
  }, [props.id]);

  const imageAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { tension: 200, friction: 20 },
  });

return (
  <div className="grid min-w-[260px] min-h-[340px] max-w-[310px] transition duration-200 ease-in-out hover:scale-[1.03] z-1 hover:shadow-boxshadow rounded-lg hover:shadow-md" style={{ backgroundColor: "#171F2E" }}>
  <div className="flex flex-col rounded-lg bg-bg_card pt-4 justify-between p-5" style={{ backgroundColor: "#F9F8F1" }}>
    <div>
      <Link
        className="flex flex-col justify-center items-center"
        to={`/store/${props.id}`}
      >
        <animated.img
          className="max-h-[150px] max-w-[150px] min-h-[100px] min-w-[100px] align-center justify-center my-2"
          src={props.image}
          alt={props.title ? props.title : props.name}
          style={imageAnimation}
        />
        <h5 className="max-w-[150px] text-xl font-semibold tracking-tight text-text text-center">
          {props.title}
        </h5>
      </Link>
    </div>
      <div className="grid justify-center">
        <span className="text-center font-bold text-xl text-text_rating">
          Rating: {props.rating}⭐
        </span>
        <span className="text-2xl text-center font-bold text-text">{`$${props.price} `}</span>
        <button
          className={`bg-${
            isProductInCart ? "red-900" : "blue-900"
          } text-white flex justify-center rounded-md transition duration-300 hover:bg-${
            isProductInCart ? "red-700" : "blue-700"
          }`}
          onClick={handleCartClick}
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
        {isAuthenticated ? (
          isFav ? (
            <button
              onClick={() => removeFromFavorites(props)}
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              ❤️
            </button>
          ) : (
            <button
              onClick={() => addToFavorites(props)}
              className="text-gray-500 hover:text-gray-600 transition duration-300"
            >
              🤍
            </button>
          )
        ) : null}
      </div>
    </div>
  </div>
);
};

export default Card;