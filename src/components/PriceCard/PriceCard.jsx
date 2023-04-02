import React from 'react';
import Feauture from '../Feauture/Feauture';

const PriceCard = ({price}) => {
    console.log(price);
    return (
        <div className='bg-indigo-400 mt-3 rounded-md p-4'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold '>
                    {price.price}
                </span>
                <span className='font-bold text-2xl text-white'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.membership}</h5>
            <p className='underline font-bold text-white text-3xl'>Feautures</p>
            {
                price.features.map((feature,idx) => <Feauture
                key={idx}
                feature={feature}
                ></Feauture>)
            }
        </div>
    );
};

export default PriceCard;