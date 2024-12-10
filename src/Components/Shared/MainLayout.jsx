import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Toaster></Toaster>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;