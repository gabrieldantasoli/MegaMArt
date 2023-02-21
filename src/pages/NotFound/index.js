import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../../assets';

//IMPORTANDO O CSS
import './notFound.css'

export default () => {

    return (
        <section className='sectionContainer pnf'>
            <img src={NotFound} alt="Page not found image" />
            <p>Error 404 : Page Not Found!</p>
            <Link to="/">
                Back to Home
            </Link>
        </section>
    )
}