import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated, isLoading, user } = useAuth0();
  const { create_user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    const storedSession = localStorage.getItem("authSession");
    if (storedSession && !isAuthenticated && !isLoading) {
      const session = JSON.parse(storedSession);
      loginWithPopup({
        screen_hint: "signup",
        ...session,
      });
    }
  }, [isAuthenticated, isLoading, loginWithPopup]);
  const handleLogin = async () => {
	try {
	  const authResult = await loginWithPopup();
	  if (authResult && authResult.user) {
		const { user } = authResult;
		localStorage.setItem("authSession", JSON.stringify(user));
  
		// Llamar a la función create_user del contexto para crear el usuario
		create_user(user); // Asegúrate de pasar los datos correctos del usuario
	  } else {
		console.error("No user data found in the authentication result");
	  }
	} catch (error) {
	  console.error("Error during login:", error);
	}
  };
  return <button onClick={handleLogin}>LogIn</button>;
};

export default LoginButton;