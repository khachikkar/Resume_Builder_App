import React, {useContext, useEffect, useState} from "react";
import {Input} from "antd";
import {ResumeContext} from "../../context";
import "./index.css"


const ProfileSection = () => {

const {setCollectdata} = useContext(ResumeContext)

const [name, setName] = useState("")
const [lastname, setLastname] = useState("")
const [phone, setPhone] = useState(0)
const [address, setAddress] = useState("")


    useEffect(() => {
        setCollectdata((prevData) => ({
            ...prevData,
            profile: { name, lastname, phone, address },
        }));
    }, [name, lastname, phone, address, setCollectdata]);


    return (
        <div className="profile-section">
            <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="Last name"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Phone Number"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                style={{fontSize: "16px"}}
            />
        </div>
    )
}

export default ProfileSection;