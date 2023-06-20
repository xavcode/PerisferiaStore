import React from "react";
import { Link, useParams } from "react-router-dom";
import { startCase } from "lodash";
import { useState, useEffect } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

import axios from "axios";
import { useCart } from "../../hooks/useCart.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import ReviewForm from "../ReviewForm/ReviewForm.jsx";

const Detail = (props) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const [actualizandoPage, setActualizandoPage] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user, loginWithPopup } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://perisferiastore-production.up.railway.app/store/${id}`
      );
      setProduct(response.data);
    };
    fetchData();
  }, [actualizandoPage]);

  const isProductInCart = cart.some((item) => item.id === product.id);

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
          loginWithPopup(); // Iniciar sesión con Auth0
        } else {
          Swal.fire({
            icon: "info",
            title: "Acceso denegado",
            text: "No podrás realizar ninguna compra hasta que inicies sesión.",
          });
        }
      });
    } else {
      if (isProductInCart) {
        removeFromCart(product);
      } else {
        addToCart(product);
      }
    }
  };
  // style={{ backgroundColor: "#F9F8F1" }}
  // style={{ backgroundColor: "#161F2D" }}

  return (
    <div
      className="flex mt-32 items-start justify-center gap-12"
      style={{ backgroundColor: "#161F2D" }}
    >
      <div className="flex flex-col">
        <div
          className="flex flex-col rounded-lg bg-bg_card pt-4 p-4"
          style={{ backgroundColor: "#F9F8F1" }}
        >
          <Link to="/store" className="text-gray-500 hover:text-gray-900 mb-2">
            <svg className="w-6 h-6  mr-2" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>

          {/* image side */}
          <div
            className="flex px-2 bg-bg_card gap-3"
            style={{ backgroundColor: "#F9F8F1" }}
          >
            <div className="flex flex-col items-start">
              <div className="flex flex-col justify-center items-center">
                <img
                  className=" max-h-[350px] max-w-[250px] min-h-[200px] min-w-[200px] align-center justify-center my-2"
                  src={product.img}
                  alt={product.name}
                />
                <h5 className="max-w-[200px] text-2xl font-semibold tracking-tight text-text text-center mb-2">
                  {startCase(product.name)}
                </h5>
              </div>
              <div className="w-full flex items-center justify-center gap-2 p-1">
                <span className="text-center text-xl font-bold text-text_rating ">
                  Rating: {product.rating}⭐
                </span>
                <span className="text-xl text-left font-bold text-text">
                  Precio: {`$${product.price} `}
                </span>
              </div>
            </div>
            {/* description side */}
            <div className="flex flex-col w-[200px] text-justify justify-between pb-1">
              <p className="w-[200px] text-text mb-2">
                {" "}
                Descripción: {`${product.description}`}
              </p>
              <p className="text-text w-[200px] text">
                {" "}
                Categoría: {`${product.category}`}
              </p>
              <p className="text-text  ">
                {" "}
                Colores:
                <select
                  className="ml-4 bg-gray-200 "
                  name="colorPicker"
                  id="colorPicker"
                >
                  <option
                    className="bg-gray-200 hover:bg-transparent"
                    value="red"
                  >
                    Rojo
                  </option>
                  <option
                    className="bg-gray-200 hover:bg-transparent"
                    value="yellow"
                  >
                    Amarillo
                  </option>
                  <option
                    className="bg-gray-200 hover:bg-transparent"
                    value="blue"
                  >
                    Azul
                  </option>
                </select>
              </p>
              <p className="text-text "> Estado: {`${product.status}`}</p>
              <button
                className={`${
                  isProductInCart ? "bg-red-900" : "bg-blue-900"
                } text-white font-bold py-2 px-4 rounded flex justify-center
                `}
                onClick={handleCartClick}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <ReviewForm id={id} setActualizandoPage={setActualizandoPage} />
        </div>
      </div>

      <div className="h-[600px] overflow-auto px-2 border-2 border-gray-300 rounded-lg">
        <Reviews id={id} />
      </div>
    </div>
  );
};

export default Detail;
