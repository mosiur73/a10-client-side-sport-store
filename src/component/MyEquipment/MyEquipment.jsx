import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Card from './Card';
import { Zoom } from 'react-awesome-reveal';
import Swal from 'sweetalert2';

const MyEquipment = () => {
  const { user } = useContext(AuthContext); 
  const products = useLoaderData(); 
  const [productCart,setProductCart]=useState(products)

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
         const remainingUser=productCart.filter(sport =>sport._id !== id)
         setProductCart(remainingUser)
           }
       })

       }
     });
}   
 
  


  const userProducts = productCart?.filter(product => product.email === user?.email) || [];

  return (
    <div className='mt-10'>
     
      <div>
        {userProducts.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
           <Zoom>
           {userProducts.map(product => (
            //   <Card key={product._id} product={product} />
            <div key={product._id} className="card bg-base-100 w-72 h-80 shadow-xl">
            <figure>
              <img
                src={product.photo}
                alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.categoryName}</h2>
              <p>Item Name:{product.itemName}</p>
              <p>Price:{product.Price}</p>
              <div className="card-actions justify-end">
                <Link to={`/update/${product._id}`}>
                <div className="btn btn-success">Update</div></Link>
                <div onClick={()=>handleDelete(product._id)} className="btn btn-warning">Delete</div>
              </div>
            </div>
          </div>
            
            ))}
           </Zoom>
          </div>
        ) : (
          <p className='text-red-600 text-2xl text-center'>No data found for the current user.</p>
        )}
      </div>
    </div>
  );
};

export default MyEquipment;
