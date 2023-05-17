import React from "react";
import mouse from "../imgAbout/mouse.jpeg"

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="text-center">
          <img
            src={mouse}
            alt="not fun"
            className="h-16 w-auto mx-auto"
          />
          <h2 className="mt-8 text-4xl font-extrabold text-white">
            Contacto 📱
          </h2>
        </div>

        <div className="mt-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="Nombre"
                  className="block text-lg font-medium text-white"
                >
                  Ingresa tu nombre
                </label>
                <input
                  type="text"
                  className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline text-white"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="Apellido"
                  className="block text-lg font-medium text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="text"
                  className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline text-white"
                  placeholder="Correo Electrónico"
                />
              </div>
              {/*class="flex flex-col items-cente rjustify-center h-screen*/}

              <div>
                <label
                  htmlFor="Mensaje"
                  className="block text-lg font-medium text-white"
                >
                  Mensaje
                </label>
                <textarea
                  className="mt-2 shadow appearance-none border rounded w-full py-3 px-4 text-lg leading-tight focus:outline-none focus:shadow-outline text-white w-74 h-64 "
                  placeholder="Escribe aquí"
                />
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="mt-4 w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-white text-xl font-medium rounded focus:outline-none focus:bg-yellow-300"
              >
                Enviar
              </button>
            </div>

            <p className="mt-4 text-lg text-white">
              ¿Algún problema?{" "}
              <a className="font-medium text-yellow-300 hover:text-sky-500">
                Info aquí
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};




export default Contact;
