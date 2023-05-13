import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import homeImage from "../../assets/images/home-image.jpg";

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
    }, 12000);

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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative">
        <p>Encuentra tu compañero perfecto en nuestra tienda en línea. Descubre una amplia selección de productos y accesorios que harán que cada día sea especial. Explora nuestras increíbles ofertas y encuentra todo lo que necesitas para tu estilo de vida. ¡Haz de las compras una experiencia emocionante y descubre el mundo de posibilidades que tenemos para ti en nuestra tienda en línea!</p>
        <img
          className="w-full max-w-2xl rounded-lg shadow-lg"
          src={images[currentImage]}
          alt="Slide"
        />
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
          onClick={previousImage}
        >
          &#8249;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
          onClick={nextImage}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Home;
