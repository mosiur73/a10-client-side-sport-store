import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEuipment = () => {
    const equipment=useLoaderData()
    // console.log(equipment);
    const {name,email,itemName,_id,categoryName,Price,description,processing,stock,photo}= equipment;

    const handleUpdateEquipment = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const itemName = e.target.itemName.value;
        const categoryName = e.target.categoryName.value;
        const Price = e.target.Price.value;
        const description = e.target.description.value;
        const processing = e.target.processing.value;
        const stock = e.target.stock.value;
        const photo = e.target.photo.value;
        const sports={name,email,itemName,categoryName,Price,description,processing,stock,photo};
        // console.log(sports)
        //send data to the server
        fetch(`https://assignment10-lotus-server.vercel.app/sports/${_id}`,{
           method:'PUT',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(sports)
        })
        .then(res =>res.json())
        .then(data =>{
            // console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'sport equipment update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
    return (
        <div className='my-6'>
        <div className='lg:w-3/4 mx-auto'>
       <div className="text-center p-10">
           <h1 className="text-5xl font-bold">Update Equipment</h1>
           
       </div>
       <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
           <form onSubmit={handleUpdateEquipment} className="card-body">
               {/* form first row */}
               <div className='flex flex-col lg:flex-row gap-3'>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">User Name</span>
                       </label>
                       <input type="text" name='name' defaultValue={name}  placeholder="User Name" className="input input-bordered" required />
                   </div>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">User Emai</span>
                       </label>
                       <input type="text" name='email' defaultValue={email} placeholder="User Email" className="input input-bordered" required />
                   </div>
               </div>
               {/* form second row */}
               <div className='flex flex-col lg:flex-row gap-3'>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Item Name </span>
                       </label>
                       <input type="text" name='itemName' defaultValue={itemName} placeholder="Item Name" className="input input-bordered" required />
                   </div>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Category Name</span>
                       </label>
                       <input type="text" name='categoryName' defaultValue={categoryName} placeholder="Category Name" className="input input-bordered" required />
                   </div>
               </div>
               {/* form third row */}
               <div className='flex flex-col lg:flex-row gap-3'>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Price</span>
                       </label>
                       <input type="text" name='Price' defaultValue={Price}  placeholder="Price" className="input input-bordered" required />
                   </div>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Description</span>
                       </label>
                       <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" required />
                   </div>
               </div>
               <div className='flex flex-col lg:flex-row gap-3'>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Processing Time</span>
                       </label>
                       <input type="text" name='processing' defaultValue={processing} placeholder="Processing Time" className="input input-bordered" required />
                   </div>
                   <div className="form-control flex-1">
                       <label className="label">
                           <span className="label-text">Stock Status</span>
                       </label>
                       <input type="text" name='stock' defaultValue={stock} placeholder="Stock Status" className="input input-bordered" required />
                   </div>
               </div>


               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Photo URL</span>
                   </label>
                   <input type="text" name='photo' defaultValue={photo} placeholder="Photo url" className="input input-bordered" required />

               </div>
               <div className="form-control mt-3">
                   <button className="btn btn-warning">Update Equipment</button>
               </div>
           </form>
       </div>
   </div>
   </div>
    );
};

export default UpdateEuipment;