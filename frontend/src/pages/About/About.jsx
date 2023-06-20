import React from "react";
import alan from "../imgAbout/alan.jpeg";
import cesar from "../imgAbout/gabriel.jpeg";
import leonel from "../imgAbout/leonel.jpeg";
import javi from "../imgAbout/javi.jpeg";
import fer from "../imgAbout/fer.jpeg";
import tomas from "../imgAbout/tomas.jpeg";
import { useState } from "react";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [textToRead, setTextToRead] = useState("");

  const speakText = () => {
	const speechSynthesis = window.speechSynthesis;
	const speechUtterance = new SpeechSynthesisUtterance(textToRead);
	
	setIsPlaying(true);
	
	speechSynthesis.speak(speechUtterance);
	
	speechUtterance.onend = () => {
	  setIsPlaying(false);
	};
  };
  
  return (
    <div className="bg-[#111827] py-20 px-6"
    style={{ backgroundColor: "#161F2D" }}>
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">
          ¡Bienvenidos a <span className="text-yellow-300">Perisferia!</span>
        </h1>
      </div>
      <div className="max-w-xl mx-auto mb-12">
        <h2 className="text-xl text-center">
          En Perisferia, nos enorgullece ofrecerte una amplia gama de productos,
          accesorios y mucho más, todo en un solo lugar.
        </h2>
      </div>
      <main className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed">
          Nuestro equipo de programadores ha trabajado para crear esta
          plataforma intuitiva y fácil de usar, pensando en brindarte la mejor
          experiencia de compra en línea. Desde el principio, nos hemos enfocado
          en proporcionarte una selección diversa de productos de calidad.{" "}
          <br /> <br />
          Además, nuestro compromiso con la seguridad y la confianza es
          primordial. Hemos implementado rigurosas medidas de protección para
          garantizar que tus datos personales y compras estén seguros y
          protegidos en todo momento. <br /> <br />
          El equipo de programadores detrás de{" "}
          <span className="text-yellow-300">Perisferia</span> está compuesto por
          mentes creativas y apasionadas por la tecnología. Cada uno de ellos ha
          aportado su experiencia y conocimientos para dar vida a esta
          plataforma única. <br /> <br />
          Estamos comprometidos a brindarte un servicio excepcional. Siempre
          dispuestos a escuchar tus comentarios, responder tus preguntas y
          ayudarte en lo que necesites. Tu satisfacción es nuestra mayor
          recompensa. <br /> <br />
          Gracias por ser parte de{" "}
          <span className="text-yellow-300">Perisferia</span>. ¡Explora nuestra
          amplia selección de productos, accesorios y mucho más, y disfruta de
          una experiencia de compra en línea sin complicaciones!
        </p>
      </main>
  
      <div className="bg-[#111827] py-20 px-6" style={{ backgroundColor: "#161F2D" }}>
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">NUESTRO EQUIPO</h1>
        </div>
      </div>
  
      <div className="flex justify-center items-start">
        <div>
          <h1 className="text-6xl animate-pulse">BACK-END</h1>
        </div>
      </div>
  
      <br />
      <br />
  
      <div className="flex justify-center">
        {/* Carta de Alan */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={alan}
              alt="belgrano"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black">Alan Almeida</h2>
            <p className="text-gray-600 mb-2">davidalanalmeida@gmail.com</p>
            <p className="text-gray-600 mb-2">343523-0536</p>
            <p className="text-gray-600 mb-4">GitHub: AlanAimeida77</p>
            <p className="text-gray-600">Rol: Back-end</p>
          </div>
        </div>
        {/* Carta de Cesar */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105 text-black">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={cesar}
              alt="Foto de Leo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Gabriel Londero</h2>
            <p className="text-gray-600 mb-2">gabriellondero40@gmail.com</p>
            <p className="text-gray-600 mb-2">376469-4291</p>
            <p className="text-gray-600 mb-4">GitHub: gablon29</p>
            <p className="text-gray-600">Rol: Back-end</p>
          </div>
        </div>
        {/* Carta de Thomi  */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105 text-black">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={tomas}
              alt="Foto de Leo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Thomas Novella</h2>
            <p className="text-gray-600 mb-2">Thomasnovella12@gmail.com</p>
            <p className="text-gray-600 mb-2">1133142722</p>
            <p className="text-gray-600 mb-4">GitHub: Thomasnovella</p>
            <p className="text-gray-600">Rol: Back-end</p>
          </div>
        </div>{" "}
      </div>
  
      <br />
      <br />
  
      <div>
        <h1 className="flex justify-center text-6xl animate-bounce">
          FRONT-END
        </h1>
      </div>
  
      <br />
      <br />
  
      <div className="flex justify-center">
        {/* Carta de Leonel */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={leonel}
              alt="belgrano"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black">
              Leonel Aguilera
            </h2>
            <p className="text-gray-600 mb-2">leonelcarp142nuevo@gmail.com</p>
            <p className="text-gray-600 mb-2">2615591495</p>
            <p className="text-gray-600 mb-4">GitHub: Leonel42aguil</p>
            <p className="text-gray-600">Rol: Front-end</p>
          </div>
        </div>
  
        {/* Carta de Javi */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={javi}
              alt="belgrano"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black">Javier Diaz</h2>
            <p className="text-gray-600 mb-2">javiermauriciodiaz@gmail.com</p>
            <p className="text-gray-600 mb-2">3058620193</p>
            <p className="text-gray-600 mb-4">GitHub: Xaxier9015</p>
            <p className="text-gray-600">Rol: Front-end</p>
          </div>
        </div>
  
        {/* Carta de Fer */}
        <div className="w-64 bg-white rounded-lg shadow-lg mx-2 transform transition duration-500 hover:scale-105 text-black">
          <div className="w-full h-64 rounded-t-lg overflow-hidden">
            <img
              src={fer}
              alt="Foto de Leo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Fernando Luna</h2>
            <p className="text-gray-600 mb-2">ferfuego46lun@gmail.com</p>
            <p className="text-gray-600 mb-2">3804114694</p>
            <p className="text-gray-600 mb-4">GitHub: FeerLuna</p>
            <p className="text-gray-600">Rol: Front-end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
