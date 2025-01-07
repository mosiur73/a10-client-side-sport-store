import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllEquipment = () => {
    const loadSports =useLoaderData()
    const [sports,setSports]=useState(loadSports)
    const [sortOrder, setSortOrder] = useState('asc'); 



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
            
            fetch(`https://assignment10-lotus-server.vercel.app/sports/${id}`,{
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
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

    
    return (
        <div>
          <div className="mb-4">
                <button onClick={handleSort} className="btn btn-primary">
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
        sports.map((sport) =>
           <div key={sport._id} className="card card-compact bg-base-100 w-64 h-96 shadow-xl">
            <figure>
              <img
                src={sport.photo}
                alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{sport.name}</h2>
              <p>{sport.categoryName}</p>
              <p>${sport.Price}</p>
              <p>Stock Status:{sport.stock}</p>
              <div className="card-actions justify-around">
              
               <Link to={`/details/${sport._id}`}> <button className='btn btn-secondary mr-2'>view</button></Link>
                 <Link to={`/update/${sport._id}`}>
                 <button className='btn btn-info mr-2'>Edit</button>
                </Link>
                <button onClick={()=>handleDelete(sport._id)}  className='btn btn-warning'>Del</button>
            
              </div>
            </div>
          </div>
        )}
            </div>
            
        </div>
    );
};

export default AllEquipment;