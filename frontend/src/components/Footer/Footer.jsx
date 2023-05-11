import React from 'react'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='flex justify-center text-2xl mt-4'>
      <div className='flex-col '>
        <h3> Perisferia</h3>
        <div className='flex items-center' >
          <button> <MdFacebook /> </button>
          <button> <AiFillInstagram /> </button>
          <button> <AiFillTwitterCircle /> </button>
          <button> <IoLogoWhatsapp /> </button>

        </div>
      </div>
    </div>
  )
}

export default Footer
