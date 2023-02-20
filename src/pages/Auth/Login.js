import React, { useState } from 'react';
import { ImgLogin } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

//IMPORTANDO O CSS
import './auth.css';

// toast from toastify
import { toast } from 'react-toastify';

// auth
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth} from '../../Services/firebaseConfig'
import { LoaderComp } from '../../components';


export default () => {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    const navigate = useNavigate();

    async function loginWithEmailAndPassword(e) {
        e.preventDefault();

        if (email === "" || password === "") {
            toast.error("Fill all Fields!");
            return;
        } else if (password.length < 8) {
            toast.error("Password must be at least 8 characters long!");
            return;
        }
        
        setIsLoading(true);

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success("Login Successful...");
            navigate("/");
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error("Error : " + errorMessage.split("/")[1].split(")")[0].replaceAll("-"," ") + " !")
        });
        setIsLoading(false);
    }

    // login with google
    const provider = new GoogleAuthProvider();
    async function loginWithGoogle() {
        setIsLoading(true);

        await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            toast.success("Login Successfuly.");
            navigate("/");
        }).catch((error) => {
            let errorMessage = error.message;
            toast.error("Error : " + errorMessage.split("/")[1].split(")")[0].replaceAll("-"," ") + " !");
        });

        setIsLoading(false);
    }

    return (
        <section className='auth'> 
            {isLoading && <LoaderComp />}
            <div className="img">
                <img src={ImgLogin} alt="" />
            </div>

            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={loginWithEmailAndPassword}> 
                    <label htmlFor='emailLogin'>E-mail</label>
                    <input id="emailLogin" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                    <label htmlFor='passWordLogin'>PassWord</label>
                    <input id="passWordLogin" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='PassWord' />
                    <p className='forget'><Link to="/reset">forgot password</Link></p>
                    <button type="submit" >Login</button>
                    <p>--or--</p>
                    <button type='button' onClick={loginWithGoogle}>Login with Google</button>
                </form>
            </div>
        </section>
    )
}