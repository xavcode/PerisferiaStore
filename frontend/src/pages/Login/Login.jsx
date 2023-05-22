import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-shadow">
			<div className="w-98 p-6 shadow-lg bg-white rounded-md border-2 border-gray-600 ">
				<h1 className="text-4xl block font-semibold text-black text-center">
					<FaUserAlt className="inline-block align-middle text-2xl mr-2" />
					Login
				</h1>
				<hr className="mt-5" />
				<div className="mt-6">
					<input
						type="text"
						id="username"
						className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
						placeholder="User@mail.com"
					/>
				</div>
				<div className="mt-6">
					<input
						type="password"
						id="password"
						className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 bg-white text-black"
						placeholder="Ingrese Contraseña"
					/>
				</div>
				<div className="mt-5 flex justify-between items-center text-black">
					<div>
						<input type="checkbox" />
						<label>Recuérdame</label>
					</div>
					<div>
						<Link to="#" className="text-blue-500 font-semibold peer-hover:bg-blue-700 ">
							¿Has olvidado tu contraseña?
						</Link>
					</div>
				</div>
				<div className="mt-5">
					<button
						type="submit"
						className="border-2 border-blue-500 bg-blue-500 text-white py-1 w-full rounded-md  hover:bg-blue-700 font-semibold">
						<i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Ingresar
					</button>
				</div>
				<div className="mt-3 text-center text-black">
					<p>
						¿No estás registrado?{" "}
						<Link to="/register" className="text-blue-500 font-semibold">
							Regístrate
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
