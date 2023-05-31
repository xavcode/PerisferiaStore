import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithPopup, isAuthenticated, isLoading } = useAuth0();

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
		const { user } = await loginWithPopup();
		localStorage.setItem("authSession", JSON.stringify(user));
	};

	return <button onClick={handleLogin}>LogIn</button>;
};

export default LoginButton;
