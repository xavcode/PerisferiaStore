import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Detail from './components/detail/Detail';


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/store' element={<Store />} />
        <Route path='/store/:id' element={<Detail/>}/>
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
