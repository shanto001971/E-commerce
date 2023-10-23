import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {

    const { LogInUser } = useContext(AuthContext)
    const navigate= useNavigate()

    const handleSignin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        LogInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (

        <div className="h-[100vh] p-20">
            <div className="lg:flex justify-around h-[80vh] shadow-2xl rounded-3xl">
                <div className="w-full flex justify-center items-center bg-[#FE492E] rounded-s-3xl">
                    <div className="text-white">
                        <h1 className="text-3xl">Hello, Friends</h1>
                        <p>
                            Enter your personal details to use all
                            <br />
                            of site features
                        </p>
                        <Link to="/SignUp"><button className="btn bg-[#FE492E] mt-5 w-28 hover:bg-[#FE492E]  text-white">Sign Up</button></Link>
                    </div>

                </div>
                <div className="w-full flex justify-center items-center rounded-e-2xl bg-slate-100">
                    <form onSubmit={handleSignin} className="lg:w-[60%] ">
                        <h1 className="text-3xl mb-5">LogIn Your Account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <button className="btn bg-[#FE492E] hover:bg-[#FE492E] mt-5 w-full text-white">Log In</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;