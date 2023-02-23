import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AdminUpdateProducts } from '../..';
import { allProducts } from '../../../Redux/products/slice';
import Actions from '../Actions';
import { AiFillCloseCircle } from 'react-icons/ai';

//IMPORTANDO O CSS
import './products.css'

export default () => {

    const products = useSelector(allProducts);
    const [search, setSearch] = useState("");

    return (
        <section className='sectionContainer products'>
            <Actions />
            <div className='search'>
                <input typ="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Some Product" />
                <AiFillCloseCircle className='close' onClick={() => setSearch("")}/>
            </div>
            <table className='adminTable'>
                <thead>
                    <th>Image</th>
                    <th>Product</th>
                    <th>promo</th>
                    <th>Price</th>
                    <th>Active</th>
                    <th>Code</th>
                    <th>Update</th>
                </thead>
                <tbody>
                    {products.map((prod) => {
                        if (prod["productCode"].toLowerCase().indexOf(search) !== -1 || prod["name"].toLowerCase().indexOf(search) !== -1 || prod["category"].toLowerCase().indexOf(search) !== -1) {
                            return(
                                <AdminUpdateProducts name={prod["name"]} img={prod["img"]} code={prod["productCode"]} promo={prod["promotion"]} price={prod["price"]} active={prod["active"]} desc={prod["desription"]} avaliation={prod["avaliation"]} category={prod["category"]} />
                            )
                        }
                        
                    })}
                </tbody>
            </table>
            
        </section>
    )
}