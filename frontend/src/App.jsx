import React from "react";
import { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Detail from "./components/detail/Detail";
import ProductForm from './admin/components/CreateProduct/ProductForm';
import EditProduct from './admin/pages/Products/EditProduct';
import Products from './admin/pages/Products/Products';
import Main from './admin/components/Main/Main';
import Users from './admin/pages/Users/Users';
import { CreateUserForm } from './admin/components/CreateUser/CreateUserForm';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { UserContext } from './context/userContext';
import { useAuth0 } from '@auth0/auth0-react';
import EditUser from './admin/pages/Users/EditUser';
import Reviews from './components/Reviews/Reviews';

function App() {
	const { user, isAuthenticated } = useAuth0();

	return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Detail />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/reviews' element={<Reviews />} />


        <Route element={<ProtectedRoutes user={user} />}>

          <Route path='/admin/' element={<Main />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/products/create' element={<ProductForm />} />
          <Route path='/admin/products/edit/:id' element={<EditProduct />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/users/create' element={<CreateUserForm />} />
          <Route path='/admin/users/edit/:id' element={<EditUser />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
