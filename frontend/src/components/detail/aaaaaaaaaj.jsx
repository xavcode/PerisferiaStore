// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { startCase } from "lodash";
// import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";

// import axios from "axios";
// import { useCart } from "../../hooks/useCart.js";

// const Detail = () => {
//   const { addToCart, removeFromCart, cart } = useCart();

//   const [product, setProduct] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`http://localhost:3001/store/${id}`);
//       setProduct(response.data);
//     };
//     fetchData();
//   }, []);

//   const isProductInCart = cart.some((item) => item.id === product.id);

//   return (
//     <div className="flex mt-[200px] justify-center items-center">
//       <div className="flex flex-col rounded-lg bg-bg_card pt-4 p-5">
//         <Link to="/store" className="text-gray-500 hover:text-gray-900 mb-2">
//           <svg className="w-6 h-6  mr-2" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 19l-7-7m0 0l7-7m-7 7h18"
//             />
//           </svg>
//         </Link>

//         {/* image side */}
//         <div className="flex px-2 bg-bg_card gap-3">
//           <div className="flex flex-col items-start">
//             <div className="flex flex-col justify-center items-center">
//               <img
//                 className=" max-h-[350px] max-w-[250px] min-h-[200px] min-w-[200px] align-center justify-center my-2"
//                 src={product.img}
//                 alt={product.name}
//               />
//               <h5 className="max-w-[200px] text-2xl font-semibold tracking-tight text-text text-center mb-2">
//                 {startCase(product.name)}
//               </h5>
//             </div>
//             <div className="w-full flex items-center justify-center gap-2 p-1">
//               <span className="text-center text-xl font-bold text-text_rating ">
//                 Rating: {product.rating}
//               </span>
//               <span className="text-xl text-left font-bold text-text ">
//                 Precio: {`${product.price}$ `}
//               </span>
//             </div>
//           </div>
//           {/* description side */}
//           <div className="flex flex-col w-[200px] text-justify justify-between pb-1">
//             <p className="w-[200px] text-text mb-2">
//               {" "}
//               Descripción: {`${product.description}`}
//             </p>
//             <p className="text-text w-[200px] text">
//               {" "}
//               Categoría: {`${product.category}`}
//             </p>
//             <p className="text-text  ">
//               {" "}
//               Colores:
//               <select
//                 className="ml-4 bg-gray-200 "
//                 name="colorPicker"
//                 id="colorPicker"
//               >
//                 <option
//                   className="bg-gray-200 hover:bg-transparent"
//                   value="red"
//                 >
//                   Rojo
//                 </option>
//                 <option
//                   className="bg-gray-200 hover:bg-transparent"
//                   value="yellow"
//                 >
//                   Amarillo
//                 </option>
//                 <option
//                   className="bg-gray-200 hover:bg-transparent"
//                   value="blue"
//                 >
//                   Azul
//                 </option>
//               </select>
//             </p>
//             <p className="text-text "> Estado: {`${product.status}`}</p>
//             <button
//               className={`${isProductInCart ? "bg-red-900" : "bg-indigo-900"} text-white font-bold py-2 px-4 rounded`}
//               // style={{
//               //   backgroundColor: isProductInCart ? "red" : "#09f",
//               //   color: "black",
//               // }}
//               onClick={() => {
//                 isProductInCart ? removeFromCart(product) : addToCart(product);
//               }}
//             >
//               {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;


















import React from "react";
import { Link } from "react-router-dom";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";
import Cart from "../Cart/Cart";
import { useCart } from '../../hooks/useCart';
import { useState } from "react";

const Card = (props) => {
  const  {addToCart, cart, removeFromCart}  = useCart()
  
  const checkProductInCart = prop => {
    return cart.some(item => item.id === prop.id)
  }
  const [isInCart, setIsInCart] = useState(checkProductInCart(props));

  function handleClick() {
    isInCart ? removeFromCart(props) : addToCart(props);
    setIsInCart(!isInCart);
  }
console.log('--->', cart.name);
  return (
    <div>
      <Cart />
      <div className="grid min-w-[280px] max-w-[320px] transition duration-200 ease-in-out hover:scale-[1.03] z-1 hover:shadow-boxshadow rounded-lg hover:shadow-md ">
        <div className="flex flex-col rounded-lg bg-bg_card pt-4 justify-between p-5">
          <div>
            <Link
              className="flex flex-col justify-center items-center"
              to={`/store/${props.id}`}
            >
              <img
                className=" max-h-[150px] max-w-[150px] min-h-[100px] min-w-[100px] align-center justify-center my-2"
                src={props.image}
                alt={props.title}
              />
              <h5 className="max-w-[150px] text-xl font-semibold tracking-tight text-text text-center ">
                {props.title}
              </h5>
            </Link> 
          </div>
          <div className="grid justify-center">
            <span className="text-center font-bold text-xl text-text_rating">
              Rating: {props.rating}
            </span>
            <span className="text-2xl text-center font-bold text-text  ">{`${props.price}$ `}</span>
            {/* <button 
             style={{ backgroundColor : isProductInCart ? '#B00201' : '#17266C', color: 'white' }} 
            className={`${isProductInCart ? "bg-red-900" : "bg-indigo-900"} text-white font-bold py-2 px-4 rounded`}
             onClick={() => {
              isProductInCart
              ? removeFromCart(props)
              : addToCart(props);
              }}>
               {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button> */}
            <button
              onClick={handleClick}
              className={`${
                isInCart ? 'bg-red-900' : 'bg-indigo-900'
              } text-white font-bold py-2 px-4 rounded`}
            >
              {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};
export default Card;
