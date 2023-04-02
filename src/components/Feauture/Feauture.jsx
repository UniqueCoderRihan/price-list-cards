import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Feauture = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon class="h-6 w-6  text-green-400" />
            <p className='pl-2'>{feature}</p>
        </div>
    );
};

export default Feauture;