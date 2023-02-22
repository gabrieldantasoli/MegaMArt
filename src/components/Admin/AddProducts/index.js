import React, { useState } from 'react';
import Actions from '../Actions';
import { FiUpload } from "react-icons/fi"

//IMPORTANDO O CSS
import './addProducts.css';
import { toast } from 'react-toastify';
import { ImgUpload } from '../../../assets';
import { db, storage } from '../../../Services/firebaseConfig';
import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes,  } from 'firebase/storage';

export default () => {

    const [porgessPorcent ,  setPorgessPorcent] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [imgURL ,  setImgURL] = useState(null);
    const [radioChecked, setRadioChecked] = useState("foods");
    const [name , setName] = useState("");
    const [files , setFile] = useState("");
    const [price , setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [avaliation, setAvaliation] = useState("");
    const [productCode, setProductCode] = useState("");

    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImgPreview(image);
                setFile(e.target.files[0]);
                setImgURL(URL.createObjectURL(e.target.files[0]));
            } else {
                toast.error("Upload png or jpeg image!");
                setImgPreview(null);
                return null;
            }
        }
    }

    async function uploadInfo(e) {
        e.preventDefault();
        
        if (imgPreview === null) {
            toast.error("You must upload a product Image!");
            return;
        }

        const productCollection = collection(db, "products");
        const productDoc = doc(productCollection, radioChecked);
        const typeCollection = collection(productDoc, "items");
        const documentRef = doc(db, radioChecked, productCode);
        let data = {
            name: name,
            price: price,
            desription: desc,
            avaliation: avaliation,
            productCode: productCode,
            category: radioChecked,
            promotion: 0,
            active: true,
            img: ""
        }

        setDoc(documentRef,data)
        .then(() => {
            //Upload Image
            // ID do arquivo
            const fileId = productCode;

            // Referência para o arquivo no Firebase Storage
            const fileRef = ref(storage, `images/${fileId}`);

            // Arquivo a ser enviado
            const file = files;

            // Faz o upload do arquivo para o Storage
            uploadBytes(fileRef, file).then(() => {
                toast.success("Product Uploaded!");
            }).catch((error) => {
                toast.error("Error")
            });


            
        })
        .catch((error) => {
            toast.error("Error: call not added!")
        })
    }

    

    return (
        <section className='sectionContainer addProducts'>
            <Actions />
            <form className='formAddProduct' onSubmit={uploadInfo}>
                <label className='label-product'>
                    {porgessPorcent === null ? <FiUpload /> : <p>{porgessPorcent}%</p>}

                    <input type="file" accept='image/*' onChange={handleFile} id="file" /> 

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
                    <input type="text" id='productFood' placeholder='Product Name : ' value={name} onChange={(e) => setName(e.target.value)} required/> <br/>
                    
                    <label htmlFor='productDrink'>Product Price : </label>
                    <input type="text" id='productDrink' placeholder='Product Price : ' value={price} onChange={(e) => setPrice(e.target.value)} required/>  <br/>

                    <label htmlFor='productDescription'>Product Description : </label>
                    <input type="text" id='productDescription' placeholder='Product Description : ' value={desc} onChange={(e) => setDesc(e.target.value)} required/>  <br/>
                    
                    <label htmlFor='productAvaluation'>Product Avaliation : </label>
                    <input type="number" id='productAvaluation' value={avaliation} onChange={(e) => setAvaliation(e.target.value)} max={5} min={0} required/>  <br/>

                    <label htmlFor='productCode'>Product Code : </label>
                    <input type="number" id='productCode' value={productCode} onChange={(e) => setProductCode(e.target.value)}  min={0} required/>  <br/>

                    <button type='submmit'>Add Product</button>
                    
                </div>
            </form>
        </section>
    )
}