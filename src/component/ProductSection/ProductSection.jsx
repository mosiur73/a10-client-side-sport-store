import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/sports');
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

    return (
        <div className='mt-10'>
            <h2 className='text-3xl text-center mb-3 text-teal-800'>Most popular products</h2>
            <p className='text-center text-gray-400 mb-7'>Browse through our collection of must-haves</p>
          
            {loading && <span className="loading loading-infinity loading-lg "></span>}
            {error && <p>Error: {error}</p>}
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                            products.map(product => <Product key={product._id}
                            product={product}
                            ></Product> )
                        }
                        
            </div>
           
        </div>
    );
};

export default ProductSection;
