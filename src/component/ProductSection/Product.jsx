import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Product = ({product}) => {
    console.log(product);
    const {name,email,itemName,categoryName,Price,description,processing,stock,photo}=product
    
    return (
        <div>
           <Zoom>
           <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>itemName:{itemName}</p>
    <p>Category:{categoryName}</p>
    <p>Price:{Price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Details</button>
    </div>
  </div>
</div>
           </Zoom>
        </div>
    );
};

export default Product;