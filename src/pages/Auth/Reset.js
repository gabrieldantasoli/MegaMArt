import React, { useState } from 'react';
import { ImgReset } from '../../assets';
import { Link, Navigate } from 'react-router-dom';

//IMPORTANDO O CSS
import './auth.css';
import { toast } from 'react-toastify';

//auth
import { auth } from '../../Services/firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import { LoaderComp } from '../../components';

export default () => {
    const [email, setEmail] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    async function resetPassword(e) {
        e.preventDefault();
        setIsLoading(true);
        
        if (email === "") {
            toast.error("Fill all Fields!");
            return;
        }

        await sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Check your email for a reset link.");
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error("Error : " + errorMessage.split("/")[1].split(")")[0].replaceAll("-"," ") + " !");
        });

        setIsLoading(false);
    }

    return (
        <section className='auth'>
            {isLoading && <LoaderComp />}
            <div className="img">
                <img src={ImgReset} alt="" />
            </div>

            <div className='form'>
                <h2>Forgot Password</h2>
                <form onSubmit={resetPassword}>
                    <label htmlFor='emailLogin'>E-mail</label>
                    <input id="emailLogin" type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit' style={{"margin-top": "1rem"}}>Reset Password</button>
                </form>
            </div>
        </section>
    )
}