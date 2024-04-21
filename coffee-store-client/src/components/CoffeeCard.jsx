  
const CoffeeCard = ({coffee}) => {
    const {name,quantity,supplier,taste,category,details,photo} = coffee;
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
                    <button className="btn join-item mb-4">EDIT</button>
                    <button className="btn join-item">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;