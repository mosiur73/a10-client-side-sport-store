import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Navbar></Navbar>
           <main style={{ padding: '1rem' }}>
                
           <Outlet></Outlet>
            </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;