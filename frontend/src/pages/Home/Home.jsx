import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai"; //AiOutlineDollar
import { AiFillLock } from "react-icons/ai"; //AiOutlineUnlock
import { AiFillStar } from "react-icons/ai"; //AiOutlineStar
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "../Home/Home.css";

const Home = () => {
  const images = [
    "https://as1.ftcdn.net/v2/jpg/02/28/19/26/1000_F_228192611_akMH8f6lbZ2NedZluGMgZCco0aKRKtGk.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/51/95/20/1000_F_451952066_Whal7MJnLU0dKyHYFhTjVzBGYHV1BtxW.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/16/49/90/1000_F_316499078_3naGY4WSJIOZqKaMrYaJl2Vknr8NFzc9.jpg",
    "https://as2.ftcdn.net/v2/jpg/00/60/95/33/1000_F_60953364_ZBxSUGv9CebWIH06YF9cTnlALHNpSSxs.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="text-left">
      <main className="flex justify-between gap-20 max-w-2xl mx-auto">
        <div className="max-w-350 mt-20 relative">
          <div className="flex items-start">
            <div>
            <h1 className="font-nunito text-6xl font-extrabold leading-13 tracking-0.5% text-black mr-20">
              Descubre una amplia selección de productos y accesorios.
            </h1>
            {/* <h5>aa</h5> */}
            <p className="text-15 font-semibold text-gray-600 leading-5 max-w-285 mb-8">
              Explora increíbles ofertas y encuentra todo lo que
              necesitas para tu estilo de vida.<h1 className="text-red-200">
                Haz de las compras una
              experiencia emocionante y descubre un mundo de posibilidades en
              nuestra tienda en línea.</h1> 
              </p> 
            </div>
            <img
              className="w-full h-[600px] w-[600px] h-auto rounded-lg shadow-lg object-cover "
              src={images[currentImage]}
              alt="Slide"
              />
          </div>
          {/* <button
            className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={previousImage}
            >
            &#8249;
            </button>
            <button
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            onClick={nextImage}
            >
            &#8250;
          </button> */}
        </div>
      </main>

      {/*Cartas Inferor de la pagina*/}

      <div className="flex justify-between max-w-5xl mx-auto mt-16 px-1">
        <div className="flex items-center flex-col gap-4 h-46 w-46 p-1 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-gray-500">
          <h1 className="text-5xl text-gray-800" alt="icon">
            <AiFillStar />
          </h1> 
          <p className="text-sm font-semibold text-gray-800">
            Encuentra productos <br /> perfectos para ti.
          </p>  
        </div>

        <div className="flex items-center flex-col gap-4 h-46 w-46 p-1 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-gray-500">
          <h1 className="text-5xl text-gray-800" alt="icon">
            <AiFillCustomerService />
          </h1>
          <p className="text-sm font-semibold text-gray-800">
            Transforma tus deseos en realidad.
          </p>
        </div>

        <div className="flex items-center flex-col gap-4 h-46 w-46 p-1 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-gray-500">
          <h1 className="text-5xl text-gray-800" alt="icon">
            <AiFillDollarCircle />
          </h1>
          <p className="text-sm font-semibold text-gray-800">
            Descuentos exclusivos 30% al 50%.
          </p>
        </div>

        <div className="flex items-center flex-col gap-4 h-46 w-46 p-1 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-gray-500">
          <h1 className="text-5xl text-gray-800" alt="icon">
            <AiOutlineFundProjectionScreen />
          </h1>
          <p className="text-sm font-semibold text-gray-800">
            Todo lo que buscas en un solo sitio.
          </p>
        </div>

        <div className="flex items-center flex-col gap-4 h-46 w-46 p-1 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl bg-gray-500">
          <h1 className="text-5xl text-gray-800" alt="icon">
            <AiFillLock />
          </h1>
          <p className="text-sm font-semibold text-gray-800">
            Tu <br /> compra Segura.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
