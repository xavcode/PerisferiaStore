import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const EditUser = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    username: '',
    address: '',
    password: '',
    mail: '',
    img: '',
    phone: '',
    isAdmin: false,
  });

  return (
      <div></div>
    )
}
export default EditUser