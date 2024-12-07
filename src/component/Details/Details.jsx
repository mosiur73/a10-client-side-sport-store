import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleData=useLoaderData()
    console.log(singleData);
    const {name,email,itemName,categoryName,Price,description,processing,stock,photo}=singleData
    
    return (
        <div>
            this is details page:{name} <br />
            this is details page:{email} <br />
            this is details page:{Price}
        </div>
    );
};

export default Details;