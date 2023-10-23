import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const [product, setProduct] = useState([])
    const data = useLoaderData()
    const { name, category, Weight, price } = data




    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="lg:flex gap-3 mt-8">
            <div className=" lg:w-[60%]">
                <div className="w-full">
                    <div className="card card-compact w- bg-base-100 shadow-xl p-2">
                        <figure><img className="w-80" src={data?.image} alt="Products" /></figure>
                        <div className="card-body ">
                            <h2 className="text-2xl font-semibold">{name}</h2>
                            <p>{category}</p>
                            <p>{Weight} Liter</p>
                            <p className="font-semibold">Price: {price}</p>
                            <div className="card-actions">
                                <button className="btn bg-[#3ABFF8] w-full"><AiOutlineShoppingCart/>  Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[40%] grid grid-cols-2 gap-1">
                {
                    product.map(items => <div key={items._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-36 " src={items?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{items?.name.slice(0, 25)}</h2>
                            <p>{items?.category}</p>
                            <p>{items?.Weight} Liter</p>
                            <p className="font-semibold">Price: {items?.price}</p>
                            <div className=" w-full">
                                <Link to={`/details/${items?._id}`}><button className="btn btn-outline btn-info mt-5 w-full">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Details;