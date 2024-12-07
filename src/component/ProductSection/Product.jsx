import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    
    const {name,itemName,categoryName,Price,stock,_id,photo}=product
    
    return (
        <div>
           <Zoom>
           <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>itemName:{itemName}</p>
    <p>Category:{categoryName}</p>
    <p>Price:{Price}</p>
    <p>Stock Status:{stock}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn btn-warning">Details</button></Link>
    </div>
  </div>
</div>
           </Zoom>
        </div>
    );
};

export default Product;