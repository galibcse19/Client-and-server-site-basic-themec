import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

    const handelUpdatedCoffee= event=>{
        event.preventDefault();

        const form= event.target;

        const name= form.name.value;
        const quantity= form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully Updated Coffee.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })
    }

    return (
        <div>
            <div className="bg-green-400 text-white">
            <div className="mx-28 py-24">
                <p className="text-4xl">Updated this coffee : {name}</p>
                <div className="">
                     <form onSubmit={handelUpdatedCoffee}>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Coffee Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Available Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Taste</span>
                                    </label>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="w-full mb-8">
                                    <label className="label">
                                        <span className=" ">Photo URL</span>
                                    </label>
                                    <input type="url" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" required />
                            </div>
                            <input className="btn btn-block" type="submit" value="Update Coffee" />
                    </form>    
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateCoffee;