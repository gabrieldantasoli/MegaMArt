import React from 'react';
import { NavLink } from 'react-router-dom';

//IMPORTANDO O CSS
import './actions.css'

export default () => {

    return (
        <div className='actions'>
            <h1>Admin Page</h1>
            <nav>
                <NavLink to="/admin/products" className={({isActive}) => (isActive ? "adminLinkActive" : "")}>Products</NavLink>
                <NavLink to="/admin/addproducts" className={({isActive}) => (isActive ? "adminLinkActive" : "")}>Add Products</NavLink>
                <NavLink to="/admin/earnings" className={({isActive}) => (isActive ? "adminLinkActive" : "")}>Earnings</NavLink>
            </nav>
            
        </div>
    )
}