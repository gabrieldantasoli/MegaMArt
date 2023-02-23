import { async } from '@firebase/util';
import React from 'react';

//IMPORTANDO O CSS
import './adminProducts.css';

export default (props) => {

    async function updateProduct() {
      alert(props.code)
    }

    return (
        <tr>
          <td><img src={props.img} alt={props.name} /></td>
          <td><p>{props.name}</p></td>
          <td className={props.promo === 0 ? "" : "yellow"}><p>{props.promo === 0 ? "---" : Number(props.promo) * 100 + "%"}</p></td>
          <td><p>$ {props.price}</p></td>
          <td className={props.active ? "green" : "red"}><p>{props.active ? "Yes" : "No"}</p></td>
          <td><p>{props.code}</p></td>
          <td className='tdButton'><button onClick={updateProduct}>Update</button></td>
        </tr>
    )
}