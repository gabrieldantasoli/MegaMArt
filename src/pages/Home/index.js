import React from 'react';
import { useSelector } from 'react-redux';
import { allProducts } from '../../Redux/products/slice';

//IMPORTANDO O CSS
import './home.css';

export default () => {

    const products = useSelector(allProducts);

    return (
        <section className='sectionContainer home'>
            {JSON.stringify(products)}
        </section>
    )
}