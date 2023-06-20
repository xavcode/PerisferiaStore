import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CardsBottom from "../../components/CardsBottom/CardsBottom";
import BubbleWsp from "../../components/bubbleWsp/BubbleWsp";

const Home = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const images = [
    "https://logg.api.cygnus.market/static/logg/Global/Auriculares%20Logitech%20G533%207.1%20DTS%20Wireless/3ce22967d7f54ce39b0c21f42af109a2.png",
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/574/495/products/kit-redragon-s101-4-en-1-71-6b7ce0025f5b4d4be716151832456717-480-0.jpg",
    "https://topesdegama.com/app/uploads-topesdegama.com/2022/08/Monitores-curvos-gaming-para-PC.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (user) {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(
            "https://perisferiastore-production.up.railway.app/users"
          );
          const usuarios = response.data;
          const usuario = usuarios.filter((item) => item.mail === user.email);

          if (!usuario.length) {
            const userData = {
              name: user.given_name,
              last_name: user.family_name,
              username: user.nickname,
              phone: (Math.floor(Math.random() * 10000000) + 1).toString(),
              mail: user.email,
              address: null,
              password: (Math.floor(Math.random() * 10000000) + 1).toString(),
              img: user.picture,
            };

            try {
              await axios.post(
                "https://perisferiastore-production.up.railway.app/user",
                userData
              );
            } catch (error) {
              console.error("Error al crear el usuario:", error);
            }
          }
        } catch (error) {
          console.error("Error al obtener los usuarios:", error);
        }
      };

      fetchUsers();
    }
  }, [user]);

  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white grid w-screen h-screen">
      <main className="w-full flex justify-center items-center">
        <div className="flex items-center justify-center mt-12 p-1">
          <div className="flex w-[90%] gap-3 rounded-xl text-center items-end justify-center">
            <div className="min-h-[450px] flex max-w-[450px] min-w-[450px] flex-col mx-3 justify-center items-center animate-fade-in-up">
              <br />
              <br />
              <p className="text-4xl font-bold leading-10 mb-10">
                Descubre una amplia selección de productos y accesorios.
              </p>
              <p className="text-2xl font-semibold leading-8 max-w-2xl">
                Explora increíbles ofertas y encuentra todo lo que necesitas
                para tu estilo de vida.
              </p>
              <p className="text-primary font-semibold text-3xl mt-2">
                Haz de las compras una experiencia emocionante y descubre un
                mundo de posibilidades en nuestra tienda en línea.
              </p>
              <div className="flex justify-center mt-8 space-x-4">
                <a
                  href="https://www.facebook.com/tu_pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com/tu_pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/tu_pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <img
                className="min-w-[500px] min-h-[500px] max-h-[600px] max-w-[600px] rounded-bl-[40%] rounded-tr-[40%] shadow-lg mt-5 animate-scale-in"
                src={images[currentImage]}
                alt="Slide"
              />
            </div>
          </div>
        </div>
      </main>

      {/* <CardsBottom /> */}

      <section className="bg-[#1A2331] py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Testimonios de nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red p-4 rounded shadow-md transform transition-transform hover:scale-105">
              <p className="text-lg mb-4">
                "Excelente atención al cliente y productos de alta calidad.
                ¡Recomendado!"
              </p>
              <p className="font-bold">- Juan Pérez</p>
            </div>
            <div className="bg-red p-4 rounded shadow-md transform transition-transform hover:scale-105">
              <p className="text-lg mb-4">
                "Me encanta la variedad de productos que ofrecen. Siempre
                encuentro lo que necesito."
              </p>
              <p className="font-bold">- María Gómez</p>
            </div>
          </div>
        </div>
      </section>
      <CardsBottom />
      <BubbleWsp />
    </div>
  );
};

export default Home;
