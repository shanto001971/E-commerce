import { Link } from "react-router-dom";


const ItemCard = ({beef}) => {
    const {image,name,Weight,price}=beef;

    return (
        <div>
            <div className="border rounded-2xl">
                <img className="rounded-2xl" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-1 p-2 ">
                <h3 className="font-sans">{name}</h3>
                <small className="font-thin">{Weight} Liter</small>
                <p className="text-[#009999] font-bold">৳{price}</p>
                <Link><button className="btn btn-outline btn-info mt-5 w-full">Info</button></Link>
            </div>
        </div>
    );
};

export default ItemCard;