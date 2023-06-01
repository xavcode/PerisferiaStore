import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CardsBottom from "../../components/CardsBottom/CardsBottom";
import Profile from "../../components/Profile/Profile";
import { DashboardUserBuyer } from "../../components/DashboardUserBuyer/DashboardUserBuyer";
import BubbleWsp from "../../components/bubbleWsp/BubbleWsp";

const Home = () => {
  const images = [
    "https://pbs.twimg.com/media/D2C4oEIX4AAd3dp.jpg",
    "https://cdn.wallapop.com/images/10420/e4/0c/__/c10420p853260719/i3008261781.jpg?pictureSize=W640",
    "https://as1.ftcdn.net/v2/jpg/04/51/95/20/1000_F_451952066_Whal7MJnLU0dKyHYFhTjVzBGYHV1BtxW.jpg",
    "https://tech4gamers.com/wp-content/uploads/2022/03/RTX-30-Series-and-AMD-6000-Series-Price-Drop-1.jpg",
    "https://ergoplay.com.co/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-09-at-16.44.48.jpeg",
    "https://nissei.com/media/wysiwyg/HERO-1_7.jpg",
  ];

  const { isAuthenticated, isLoading, user } = useAuth0();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if(user){
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://perisferiastore-production.up.railway.app/users');
        const usuarios = response.data;
        const usuario = usuarios.filter((item) => item.mail === user.email);

        if (!usuario.length) {
          const userData = {
            name: user.given_name,
            last_name: user.family_name,
            username: user.nickname,
            phone:  (Math.floor(Math.random() * 10000000) + 1).toString(),
            mail: user.email,
            address: null,
            password: (Math.floor(Math.random() * 10000000) + 1).toString(),
            img: user.picture
          };
    
          try {
            await axios.post("https://perisferiastore-production.up.railway.app/user", userData);
          } catch (error) {
            console.error("Error al crear el usuario:", error);
          }
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
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
    <div className="text-white grid w-screen h-screen">
      <main className="w-full flex justify-center items-center">
        <div className="flex items-center justify-center mt-12  p-1 ">
          <div className="flex w-[90%] gap-3  rounded-xl text-center items-end justify-center">
            <div className="min-h-[450px]flex max-w-[450px] min-w-[450px] flex-col mx-3 justify-center items-center">
              <p className=" text-2xl font-bold leading-6 text-white mb-10 ">
                Descubre una amplia selección de productos y accesorios.
              </p>
              <p className="  text-2xl font-semibold text-white leading-10 max-w-285 ">
                Explora increíbles ofertas y encuentra todo lo que
                necesitas para tu estilo de vida.
              </p>
              <p className="  text-primary font-semibold text-3xl mt-2 ">
                Haz de las compras una experiencia emocionante y descubre un mundo de posibilidades en nuestra tienda en línea.
              </p>
            </div>

            <div>
              <img
                className=" min-w-[400px] min-h-[400px] max-h[400px] max-w-[400px]  rounded-bl-[40%] rounded-tr-[40%] shadow-lg mt-5 "
                src={images[currentImage]}
                alt="Slide"
              />
            </div>
          </div>
        </div>
      </main>
      <BubbleWsp />
      {/* <Profile/> */}
      {/* <DashboardUser/> */}
      {/* <DashboardUserBuyer/> */}
      <CardsBottom />
    </div>
  );
};

export default Home;
