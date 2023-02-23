import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allProducts } from '../../Redux/products/slice';
import ProductItem from '../ProductItem';

//IMPORTANDO O CSS
import './productsContainer.css';

export default () => {

    const products = useSelector(allProducts);

    const [productType , setProductType] = useState("all");

    return (
        <section className='productsContainer'>
            <div className='productType'>
                <h2>Filter by : </h2>
                <div className='buttonsContainer'>
                    <button className={productType === "all" ? "buttonActive" : ""} onClick={() => setProductType("all")}>All</button>
                    <button className={productType === "foods" ? "buttonActive" : ""} onClick={() => setProductType("foods")}>Foods</button>
                    <button className={productType === "drinks" ? "buttonActive" : ""} onClick={() => setProductType("drinks")}>Drinks</button>
                    <button className={productType === "desserts" ? "buttonActive" : ""} onClick={() => setProductType("desserts")}>Desserts</button>
                </div>
                
            </div>
            <div id='ProductsContainer'>
                {products.map((doc) => {
                    if (doc["active"] && (doc["category"] === productType || productType === "all")) {
                        return(
                            <ProductItem key={doc["productCode"]} name={doc["name"]} price={doc["price"]} code={doc["productCode"]} promo={doc["promotion"]} avaliation={doc["avaliation"]} category={doc["category"]} desription={doc["desription"]} img={doc["img"]} />
                        )
                    }
                })}
            </div>
            
        </section>
    )
}