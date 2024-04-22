import { Link } from "react-router-dom";
import Swal from "sweetalert2";

  
const CoffeeCard = ({coffee}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

    const handelDelete= _id =>{
        console.log(_id);
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
                    

                    fetch(`http://localhost:5000/coffee/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                }
            });
    }
    return (
        <div className="">
            <div className="flex content-center justify-between bg-green-400 text-white">
                <div className="">
                    <figure><img className="w-40" src={photo} alt="Movie"/></figure>
                </div>
                <div className="pt-6 pl-10">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="my-4">Quantity: {quantity}</p>
                    <p className="mb-4">Taste: {taste}</p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="join join-vertical mr-4 mt-4">
                    <button className="btn join-item mb-4">VIEW</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn join-item mb-4 pr-8">EDIT</button>
                    </Link>
                    <button onClick={()=>handelDelete(_id)} className="btn join-item ">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;