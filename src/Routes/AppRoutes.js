import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Reset } from '../pages';
import Contact from '../pages/Contact';

export default () => {

    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}