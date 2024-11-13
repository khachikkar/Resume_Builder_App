import React from 'react';
import {Outlet} from "react-router-dom";
import MHeader from "../../components/header";
import "./index.css"
import Footer from "../../components/Footer";

const MainLayout = () => {
    return (
        <div className="mainlayout">
           <MHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;