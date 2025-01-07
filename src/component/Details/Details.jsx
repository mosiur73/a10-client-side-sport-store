import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleData = useLoaderData();
    console.log(singleData);

    const {
        name,
        email,
        itemName,
        categoryName,
        Price,
        description,
        processing,
        stock,
        photo
    } = singleData;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-slate-100">
           <Zoom>
           <div className=" w-full max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className=" rounded-t-lg overflow-hidden">
                    <img
                        src={photo}
                        alt={itemName}
                        className="w-full h-48 object-cover"
                    />
                </div>
                <div className="p-6 ">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{itemName}</h2>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Category:</span> {categoryName}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Price:</span> ${Price}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Stock:</span> {stock} units
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Processing:</span> {processing}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                        <span className="font-semibold">Description:</span> {description}
                    </p>
                </div>
                <div className="bg-gray-100 px-6 py-4 rounded-b-lg">
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Seller:</span> {name}
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Contact:</span> {email}
                    </p>
                </div>
            </div>
           </Zoom>
        </div>
    );
};

export default Details;
