import React, { useState } from "react";
import { useId } from "react";
import { useCart } from "../../hooks/useCart";
import { BsFillTrash3Fill, BsCartX } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

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
	removeFromCart,
}) {
	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			decreaseQuantity();
		}
	};

	const handleIncreaseQuantity = () => {
		addToCart();
	}


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
									onClick={removeFromCart}>
									<BsFillTrash3Fill className="text-gray-500 hover:text-red-500 transition" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-x-2 h-[36px] text-sm">
						<div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-700 font-medium">
							<div
								className="flex-1 h-full flex justify-center items-center cursor-pointer"
								onClick={handleDecreaseQuantity}>
								<IoMdRemove />
							</div>
							<div className="h-full flex justify-center items-center px-2">
								{quantity}
							</div>
							<div
								className="flex-1 h-full flex justify-center items-center cursor-pointer"
								onClick={handleIncreaseQuantity}>
								<IoMdAdd />
							</div>
						</div>
						<div className="flex-1 flex items-center justify-around text-gray-700">
							{price}
						</div>
						<div className="flex-1 flex justify-end items-center font-medium text-gray700">
							Precio: {price * quantity}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Cart() {
	const cartCheckboxId = useId();
	const { cart, clearCart, addToCart, decreaseQuantity, removeFromCart } = useCart();
	const [isCartOpen, setCartOpen] = useState(false);

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
		try {
		  const response = await axios.post('http://localhost:3001/payment', {
			cart: cart, // Pasar los productos en el carrito
			totalPrice: totalPrice // Pasar el total del precio
		  });
		  console.log("Pago correcto", response);
		  console.log(response.data);
		  // Redireccionar al comprador al init_point de Mercado Pago
		  window.location.href = response.data.init_point;
		} catch (error) {
		  console.error("Pago no realizado", error);
		  // Manejar el error en caso de que ocurra algún problema durante el pago
		}
	  };

	return (
		<div>
			<div>
				<div className="relative">
					<div
						className="cursor-pointer flex relative"
						onClick={handleCartToggle}>
						<AiOutlineShoppingCart className="mt-2 " />
						{cart.length > 0 && (
							<span className="absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-sm">
								{cart.length}
							</span>
						)}
					</div>

					<input id={cartCheckboxId} type="checkbox" hidden />
					{isCartOpen && (
						<div
							className="cart-overlay fixed inset-0 bg-black opacity-50"
							onClick={handleCartToggle}
						/>
					)}
					<div
						className={`cart bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-md p-4 overflow-y-auto ${
							isCartOpen ? "" : "hidden"
						}`}
						style={{ maxHeight: "80vh" }}>
						<div className="flex justify-between mb-4">
							<AiOutlineArrowLeft
								className="text-xl cursor-pointer text-gray-700"
								onClick={handleCartToggle}
							/>
							<h3 className="text-sm uppercase font-medium max-w-[1200px] text-black ml-6">
								Carrito
							</h3>
							<div className="text-xl cursor-pointer" onClick={handleClearCart}>
								<BsCartX className="text-gray-500 hover:text-red-500 transition" />
							</div>
						</div>
						<ul>
							{cart.map(product => (
								<CartItem
									key={product.id}
									addToCart={() => addToCart(product)}
									decreaseQuantity={() => decreaseQuantity(product)}
									removeFromCart={() => removeFromCart(product)}
									{...product}
								/>
							))}
						</ul>
						{cart.length === 0 && (
							<p className="text-center text-gray-500">Tu Carrito está vacío</p>
						)}
						{cart.length > 0 && (
							<>
								<p className="text-right font-medium text-gray-700">
									Total: {totalPrice} <button className="bg-red-500">Comprar</button>
								</p>

								{/* Resto del contenido */}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}