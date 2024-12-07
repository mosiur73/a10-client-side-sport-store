import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllEquipment = () => {
    const loadSports =useLoaderData()
    const [sports,setSports]=useState(loadSports)
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort order


    const handleDelete=id=>{
      
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
                // console.log(data)
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

    const handleSort = () => {
      const sortedSports = [...sports].sort((a, b) => {
          if (sortOrder === 'asc') {
              return a.Price - b.Price;
          } else {
              return b.Price - a.Price;
          }
      });
      setSports(sortedSports);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
  };

    
    return (
        <div>
          <div className="mb-4">
                <button onClick={handleSort} className="btn btn-primary">
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>

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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        sports.map((sport,index) =>
         <tr key={sport._id}>
            <th>{index + 1}</th>
            <td>{sport.name}</td>
            <td>{sport.categoryName}</td>
            <td>{sport.Price}</td>
            <td>{sport.stock}</td>
            <td>
               <Link to={`/details/${sport._id}`}> <button className='btn btn-secondary mr-2'>Details</button></Link>
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