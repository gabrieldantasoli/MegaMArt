import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { NotFound } from '../../assets';
import CartProduct from '../../components/cartProduct';
import { selectProductsCount, selectProductsTotalPrice } from '../../Redux/cart/cart.selector';
import { cartProducts, CLEAR_CART } from '../../Redux/cart/slice';
import { selectIsLoggedIn } from '../../Redux/user/slice';
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';


//IMPORTANDO O CSS
import './cart.css'
import { db } from '../../Services/firebaseConfig';
import { toast } from 'react-toastify';

export default () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const cart = useSelector(cartProducts);
    const cartTotalPrice = useSelector(selectProductsTotalPrice);
    const cartTotalProducts = useSelector(selectProductsCount);

    function order() {
        const productCollection = collection(db, "earnings");
        let data = {
            totalPrice: cartTotalPrice,
            totalProducts: cartTotalProducts,
            products: JSON.stringify(cart)
        }
        addDoc(productCollection,data)
        .then(() => {
            toast.success("Order Registered!");
            dispatch(CLEAR_CART());
        })
        .catch((error) => {
            toast.error("Error: Order Failed. Try Again!")
        })
        getDocs(productCollection)
    }

    return (
        <section className='sectionContainer cartContainer'>
            {isLoggedIn ? 
            <div className='loggedCart'>
                <div className='info'>
                    <p>TOTAL : $ {cartTotalPrice.toFixed(2)}</p>
                    <button onClick={order}>Order Now</button>
                </div>
                {cart.length === 0 ? <span>Your Cart is Empty ...</span> : cart.map(
                    (product) => {
                        return(
                            <p><CartProduct product={product} /></p>
                        )
                    }
                )}
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