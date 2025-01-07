import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const SportCategory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://assignment10-lotus-server.vercel.app/sports');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const uniqueCategories = products.reduce((acc, product) => {
        if (!acc.some((item) => item.categoryName === product.categoryName)) {
            acc.push(product);
        }
        return acc;
    }, []);

    return (
        <div className='mt-10'>
            <h1 className='text-3xl text-center text-teal-900 mb-9'>Category Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <Zoom>
                    {
                        uniqueCategories.map(product => <div key={product._id}>
                            {/* <div className='bg-gray-300 p-3 border-2 rounded-xl shadow-xl h-40 text-center items-center justify-center flex'>
                                <h3 className='text-2xl text-center text-indigo-800 font-bold'>{product.categoryName}</h3>

                              </div>  */}
                            <div className="card bg-base-100 image-full w-72 h-60 shadow-xl ">
                                <figure>
                                    <img
                                        className=''
                                        src={product.photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body text-center flex justify-center items-center">

                                    <h2 className="card-title mb-4 ">{product.categoryName}</h2>
                                    <p className='underline'>Go to category</p>

                                </div>
                            </div>
                        </div>)
                    }

                </Zoom>
            </div>
        </div>
    );
};

export default SportCategory;