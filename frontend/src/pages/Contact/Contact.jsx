import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import logoLight from '../../assets/images/logo-light.jpeg'
import ReviewsStore from "../../components/ReviewsStore/ReviewsStore";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      title: '¿Seguro que quieres enviar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(
            "service_6ar7zht",
            "template_9kgyz5r",
            form.current,
            "tbbTLTxwOaY7CkWAO"
          )
          .then((response) => {
            console.log(response);
            setIsSent(true);
            Swal.fire('¡Envío de correo exitoso!', '', 'success');
          })
          .catch((error) => console.log(error));
      }
    });
  };


  const validateForm = () => {
    const formElement = form.current;

    if (formElement.checkValidity()) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" 
    style={{ backgroundColor: "#161F2D" }}>
      <div className="max-w-4xl w-full px-6 mt-16" >
        <div className="text-center">
          <img src={logoLight} className="h-36 fixed top-20 right-8 rounded-full" />
          <h2 className="mt-8 text-4xl font-extrabold text-white">
            Contacto 📱
          </h2>
        </div>

        <div className="mt-8">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="grid gap-4 justify-center items-center">
              <div className="flex w-full ">
                <label
                  htmlFor="Nombre"
                  className="flex text-lg font-medium w-72 text-white"
                >
                  Ingresa tu nombre
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="mt-2 shadow rounded w-[400px] py-3 px-4 text-lg leading-tight  focus:shadow-outline text-black bg-inputs"
                  placeholder="Nombre"
                  required
                  onChange={validateForm}
                />
              </div>

              <div className="flex">
                <label
                  htmlFor="Apellido"
                  className="flex text-lg font-medium w-72 text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="mt-2 shadow rounded w-[400px] py-3 px-4 text-lg leading-tight  text-black bg-inputs"
                  placeholder="Correo Electrónico"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                  onChange={validateForm}
                />
              </div>

              <div className="flex">
                <label
                  htmlFor="Mensaje"
                  className="flex text-lg font-medium w-72 text-white"
                >
                  Mensaje
                </label>
                <textarea
                  name="user_message"
                  className="mt-2 shadow rounded w-[400px] py-3 px-4 text-lg leading-tight   text-black bg-inputs"
                  placeholder="Escribe aquí"
                  maxLength={200}
                  required
                  onChange={validateForm}
                />
              </div>
            </div>

            <div className=" flex items-center justify-center border-2  rounded-3xl py-4  mx-20 border-gray-300  ">
              <button
                type="submit"
                className=" py-4 flex items-center justify-center w-80 bg-header hover:bg-header/80 focus:bg-header text-white text-xl font-medium rounded"
                disabled={!isFormValid || isSent}
                onClick={sendEmail}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <ReviewsStore />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Contact;
