import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Feauture = ({feature}) => {
    return (
        <div>
            <CheckCircleIcon class="h-6 w-6 text-blue-500" />
            <p>{feature}</p>
        </div>
    );
};

export default Feauture;