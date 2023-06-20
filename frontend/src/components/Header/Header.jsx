import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import Search from "../Search/Search";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import Cart from "../Cart/Cart";
import logo from "../../assets/images/logo-dark.jpeg";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState(null);
  let isAdmin = "";
  userData ? (isAdmin = userData.is_admin) : null;
  const location = useLocation();
  const showSearch = location.pathname === "/store/";

  useEffect(() => {
    const fetchId = async () => {
      if (user && user.email) {
        try {
          const response = await axios.get(
            `https://perisferiastore-production.up.railway.app/admin/user/${user.email}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      }
    };

    if (user && user.email) {
      fetchId();
    }
  }, [user]);

 return (
  <div className="dark h-[150px] flex justify-around px-3 fixed top-0 left-0 md:h-[60px] w-full items-center font-bold bg-gradient-to-r from-gray-800 to-gray-600 rounded-b-lg z-50">
    <Link to="/">
      <img
        className="h-[60px] fixed top-0 left-1 opacity-90 rounded-full"
        src={logo}
        alt="logo"
      />
    </Link>
    <ul className="flex justify-around md:flex text-2xl md:m-8 md:gap-6">
      <li>
        <Link to="/"> Inicio </Link>
      </li>
      <li>
        <Link to="/store/"> Tienda </Link>
      </li>
      <li>
        <Link to="/about"> Nosotros </Link>
      </li>
      <li>
        <Link to="/contact"> Contacto</Link>
      </li>
      {isAuthenticated && (
        <li>
          <Link to="/favorite"> Favorite</Link>
        </li>
      )}

      {/* <li>{isAdmin ? <Link to="/admin">Dashboard</Link> : null}</li> */}
      <li>
        <Link to="/admin">Dashboard</Link>
      </li>
    </ul>
    <div className="flex w-[500px] items-center justify-center">
      <ul className="px-6 md:flex justify-around items-center gap-4 md:gap-8 text-3xl">
        <li>{showSearch && <Search />}</li>
        <div className="flex justify-end gap-2 px-1">
          <li>{user ? <Cart userData={userData} /> : null}</li>
          <div className="flex justify-end gap-2 px-1 w-[250px] relative">
            <li>
              <ProfileDropdown />
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
);

};

export default Header;
