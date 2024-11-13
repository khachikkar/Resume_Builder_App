import './App.css';
import Login from '../src/Pages/auth/login';
import Register from '../src/Pages/auth/register';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";


import {ConfigProvider} from "antd"

import MainLayout from "./Layout/MainLayout";
import MainPage from "./Pages/main";
import { ResumeContext } from "./context";
import { useState, useEffect, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "./service/firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import Builder from "./Pages/General";
import Resume from "./Pages/Resume";

function App() {

    const theme = {
        token: {
            colorPrimary: '#4CAF50', // Set primary color
            colorPrimaryHover: '#45a049', // Set primary hover color
        }
    };


    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true); // Initial loading state for app loading
    const [userProfileInfo, setUserProfileInfo] = useState({});
    const [collectdata, setCollectdata] = useState({});

    const saveLastVisitedRoute = (pathname) => {
        localStorage.setItem("lastVisitedRoute", pathname);
    };
    // Check and get the last visited route from localStorage
    const getLastVisitedRoute = () => {
        return localStorage.getItem("lastVisitedRoute") || "/";
    };
    // Fetch user data from Firestore when user is authenticated
    const handleGetUserData = useCallback(async (uid) => {
        try {
            const docRef = doc(db, "regusers", uid);
            const response = await getDoc(docRef);
            if (response.exists()) {
                setUserProfileInfo(response.data());
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }, []);
    useEffect(() => {
        // Listen to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                handleGetUserData(user.uid);
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
            setLoading(false); // Set loading to false once auth state is determined
        });

        return () => unsubscribe(); // Cleanup subscription on component unmount
    }, [handleGetUserData]);
    useEffect(() => {
        // Save the current path to localStorage whenever the route changes
        const handleRouteChange = () => {
            const currentPath = window.location.pathname;
            saveLastVisitedRoute(currentPath);
        };

        // Listen for route changes
        window.addEventListener("beforeunload", handleRouteChange);

        // Cleanup event listener
        return () => window.removeEventListener("beforeunload", handleRouteChange);
    }, []);
    const initialRoute = getLastVisitedRoute(); // Get the last visited route on app load
    if (loading) {
        // Show a loading spinner or message until loading completes
        return <div>Loading...</div>;
    }



    return (
        <ConfigProvider theme={theme}>
        <div className="App">
            <ResumeContext.Provider value={{ isAuth, setIsAuth, userProfileInfo, collectdata, setCollectdata, loading, setLoading }}>
                <RouterProvider
                    router={createBrowserRouter(
                        createRoutesFromElements(
                            <Route path="/" element={<MainLayout />}>
                                {/* Redirect root path based on auth status */}
                                <Route path="/" element={isAuth ? <Navigate to={initialRoute} /> : <Navigate to="/login" />} />

                                {/* Restrict login and register pages to non-authenticated users */}
                                <Route path="login" element={!isAuth ? <Login /> : <Navigate to={initialRoute} />} />
                                <Route path="register" element={!isAuth ? <Register /> : <Navigate to={initialRoute} />} />

                                {/* Protected main pages */}
                                <Route path="/main" element={isAuth ? <MainPage /> : <Navigate to="/login" />} />
                                <Route path="/main/builder" element={isAuth ? <Builder /> : <Navigate to="/login" />} />
                                <Route path="/main/builder/resume" element={isAuth ? <Resume /> : <Navigate to="/login" />} />
                            </Route>
                        )
                    )}
                />
            </ResumeContext.Provider>
        </div>
    </ConfigProvider>
    );
}

export default App;
