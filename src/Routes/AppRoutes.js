import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, PageNotFound, Register, Reset } from '../pages';
import Cart from '../pages/cart';
import Contact from '../pages/Contact';

export default () => {

    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
    )
}