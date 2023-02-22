import React from 'react';

import { GiChickenLeg , GiWrappedSweet } from "react-icons/gi";
import { BiDrink } from 'react-icons/bi';

//IMPORTANDO O CSS
import './productItem.css';

export default (props) => {
    /*
    name 
    price
    code
    promo
    avaliation
    category
    description
    img
    */
    return (
        <div className='productItem'>
            <div className='productCard'>
                <div className='imgContainer'>
                    <GiWrappedSweet />
                    <img src={props.img} alt={props.name} />
                </div>
                <div className='namePrice'>
                    <h3>{props.name}</h3>
                    <p>{props.promo === 0 ? 
                        "$ " + props.price : 
                        <div className='promo'>
                            <span>$ {props.price}</span>
                            <span>$ {(Number(props.price) * (1 - Number(props.promo))).toFixed(2)}</span>
                        </div>}
                    </p>
                </div>
            </div>
        </div>
    )
}