import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, REMOVE_PRODUCT } from '../../Redux/cart/slice';
import { AiFillPlusCircle , AiFillMinusCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

//IMPORTANDO O CSS
import './cartProduct.css';

export default ({product}) => {

    const dispatch = useDispatch();

    function increaseProduct() {
        dispatch(INCREASE_PRODUCT_QUANTITY(product.code));
    }

    function decreaseProduct() {
        dispatch(DECREASE_PRODUCT_QUANTITY(product.code));
    }

    function removeProduct() {
        dispatch(REMOVE_PRODUCT(product.code));
    }

    return (
        <div className='cartProduct'>
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>Quantity : {product.quantity}</p>
            <p>Total Price : {(product.quantity * Number(product.price)).toFixed(2)}</p>
            <div id='actions'>
                <AiFillPlusCircle onClick={increaseProduct} />
                <FaTrashAlt onClick={removeProduct} />
                <AiFillMinusCircle onClick={decreaseProduct} />
            </div>
        </div>
    )
}