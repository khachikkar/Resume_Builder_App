import {Input, Button} from "antd";
import React, {useContext, useEffect, useState} from "react";
import {ResumeContext} from "../../context";
import "./index.css"




const EduBlock = ({onSave}) => {

const [course, setCourse] = useState("");
const [colage, setColage] = useState("");
const [gradyear, setGradYear] = useState("");



    const handleSave = () => {
        onSave({ course, colage, gradyear });
    };



    return (
        <div className="edu-block">
            <Input
                onChange={(e) => setCourse(e.target.value)}
                type="text"
                placeholder="Course Name"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setColage(e.target.value)}
                type="text"
                placeholder="Collage Name"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setGradYear(e.target.value)}
                type="number"
                placeholder="Start Year-End Year"
                style={{fontSize: "16px"}}
            />
            <Button type="primary" onClick={handleSave}>Save Education</Button>
        </div>
    )
}

export default EduBlock