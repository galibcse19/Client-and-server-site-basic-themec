import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handelAddCoffee= event=>{
        event.preventDefault();

        const form= event.target;

        const name= form.name.value;
        const quantity= form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee={name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully added your Coffee.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })
    }
    return (
        <div className="bg-green-400 text-white">
            <div className="mx-28 py-24">
                <p className="text-4xl">Add a coffee</p>
                <div className="">
                     <form onSubmit={handelAddCoffee}>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Coffee Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Available Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Taste</span>
                                    </label>
                                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Details</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="w-full mb-8">
                                    <label className="label">
                                        <span className=" ">Photo URL</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                            </div>
                            <input className="btn btn-block" type="submit" value="ADD COFFEE" />
                    </form>    
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;