import React from 'react';

import { GiChickenLeg , GiWrappedSweet } from "react-icons/gi";
import { BiDrink } from 'react-icons/bi';

//IMPORTANDO O CSS
import './productItem.css';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../Redux/cart/slice';
import { toast } from 'react-toastify';

export default (props) => {
    
    const dispatch = useDispatch();

    function add_product() {
        dispatch(ADD_PRODUCT({"name": props.name,"img": props.img,"code": props.code,price: props.price}))
        toast.success(`${props.name} Added on Cart`);
    }

    return (
        <div className='productItem'>
            <div className='productCard'>
                <div className='imgContainer'>
                    {props.category === "foods" ? <GiChickenLeg className='icon'/> : props.category === "drinks" ? <BiDrink className='icon'/> : <GiWrappedSweet className='icon'/> }
                    <img className='itemImg' src={props.img} alt={props.name} />
                </div>
                <div className='namePrice'>
                    <h3>{props.name}</h3>
                    <p>{Number(props.promo) === 0 ? 
                        "$ " + props.price : 
                        <div className='promo'>
                            <span className='risked'>$ {props.price}</span>
                            <span className='promo'>$ {(Number(props.price) * (1 - Number(props.promo))).toFixed(2)}</span>
                        </div>}
                    </p>
                </div>
                <div className='description'>
                    <p>{props.desription.slice(0,50)}{props.desription.length > 50 ? "..." : ""}</p>
                </div>
                <div className='avaliationAndAdd'>
                    <p>Avaliation : {props.avaliation}</p>
                    <button onClick={add_product} className='addToCart'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}