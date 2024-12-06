import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EquipmentCard from './EquipmentCard';
import Swal from 'sweetalert2';

const AllEquipment = () => {
    const loadSports =useLoaderData()
    const [sports,setSports]=useState(loadSports)
    const handleDelete=id=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/sports/${id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingUser=sports.filter(sport =>sport._id !== id)
              setSports(remainingUser)
                }
            })

            }
          });
    }   
    
    return (
        <div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>price</th>
        <th>stock</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        sports.map(sport => <tr key={sport._id}>
            <th>1</th>
            <td>{sport.name}</td>
            <td>{sport.categoryName}</td>
            <td>{sport.Price}</td>
            <td>{sport.stock}</td>
            <td>
                <button className='btn btn-secondary mr-2'>Details</button>
                <Link to={`/update/${sport._id}`}>
                <button className='btn btn-info mr-2'>Edit</button>
                </Link>
                <button onClick={()=>handleDelete(sport._id)}  className='btn btn-warning'>Del</button>
            </td>
          </tr>
         )
      }
     
    </tbody>
  </table>
</div>
            </div>
            
        </div>
    );
};

export default AllEquipment;