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

import { ROUTE_CONSTANTS } from "./utils/constants/constants";
import MainLayout from "./Layout/MainLayout";
import MainPage from "./Pages/main";
import { ResumeContext } from "./context";
import { useState, useEffect } from "react";
import {useCallback} from "react";
import {doc, getDoc} from "firebase/firestore";
import {db, auth} from "./service/firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import Builder from "./Pages/General";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [userProfileInfo, setUserProfileInfo] = useState({})

    const [collectdata, setCollectdata] = useState({})


    const handleGetUserData = useCallback( async (uid)=>{
        const docRef = doc(db, "regusers", uid) // vercnum enq hamapatasxan uid ov datan
        const response = await getDoc(docRef)
        if(response.exists()){
            // console.log(response.data())
            setUserProfileInfo(response.data())
        }
    }, [])

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            user?.uid && handleGetUserData(user.uid)

// console.log(user)

            // setLoading(false)
            setIsAuth(Boolean(user))
            // console.log(user, ">>>>>>")
        })
    },[handleGetUserData])



    return (
        <div className="App">
            <ResumeContext.Provider value={{ isAuth, setIsAuth, userProfileInfo, collectdata, setCollectdata  }}>
                <RouterProvider

                    router={
                    createBrowserRouter(
                        createRoutesFromElements(
                            <Route path="/" element={<MainLayout />}>
                                {/* Redirect root path based on auth status */}
                                <Route path="/" element={isAuth ? <MainPage /> : <Navigate to="/login" />} />

                                {/* Restrict login and register pages to non-authenticated users */}
                                <Route path="login" element={isAuth ? <Navigate to="/main" /> : <Login />} />
                                <Route path="register" element={isAuth ? <Navigate to="/main" /> : <Register />} />

                                {/* Protected main page */}
                                <Route path="/main" element={isAuth ? <MainPage /> : <Navigate to="/login" />} />
                                <Route path="/main/builder" element={isAuth ? <Builder /> : <Navigate to="/login" />} />

                            </Route>
                        )
                    )
                } />
            </ResumeContext.Provider>
        </div>
    );
}

export default App;
