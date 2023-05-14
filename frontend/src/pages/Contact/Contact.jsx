import React from 'react'

const Contact = () => {
  return (
    <div className=' text-white mt-[200px] flex justify-center items-center font-bold'>

      <section className='flex flex-col text-center my-3'>

        <h1 className='text-3xl'>Contacto</h1> 
        <p>Por favor, completa el siguiente formulario para contactarnos.</p>
        <form className='flex flex-col bg-inherit gap-2'>
          <label htmlFor="name">Nombre:</label>
          <input className='rounded-lg h-12' type="text" id="name" name="name" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input className='rounded-lg h-12' type="email" id="email" name="email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea className='rounded-lg h-32'id="message" name="message" required></textarea>

          <button className='bg-primary w-full h-10 rounded-lg ' type="submit">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
