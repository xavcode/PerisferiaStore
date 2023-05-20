import React from "react";
import { useEffect } from "react";
import { useState } from "react";


import CardsBottom from "../../components/CardsBottom/CardsBottom";
import LoginButton from "../../components/Login/Login";
import LogoutButton from "../../components/Logout/Logout";
import Profile from "../../components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const images = [
    "https://pbs.twimg.com/media/D2C4oEIX4AAd3dp.jpg",
    "https://cdn.wallapop.com/images/10420/e4/0c/__/c10420p853260719/i3008261781.jpg?pictureSize=W640",
    "https://as1.ftcdn.net/v2/jpg/04/51/95/20/1000_F_451952066_Whal7MJnLU0dKyHYFhTjVzBGYHV1BtxW.jpg",
    "https://tech4gamers.com/wp-content/uploads/2022/03/RTX-30-Series-and-AMD-6000-Series-Price-Drop-1.jpg",
    "https://ergoplay.com.co/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-09-at-16.44.48.jpeg",
    "https://nissei.com/media/wysiwyg/HERO-1_7.jpg",
  ];

  const { isAuthenticated, isLoading } = useAuth0()

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

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div className="text-white grid ">
      <main className="w-[90%]">
        <div className="flex items-center justify-center mt-20 mx-10 p-3 tracking-wider ">
          <div className="flex w-[80%] text-center p-8 rounded-xl items-center justify-center">
            <div className="flex flex-col justify-around items-center mx-5">
              <p className=" text-5xl font-bold leading-13 text-white mb-10 ">
                Descubre una amplia selección de productos y accesorios.
              </p>
              <p className="text-4xl font-semibold text-white leading-10 max-w-285 ">
                Explora increíbles ofertas y encuentra todo lo que
                necesitas para tu estilo de vida. </p>
              <p className="text-yellow-300 font-semibold text-4xl mt-9 ">
                Haz de las compras una
                experiencia emocionante y descubre un mundo de posibilidades en
                nuestra tienda en línea.</p>

            </div>

            <br />
            <br />
            
            <img
              className="h-[600px] w-[600px]  rounded-b-full rounded-t-3xl shadow-lg object-cover "
              src={images[currentImage]}
              alt="Slide"
            />
          </div>
        </div>
      </main>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      <Profile/>
      <CardsBottom />
    </div>
  );
}


export default Home;
