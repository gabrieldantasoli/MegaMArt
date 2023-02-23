import React from 'react';

//IMPORTANDO O CSS
import './footer.css';

export default () => {

    return (
        <footer className='mainFooter'>
            <p>Made using <span className='react'>React</span> and <span className='firebase'>Firebase</span> .</p>
            <a href="https://github.com/gabrieldantasoli" target="_blank">Access My Github. </a>
        </footer>
    )
}