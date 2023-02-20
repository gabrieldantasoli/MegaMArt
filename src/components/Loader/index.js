import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from '../../assets';

//IMPORTANDO O CSS
import './loader.css';

export default () => {

    return ReactDOM.createPortal (
        <div className='loader'>
            <h2>Loading</h2>
            <img src={Loader} alt="Loading..." />
        </div>,
        document.getElementById("loader")
    )
}