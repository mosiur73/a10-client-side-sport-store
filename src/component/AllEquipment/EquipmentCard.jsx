import React from 'react';

const EquipmentCard = ({sport}) => {
    
    const {name,email,itemName,categoryName,Price,description,processing,stock,photo}=sport;
    return (
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>itemName</th>
        <th>categoryName</th>
        <th>Price</th>
        <th>processing</th>
        <th>stock</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{name}</td>
        <td>{itemName}</td>
        <td>{categoryName}</td>
        <td>{Price}</td>
        <td>{processing}</td>
        <td>{stock}</td>
      </tr>
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default EquipmentCard;