import React from "react";
import { useState } from "react";
import leo from "../bubbleWsp/leonelee.svg";

export default function BubbleWsp() {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };
  return (
    <div className="fixed right-0 bottom-0 h-20">
      <div className="flex items-center">
        <a
          href="https://wa.me/542615591495?text=¿Buscas algo en particular? Estoy aquí para responder a tus preguntas y brindarte asistencia personalizada de parte de Perisferia!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-800 text-white rounded-lg p-3 space-x-3 hover:bg-gray-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <img src={leo} alt="WhatsApp" className="h-8 w-8 rounded-full" />
        </a>
        {showMessage && (
          <div className="bg-white text-black p-3 rounded-md absolute right-14" style={{ transform: "translate(-50%, -50%)" }}>
            ¡Contáctanos en WhatsApp!
          </div>
        )}
      </div>
    </div>
  );
}








