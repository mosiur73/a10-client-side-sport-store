import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
          <div className=''>
          <Navbar></Navbar>
          </div>
           <main className='mt-24  lg:ml-10' style={{ padding: '1rem' }}>
                
           <Outlet></Outlet>
            </main>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;