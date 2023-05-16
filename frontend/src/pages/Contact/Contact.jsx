import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_6ar7zht', 'template_9kgyz5r', form.current, 'tbbTLTxwOaY7CkWAO')
      .then(response => console.log(response))
      .catch(error =>console.log(error))
  }
  
  return (
    <div className=' text-white mt-[200px] flex justify-center items-center font-bold'>

      <section className='flex flex-col text-center my-3'>

        <h1 className='text-3xl'>Contacto</h1> 
        <p>Por favor, completa el siguiente formulario para contactarnos.</p>
        <form className='flex flex-col bg-inherit gap-2' ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Nombre:</label>
          <input className='rounded-lg h-12' type="text" id="user_name" name="user_name" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input className='rounded-lg h-12' type="email" id="user_email" name="user_email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea className='rounded-lg h-32'id="user_message" name="user_message" required></textarea>

          <button className='bg-primary w-full h-10 rounded-lg ' type="submit">Enviar</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
