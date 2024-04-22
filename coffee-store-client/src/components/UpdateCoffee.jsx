import { useLoaderData } from "react-router-dom";

 

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default UpdateCoffee;