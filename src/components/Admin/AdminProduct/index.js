import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../../../Services/firebaseConfig';
import { AiFillCloseCircle } from 'react-icons/ai';

//IMPORTANDO O CSS
import './adminProducts.css';
import { checkActionCode } from 'firebase/auth';

export default (props) => {
    const [pageUpdate , setPageUpdate] = useState(false);

    const [name , setName] = useState(props.name);
    const [price , setPrice] = useState(props.price);
    const [description , setDescription] = useState(props.desc);
    const [avaliation , setAvaliation] = useState(props.avaliation);
    const [code , setCode] = useState(props.code);
    const [category , setCategory] = useState(props.category);
    const [promo , setPromo] = useState(props.promo);
    const [active , setActive] = useState(props.active);
    const [img , setImg] = useState(props.img);

    async function updateProduct(e) {
      e.preventDefault();

      const productCollection = collection(db, props.category);
      const productDoc = doc(productCollection, props.code);
      let data = {
          name: name,
          price: price,
          desription: description,
          avaliation: avaliation,
          productCode: code,
          category: category,
          promotion: promo,
          active: active === "true" ? true : false,
          img: img
      }
      updateDoc(productDoc,data)
      .then(() => {
        toast.success("Product Updated!")
        changePageUpload();
      })
      .catch((error) => {
        toast.error("Error: Product not Updated!")
      })
    }

    function changePageUpload() {
      setPageUpdate(!pageUpdate);
    }

    function closeUnespected() {
      setPageUpdate(!pageUpdate);
      setName(props.name);
      setPrice(props.price);
      setDescription(props.desc);
      setAvaliation(props.avaliation);
      setCode(props.code);
      setCategory(props.category);
      setPromo(props.promo);
      setActive(props.active);
      setImg(props.img);
    }

    if (pageUpdate) {
      return(
        <div className='fixed'>
            <AiFillCloseCircle onClick={closeUnespected} className='closePage'/>
            <form className='formAddProduct' onSubmit={updateProduct}>
                <h2>Product Upload</h2>
                <div className='radios'>
                    <input type="radio" id='radioFoods' name='option' onClick={() => setCategory("foods")} disabled checked={category === "foods"} />
                    <label htmlFor='radioFoods'>foods</label> 
                    <input type="radio" id='radioDrinks' name='option' onClick={() => setCategory("drinks")} disabled checked={category === "drinks"} />
                    <label htmlFor='radioDrinks'>drinks</label>
                    <input type="radio" id='radioDesserts' name='option' onClick={() => setCategory("desserts")} disabled checked={category === "desserts"}  />
                    <label htmlFor='radioDesserts'>desserts</label>
                </div>

                <div className="labelInput">
                  <label htmlFor='productFood'>Product Name : </label>
                  <input type="text" id='productFood' placeholder='Product Name : ' value={name} onChange={(e) => setName(e.target.value)} required/> <br/>
                </div>
                
                <div className="labelInput">
                  <label htmlFor='productDrink'>Product Price : </label>
                  <input type="text" id='productDrink' placeholder='Product Price : ' value={price} onChange={(e) => setPrice(e.target.value)} required/>  <br/>
                </div>
                
                <div className="labelInput">
                  <label htmlFor='productDescription'>Product Description : </label>
                  <input type="text" id='productDescription' placeholder='Product Description : ' value={description} onChange={(e) => setDescription(e.target.value)} required/>  <br/>
                </div>

                <div className="labelInput">
                  <label htmlFor='productAvaluation'>Product Avaliation : </label>
                  <input type="number" id='productAvaluation' value={avaliation} onChange={(e) => setAvaliation(e.target.value)} max={10} min={0} required/>  <br/>
                </div>
                
                <div className="labelInput">
                  <label htmlFor='productPromo'>Product Promotion : </label>
                  <input type="text" id='productPromo' value={promo} onChange={(e) => setPromo(e.target.value)} />  <br/>
                </div>
                
                <div className="labelInput">
                  <label htmlFor='productCode'>Product Code : </label>
                  <input type="number" id='productCode' value={code} onChange={(e) => setCode(e.target.value)}  min={0} disabled/>  <br/>
                </div>

                <div className="labelInput">
                  <label htmlFor='productActive'>Product Active : </label>
                  <input type="boolean" id='productActive' value={active} onChange={(e) => setActive(e.target.value)} />  <br/>
                </div>

                <button type='submmit' className='update'>Update Product</button>
            </form>
        </div>
      )
    } else {
      return (
        <tr>
          <td><img src={props.img} alt={props.name} /></td>
          <td><p>{props.name}</p></td>
          <td className={Number(props.promo) === 0 ? "" : "yellow"}><p>{Number(props.promo) === 0 ? "---" : Number(props.promo) * 100 + "%"}</p></td>
          <td><p>$ {props.price}</p></td>
          <td className={props.active ? "green" : "red"}><p>{props.active ? "Yes" : "No"}</p></td>
          <td><p>{props.code}</p></td>
          <td className='tdButton'><button onClick={changePageUpload}>Update</button></td>
        </tr>
      )
    }
    
}