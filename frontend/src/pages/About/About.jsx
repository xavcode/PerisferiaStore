import React from 'react'

const About = () => {

  return (
    <div className=' flex flex-col text-white mt-[100px] p-6 '>
      <h1 className='flex justify-center text-9xl mb-4'>Perisferia</h1>
      <h2 className='text-4xl mt-5 mb-7 text-center'>
        Bienvenidos en Perisferia te proveemos de los mejores periféricos y accesorios para que puedas llevar tus juegos al siguiente nivel.
      </h2>
      <main className='mt-3 text-justify gap-16 columns-1 sm:columns-2 md:columns-3 text-2xl'>

        <p>Nuestro equipo está compuesto por apasionados gamers que entienden la importancia de tener productos de calidad. Es por eso que trabajamos con las marcas más reconocidas del mercado para ofrecerte lo mejor.</p>
        <p>No importa si eres un jugador casual o profesional, en [Nombre de la tienda] tenemos lo que necesitas. Desde teclados mecánicos hasta auriculares con sonido envolvente, estamos seguros de que encontrarás lo que buscas.</p>
        <p>No sólo nos enfocamos en la calidad de los productos que ofrecemos, sino también en el servicio al cliente. Queremos que tu experiencia de compra sea lo más fácil y satisfactoria posible, por eso nuestro equipo está siempre dispuesto a ayudarte en lo que necesites.</p>
        <p>En resumen, en [Nombre de la tienda] no sólo encontrarás los mejores productos de gaming del mercado, sino también un equipo dedicado a brindarte la mejor experiencia de compra. ¡Gracias por elegirnos y esperamos que disfrutes al máximo de tus juegos!</p>

      </main>
    </div>
  )
}

export default About
