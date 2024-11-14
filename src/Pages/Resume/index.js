import React, {useContext, useEffect, useState} from 'react';
import {ResumeContext} from "../../context";
import {Spin} from "antd";
import ResumeTemplate from "../../components/ResumeTemplate";


const Resume = () => {


    const {dataloading, setDataloading, userProfileInfo, handleGetUserData} = useContext(ResumeContext);


    console.log(dataloading, "llllliiii");
setDataloading(false)




    return (
        <div>

            {
                dataloading ? <Spin /> : <ResumeTemplate userProfileInfo={userProfileInfo} />
            }

        </div>
    )
}

export default Resume