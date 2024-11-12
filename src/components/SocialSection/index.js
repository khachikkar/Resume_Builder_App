import React, {useEffect, useState, useContext} from 'react';
import "./index.css"
import {Input} from "antd";
import {ResumeContext} from "../../context";


const SocialSection = ()=>{

    const {setCollectdata} = useContext(ResumeContext)



    const [fb, setFb] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [other, setOther] = useState("");


    useEffect(() => {
        setCollectdata((prevData) => ({
            ...prevData,
            social: { fb, linkedin, other },
        }));
    }, [fb, linkedin, other, setCollectdata]);

    return (
        <div className="social-section">
            <label>Facebook Link</label>
            <Input
                onChange={(e) => setFb(e.target.value)}
                type="text"
                placeholder="FaceBook Link"
                style={{fontSize: "16px"}}
            />


            <label>LinkedIn Link</label>
            <Input
                onChange={(e) => setLinkedin(e.target.value)}
                type="text"
                placeholder="LinkedIn Link"
                style={{fontSize: "16px"}}
            />


            <label>Any Other Link</label>
            <Input
                onChange={(e) => setOther(e.target.value)}
                type="text"
                placeholder="ex github, behance"
                style={{fontSize: "16px"}}
            />



        </div>
    )
}


export default SocialSection