import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useCart } from "../hooks/useCart";


const Details = () => {
    const [product, setProduct] = useState([])
    const data = useLoaderData()
    const { name, category, Weight, price } = data
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart,refetch] = useCart();




    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const handaleAddToCart = () => {
        // console.log(data)

        if (user && user.email) {
            const CartItem = { itemsId: data?._id, name: data?.name, image: data?.image, price: data?.price };
            console.log(CartItem)

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(CartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                    } else {
                        Swal.fire({
                            title: 'Please login to order the food',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login now'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } })
                            }
                        })
                    }

                })
        }


    }

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
                                <button onClick={() => handaleAddToCart()} className="btn bg-[#3ABFF8] w-full"><AiOutlineShoppingCart />  Add to Cart</button>
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