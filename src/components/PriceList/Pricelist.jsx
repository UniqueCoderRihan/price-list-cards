import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch('price.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div>
           <h3 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4'>Awosm Afforable price</h3> 
           <div className='grid grid-cols-3 gap-3'>
            {
                    prices.map(price=> <PriceCard
                    key={price.id}
                    price={price}
                    ></PriceCard>)
            }
           </div>
        </div>
    );
};

export default Pricelist;