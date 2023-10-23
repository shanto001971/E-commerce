import { useContext, useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";


const Carts = () => {
    // const {user}=useContext(AuthContext)
    const [cart, refatch] = useCart()


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((items,index) => <tr key={items._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={items?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{items?.name}</div>
                                            <div className="text-sm opacity-50">Bangladesh</div>
                                        </div>
                                    </div>
                                </td>
                                
                                <td>{items?.price} Taka</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Remove</button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Carts;