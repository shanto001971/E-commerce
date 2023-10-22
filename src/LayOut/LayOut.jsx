
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const LayOut = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default LayOut;