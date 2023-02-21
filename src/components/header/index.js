import React, { useEffect, useState } from 'react';
import { Logo } from '../../assets';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

//IMPORTANDO O CSS
import './header.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/user/slice';
import { ShowOnLogin, ShowOnLogout } from '../HiddenLinks';
import { toast } from 'react-toastify';
import { BiLogOut } from "react-icons/bi"
import { selectEmail } from '../../Redux/user/slice';


export default () => {

    const [displayName, setDisplayName] = useState("");

    const email = useSelector(selectEmail);

    const dispatch = useDispatch();

    // monitor currently sign in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.displayName === null || user.displayName === undefined) {
                    const uName = user.email.split("@")[0].toLowerCase();
                    setDisplayName(uName);
                } else {
                    setDisplayName(user.displayName.split(" ")[0]);
                }
                
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : displayName,
                    userID: user.uid,
                }));
            } else {
                setDisplayName("");
                dispatch(REMOVE_ACTIVE_USER());
            }
          });
    }, [dispatch, displayName]);

    const navigate = useNavigate();

    function logoutUser() {
        signOut(auth).then(() => {
            toast.success("Logout Successfuly.");
            navigate("/");
        }).catch((error) => {
        const errorMessage = error.message;
            toast.error("Error : " + errorMessage.split("/")[1].split(")")[0].replaceAll("-"," ") + " !")
        });
    }
    
    return (
        <header className='mainHeader'>
            {/* Desktop & Tablet */}
            <div className="deskblet">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>Mega<span>Mart</span></h1>
                </div>
            </div>

            <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => (isActive ? "linkActive" : "")} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => (isActive ? "linkActive" : "")}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="userIs">
                    <nav>
                        <ul>
                            <li>
                                {email === "admin@admin.com" ? 
                                <NavLink to="/admin/products" className={({isActive}) => (isActive ? "linkActive" : "")}> 
                                    Admin
                                </NavLink> : ""}
                            </li>
                            <li>
                                <ShowOnLogout>
                                    <NavLink to="/login" className={({isActive}) => (isActive ? "linkActive" : "")}>Login</NavLink>
                                </ShowOnLogout>
                                
                            </li>
                            <li>
                                <ShowOnLogout>
                                    <NavLink to="/register" className={({isActive}) => (isActive ? "linkActive" : "")}>Register</NavLink>
                                </ShowOnLogout>
                                
                            </li>
                            <li className='button'>
                                <ShowOnLogin>
                                    <button onClick={logoutUser}><BiLogOut /> Logout</button>
                                </ShowOnLogin>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({isActive}) => (isActive ? "linkActive" : "")}>
                                    <div className="cart">
                                    <AiOutlineShoppingCart /> 
                                    <p id='cartItemsCount'>0</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            {/* Mobile */}
        </header>
    )
}