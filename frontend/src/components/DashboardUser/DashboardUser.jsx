import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const DashboardUser = () => {
    const { user } = useAuth0();
  const [userData, setUserData] = useState({
    mail: user.email,
    name: user.given_name,
    last_name: user.family_name,
    username: '',
    address: '',
    img: user.picture? user.picture: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar otras acciones con ellos
    // aca tengo que hacer un dispatch al post  de user
    console.log(userData);
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={userData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="img"
          value={userData.img}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>  
    </form>
  );
};

export default DashboardUser;