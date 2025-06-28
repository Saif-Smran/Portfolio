import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Add top padding to account for fixed navbar */}
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;