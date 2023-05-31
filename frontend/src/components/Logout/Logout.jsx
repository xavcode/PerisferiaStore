import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    Swal.fire({
      title: "Cerrar sesión",
      text: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout({ logoutParams: { returnTo: window.location.origin } });
      } 
    });
  };

  return (
    // <button className="block px-4 py-2 text-xl text-gray-800 hover:bg-gray-200" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    //   Logout
    // </button>
    <button className="block px-4 py-2 text-xl text-gray-800 hover:bg-gray-200" onClick={handleLogout}>
    Logout
  </button>
  );
};

export default LogoutButton;