import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductsContainer } from '../../components';
import { allProducts } from '../../Redux/products/slice';

//IMPORTANDO O CSS
import './home.css';

export default () => {

    const products = useSelector(allProducts);


    return (
        <section className='sectionContainer home'>
             <Splide id='slider' data-splide='{"type":"loop","perPage":1}' >
                <SplideSlide className='slider one' >
                    <div className="shadow"></div>
                    <h1>Delicious Pizzas Made with High-Quality Ingredients</h1>
                    <p>Looking for the perfect pizza that will satisfy your cravings? Look no further! Our pizzas are made with only the best and freshest ingredients, carefully selected to ensure a delicious and unforgettable experience.</p>
                </SplideSlide>
                <SplideSlide className='slider two'>
                    <div className="shadow"></div>
                    <h1>Mouth-Watering Hamburgers with an Array of Varieties</h1>
                    <p>Are you on the hunt for a hamburger that will satisfy your cravings? Look no further! Our hamburgers are made with only the freshest and highest-quality ingredients, crafted to perfection to deliver a taste sensation that will leave you wanting more.</p>
                </SplideSlide>
                <SplideSlide className='slider three'>
                    <div className="shadow"></div>
                    <h1>Savour the Taste of Traditional Delicacies</h1>
                    <p>Experience the authentic taste of traditional cuisine like never before! Our carefully curated menu offers a range of delicious dishes that have been passed down through generations, each with a unique story and flavour profile that will transport you to another time and place.</p>
                </SplideSlide>
                <SplideSlide className='slider four'>
                    <div className="shadow"></div>
                    <h1>Irresistible Desserts That Will Satisfy Your Sweet Tooth</h1>
                    <p>If you have a sweet tooth that just won't quit, you've come to the right place! Our mouth-watering desserts are made with the finest and freshest ingredients, crafted to perfection to deliver a taste sensation that will leave you wanting more.</p>
                </SplideSlide>
                <SplideSlide className='slider five'>
                    <div className="shadow"></div>
                    <h1>Satisfy Your Cravings with Our Out-of-This-World Frozen Treats</h1>
                    <p>Looking for a frozen treat that will take your taste buds to another planet? Look no further! Our frozen desserts are made with only the freshest and most delicious ingredients, crafted to perfection to deliver a taste sensation that will leave you wanting more.</p>
                </SplideSlide>
            </Splide>

            <ProductsContainer />
        </section>
    )
}