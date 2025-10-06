import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className='my-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
