import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


const Card = ({ product }) => {
    const {itemName,categoryName,Price,_id,photo}=product;
    return (
        <div>
          {/* <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{categoryName}</h2>
    <p>Item Name:{itemName}</p>
    <p>Price:{Price}</p>
    <div className="card-actions justify-end">
      <Link to={`/update/${_id}`}>
      <div className="btn btn-success">Update</div></Link>
      <div className="btn btn-warning">Delete</div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default Card;
