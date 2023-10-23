
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const LayOut = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default LayOut;