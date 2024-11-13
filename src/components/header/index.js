import React, {useContext} from 'react';
import "./index.css"
import {ResumeContext} from "../../context";
import {Button} from "antd";
import {auth} from "../../service/firebase/firebase";
import { signOut } from 'firebase/auth'
import {useNavigate} from "react-router-dom";



const MHeader = () => {

    const {userProfileInfo, isAuth} = useContext(ResumeContext)
    const navigate = useNavigate()
    console.log(userProfileInfo)

    const handleSignOut = async()=>{
        // console.log("signout")
        try{
            await signOut(auth) // poxancum enq authy vor kaskana uma sign out anum
            // setRedirectToLogin(true);
        }catch(e){
            console.log(e, "sign out message")
        }
    }

    return (
        <div className="header">
            <h2 onClick={()=>navigate("/main")}>Resume Builder</h2>
            {
               isAuth ?  userProfileInfo.name+ " " +userProfileInfo.lastname  : ""
            }
            {
                isAuth ?    <Button onClick={handleSignOut}>Sign Out</Button> : ""
            }
        </div>

    )
}
export default MHeader