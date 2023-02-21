import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { NotFound } from '../../assets';
import { selectIsLoggedIn } from '../../Redux/user/slice';

//IMPORTANDO O CSS
import './cart.css'

export default () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <section className='sectionContainer cartContainer'>
            {isLoggedIn ? 
            <div className='loggedCart'>
                logged cart
            </div> : 
            <div className='unloggedCart'>
                <Link className="tologin" to="/login">
                    <img src={NotFound} alt="login img" />
                    <p><span>Login </span> to access your cart!</p>
                </Link> 
            </div>}
        </section>
    )
}