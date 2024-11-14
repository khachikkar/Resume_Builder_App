import React, { useContext, useEffect, useState } from "react";
import {Input, Button, Upload, Form} from "antd";
import { ResumeContext } from "../../context";
import "./index.css";



const ProfileSection = () => {
    const { setCollectdata } = useContext(ResumeContext);

    // Form fields state
    const [resumeName, setResumeName] = useState("");
    const [resumeLastName, setResumeLastname] = useState("");
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // Update context when any profile field changes
    useEffect(() => {
        setCollectdata((prevData) => ({
            ...prevData,
            profile: { resumeName, resumeLastName, phone, address, imageUrl },
        }));
    }, [resumeName, resumeLastName, phone, address, imageUrl, setCollectdata]);

    // Handle image upload


    return (
        <div className="profile-sectionn">
            <Input
                onChange={(e) => setResumeName(e.target.value)}
                type="text"
                placeholder="Name"
                style={{ fontSize: "16px" }}
            />
            <Input
                onChange={(e) => setResumeLastname(e.target.value)}
                type="text"
                placeholder="Last name"
                style={{ fontSize: "16px" }}
            />
            <Input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Phone Number"
                style={{ fontSize: "16px" }}
            />
            <Input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                style={{ fontSize: "16px" }}
            />
            <Input
                onChange={(e) => setImageUrl(e.target.value)}
                type="text"
                placeholder="Profile Image URL"
                style={{ fontSize: "16px" }}
            />


        </div>
    );
};

export default ProfileSection;
