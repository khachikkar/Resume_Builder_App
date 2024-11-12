import React from 'react';
import {Outlet} from "react-router-dom";
import MHeader from "../../components/header";
import "./index.css"

const MainLayout = () => {
    return (
        <div className="mainlayout">
           <MHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;