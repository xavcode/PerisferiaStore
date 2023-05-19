import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-shadow">
			<div className="w-96 p-6 shadow-lg bg-white rounded-md">
				<h1 className="text-4xl block font-semibold text-black text-center">
					<FaUserAlt className="inline-block align-middle text-2xl mr-2" />
					Login
				</h1>
				<hr className="mt-3" />
				<div className="mt-3">
					<label
						htmlFor="username"
						className="block text-base mb-2 bg text-black">
						Nombre de Usuario
					</label>
					<input
						type="text"
						id="username"
						className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
						placeholder="Ingrese Nombre de Usuario"
					/>
				</div>
				<div className="mt-3">
					<label htmlFor="password" className="block text-base mb-2 text-black">
						Contraseña
					</label>
					<input
						type="password"
						id="password"
						className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
						placeholder="Ingrese Contraseña"
					/>
				</div>
				<div className="mt-3 flex justify-between items-center text-black">
					<div>
						<input type="checkbox" />
						<label>Recuérdame</label>
					</div>
					<div>
						<Link to="#" className="text-indigo-800 font-semibold">
							¿Has olvidado tu contraseña?
						</Link>
					</div>
				</div>
				<div className="mt-5">
					<button
						type="submit"
						className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
						<i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Ingresar
					</button>
				</div>
				<div className="mt-3 text-center text-black">
					<p>
						¿No estás registrado?{" "}
						<Link to="/register" className="text-indigo-800 font-semibold">
							Regístrate
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
