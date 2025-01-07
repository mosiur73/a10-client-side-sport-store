import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Zoom } from 'react-awesome-reveal';

const AddEquipment = () => {
    const {user}=useContext(AuthContext)
    const handleAddEquipment = e => {
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
        fetch('https://assignment10-lotus-server.vercel.app/sports',{
           method:'POST',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(sports)
        })
        .then(res =>res.json())
        .then(data =>{
           
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'user added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='' >
             <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Equipment</h1>
                
            </div>
           <Zoom>
           <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddEquipment} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name'defaultValue= {user?.name}  placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Emai</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='email' placeholder="User Emai" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Item Name </span>
                            </label>
                            <input type="text" name='itemName' placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name='categoryName' placeholder="Category Name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='Price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">delivery time</span>
                            </label>
                            <input type="text" name='processing' placeholder="delivery time" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" name='stock' placeholder="Stock Status" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-warning">Add Equipment</button>
                    </div>
                </form>
            </div>
           </Zoom>
        </div>
        </div>
    );
};

export default AddEquipment;