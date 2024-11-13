import React, {useContext, useEffect, useState} from "react";
import {Input, Button, Upload} from "antd";
import {ResumeContext} from "../../context";
import { UploadOutlined } from '@ant-design/icons';
import "./index.css"


const ProfileSection = () => {

const {setCollectdata} = useContext(ResumeContext)

const [name, setName] = useState("")
const [lastname, setLastname] = useState("")
const [phone, setPhone] = useState(0)
const [address, setAddress] = useState("")
const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        setCollectdata((prevData) => ({
            ...prevData,
            profile: { name, lastname, phone, address },
        }));
    }, [name, lastname, phone, address, setCollectdata]);


    const handleUploadChange = (info) => {
        console.log(info)
        // Only proceed if a file is uploaded
        if (info.file.status === 'done') {
            // Create a new FileReader instance
            const reader = new FileReader();

            // Read the uploaded file as a Data URL
            reader.onload = () => {
                // Set the result (data URL) as the image URL
                setImageUrl(reader.result);
                console.log('Image URL:', reader.result); // Logs the Data URL to console
            };

            // Start reading the file as a Data URL
            reader.readAsDataURL(info.file.originFileObj);
        }
    };



    return (
        <div className="profile-sectionn">
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
            <Upload
                action="http://localhost:3001/main/builder"  // Specify the correct endpoint URL
                showUploadList={false}
                onChange={handleUploadChange}
                onError={(error) => {
                    console.error('Upload error:', error);
                }} >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <img src={imageUrl} />
        </div>
    )
}

export default ProfileSection;