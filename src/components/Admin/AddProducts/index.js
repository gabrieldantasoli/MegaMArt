import React, { useState } from 'react';
import Actions from '../Actions';
import { FiUpload } from "react-icons/fi"

//IMPORTANDO O CSS
import './addProducts.css';
import { toast } from 'react-toastify';
import { ImgUpload } from '../../../assets';

export default () => {

    const [porgessPorcent ,  setPorgessPorcent] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [imgURL ,  setImgURL] = useState(null);
    const [radioChecked, setRadioChecked] = useState("foods");
    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [avaliation, setAvaliation] = useState("");

    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImgPreview(image);
                setImgURL(URL.createObjectURL(e.target.files[0]));
            } else {
                toast.error("Upload png or jpeg image!");
                setImgPreview(null);
                return null;
            }
        }
    }

    return (
        <section className='sectionContainer addProducts'>
            <Actions />
            <form className='formAddProduct'>
                <label className='label-product'>
                    {porgessPorcent === null ? <FiUpload /> : <p>{porgessPorcent}%</p>}

                    <input type="file" accept='image/*' onChange={handleFile} /> 

                    {imgPreview === null ? <img src={ImgUpload} alt="Image Upload" /> : <img src={imgURL} alt="Image Upload" />}
                </label> <br />
                <div className='infos'>
                    <h2>Product Info</h2>
                    <div className='radios'>
                        <input type="radio" id='radioFoods' name='option' onClick={() => setRadioChecked("foods")} required/>
                        <label htmlFor='radioFoods'>foods</label> 
                        <input type="radio" id='radioDrinks' name='option' onClick={() => setRadioChecked("drinks")} />
                        <label htmlFor='radioDrinks'>drinks</label>
                        <input type="radio" id='radioDesserts' name='option' onClick={() => setRadioChecked("desserts")} />
                        <label htmlFor='radioDesserts'>desserts</label>
                    </div>

                    <label htmlFor='productFood'>Product Name : </label>
                    <input type="text" id='productFood' placeholder='Product Name : ' value={name} onChange={(e) => setName(e.target.value)} /> <br/>
                    
                    <label htmlFor='productDrink'>Product Price : </label>
                    <input type="text" id='productDrink' placeholder='Product Price : ' value={price} onChange={(e) => setPrice(e.target.value)} />  <br/>

                    <label htmlFor='productDescription'>Product Description : </label>
                    <input type="text" id='productDescription' placeholder='Product Description : ' value={desc} onChange={(e) => setDesc(e.target.value)} />  <br/>
                    
                    <label htmlFor='productAvaluation'>Product Avaliation : </label>
                    <input type="number" id='productAvaluation' value={avaliation} onChange={(e) => setAvaliation(e.target.value)} max={5} min={0} />  <br/>

                    <button type='submmit'>Add Product</button>
                    
                </div>
            </form>
        </section>
    )
}