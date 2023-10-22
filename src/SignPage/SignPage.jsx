import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const SignPage = () => {

    const { singUpUser, setUser, updateprofileUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const formData = { name, email, password }
        console.log(formData)

        singUpUser(email, password)
            .then(result => {
                updateprofileUser(name)
                    .then(() => {

                    })
                    .catch(() => { })
                setUser(result.user)
                if (result.user) {
                    navigate("/logIn")
                }
                setUser(result.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="h-[100vh] p-20">
            <div className="lg:flex justify-around h-[80vh] shadow-2xl rounded-3xl">
                <div className="w-full flex justify-center items-center rounded-s-2xl bg-slate-100">
                    <form onSubmit={handleSignin} className="lg:w-[60%] ">
                        <h1 className="mb-5 text-2xl">Create Account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        <button className="btn bg-[#FE492E] hover:bg-[#FE492E] mt-5 w-full text-white">Sign Up</button>
                    </form>
                </div>

                <div className="w-full flex justify-center items-center bg-[#FE492E] rounded-e-3xl">
                    <div className="text-white">
                        <h1 className="text-3xl">Welcome Back</h1>
                        <p>
                            To keep connected with us please login
                            <br />
                            With your personal information
                        </p>
                        <Link to="/login"><button className="btn bg-[#FE492E] mt-5 w-28 hover:bg-[#FE492E]  text-white">Log In</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignPage;