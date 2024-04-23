import { useLoaderData } from "react-router-dom";
 
const ViewDetails = () => {
    const coffee=useLoaderData();
    const {name,quantity,supplier,taste,category,details,photo} = coffee;
    return (
        <div className="">
            <div className="card w-96   shadow-xl bg-green-400 text-white ">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name of Coffee: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Category: {category}</p>
                    <p>Details: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;