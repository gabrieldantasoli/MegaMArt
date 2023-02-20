import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export default () => {

    return (
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    )
}