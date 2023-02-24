import React, { useEffect, useState } from 'react';
import Actions from '../Actions';
import { collection, getDocs } from 'firebase/firestore';

//IMPORTANDO O CSS
import './earnings.css';
import { db } from '../../../Services/firebaseConfig';

export default () => {

    const [earnings, setEarnings] = useState("");

    useEffect(() => {
        async function setEa() {
            let data = [];
            const productCollection = collection(db, "earnings");
            const docs = await getDocs(productCollection);
            docs.forEach((doc) => {
                data.push({totalPrice: doc.data().totalPrice, totalProducts: doc.data().totalProducts, products: JSON.parse(doc.data().products)})
              });
            setEarnings(data);
        }

        setEa();
    }, []);

    return (
        <section className='sectionContainer earnings'>
            <Actions />
            {JSON.stringify(earnings)}
        </section>
    )
}