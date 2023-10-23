import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/Ai';
import { CiSearch } from 'react-icons/Ci';
import { BsListUl } from 'react-icons/Bs';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useCart } from "../hooks/useCart";


const Navbar = () => {
    const { user, LogOutUser } = useContext(AuthContext);
    const [cart,refetch] = useCart();
    // console.log(cart)

    const handelLogOut = () => {
        LogOutUser()
            .then(() => { })
            .catch(() => { })
    }

    // console.log(cart)


    return (
        <div className="navbar bg-base-300 lg:px-10 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className=" flex items-center relative">
                            <button className="absolute left-4 text-[#008ECC] "><CiSearch /></button>
                            <input className=" border-[#008ECC] border-[1px] rounded-2xl w-full p-2 px-10" type="text" name="" id="" placeholder="Search more..." />

                            <button className="absolute right-4 text-[#008ECC]"><BsListUl /></button>
                        </div>
                    </ul>
                </div>
                <h1 className="text-[#008ECC] font-bold uppercase text-2xl font-serif">e-<span className="lowercase font-thin">commerce</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className=" flex items-center relative">
                        <button className="absolute left-4 text-[#008ECC] "><CiSearch /></button>
                        <input className=" border-[#008ECC] border-[1px] rounded-2xl w-full p-2 px-10" type="text" name="" id="" placeholder="Search more..." />

                        <button className="absolute right-4 text-[#008ECC]"><BsListUl /></button>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center gap-[20px] list-none">
                    <Link to="/myCart">
                        <button className="btn btn-xs ">
                            <div className="badge"><AiOutlineShoppingCart className="text-[#008ECC]" />+{cart.length}</div>
                        </button>
                    </Link>
                    {
                        user ?
                            <Link>
                                <button onClick={handelLogOut} className="flex items-center gap-1 btn btn-outline btn-info"><AiOutlineUser className="text-[#008ECC]" />LogOut</button>
                            </Link>
                            :
                            <Link to="logIn">
                                <li className="flex items-center gap-1"><AiOutlineUser className="text-[#008ECC]" />Sing In</li>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;