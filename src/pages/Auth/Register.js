import React , { useState } from 'react';
import { ImgSignUp } from '../../assets';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//IMPORTANDO O CSS
import './auth.css';

// toast from toastify
import { toast } from 'react-toastify';

// Loading component
import { LoaderComp } from '../../components';

// auth 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Services/firebaseConfig'


export default () => {
    const [email , setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2 , setPassword2] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    const navigate = useNavigate();

    async function registerUser(e) {
        e.preventDefault();

        if (email === "" || password1 === "" || password2 === "") {
            toast.error("Fill all Fields!");
            return;
        } else if (password1 !== password2) {
            toast.error("Passwords do not match.");
            return;
        } else if (password1.length < 8) {
            toast.error("Password must be at least 8 characters long!");
            return;
        }

        setIsLoading(true);

        await createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setIsLoading(false);
            toast.success("Registration Successful...");
            navigate("/login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error("Error : " + errorMessage.split("/")[1].split(")")[0].replaceAll("-"," ") + " !");
        });

        setIsLoading(false);

    }


    return (
        <section className='auth'>
            {isLoading && <LoaderComp />}
            <div className="img">
                <img src={ImgSignUp} alt="" />
            </div>

            <div className='form'>
                <h2>Register</h2>
                <form onSubmit={registerUser}>
                    <label htmlFor='nameRegister'>E-mail</label>
                    <input id="nameRegister" type="text" placeholder='your name' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='emailRegister'>Password</label>
                    <input id="emailRegister" type="password" placeholder='password' value={password1} onChange={(e) => setPassword1(e.target.value)} />
                    <label htmlFor='passwordRegister'>Confirm PassWord</label>
                    <input id="passwordRegister" type="password" placeholder='Confirm PassWord' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    <button type="submit" style={{"marginTop": "1rem"}}>Register Now</button>
                </form>
            </div>
        </section>
    )
}