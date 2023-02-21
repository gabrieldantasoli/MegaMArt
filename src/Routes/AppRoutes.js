import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '.';
import { AdminAddProducts, AdminContacts, AdminDeliverys, AdminEarnings, AdminProducts } from '../components';
import { Admin, Home, Login, PageNotFound, Register, Reset } from '../pages';

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

          <Route path="/admin/products" element={<PrivateRoutes />} >
            <Route path="/admin/products" element={<AdminProducts />} />
          </Route>

          <Route path="/admin/addproducts" element={<PrivateRoutes />} >
            <Route path="/admin/addproducts" element={<AdminAddProducts />} />
          </Route>

          <Route path="/admin/earnings" element={<PrivateRoutes />} >
            <Route path="/admin/earnings" element={<AdminEarnings />} />
          </Route>

          <Route path="/admin/contacts" element={<PrivateRoutes />} >
            <Route path="/admin/contacts" element={<AdminContacts />} />
          </Route>

          <Route path="/admin/deliverys" element={<PrivateRoutes />} >
            <Route path="/admin/deliverys" element={<AdminDeliverys />} />
          </Route>

          <Route path='/*' element={<PageNotFound />} />
        </Routes>
    )
}