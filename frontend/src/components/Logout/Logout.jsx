import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="block px-4 py-2 text-xl text-gray-800 hover:bg-gray-200" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Logout
    </button>
  );
};

export default LogoutButton;