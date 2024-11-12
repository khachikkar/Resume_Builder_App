import React, {useContext, useState} from 'react';
import "./index.css"
import EduBlock from "../EduBlock";
import {Button} from "antd";
import {ResumeContext} from "../../context";

const EducationSection = () => {

    const [eduBlocks, setEduBlocks] = useState([]);
    const {setCollectdata} = useContext(ResumeContext);






    const addEduBlock = () => {
        setEduBlocks([...eduBlocks, {}]); // Add a new block
    };


    const handleSave = (newEdu) => {
        setCollectdata((prevData) => ({
            ...prevData,
            education: [
                ...(prevData.education || []),
                newEdu,
            ],
        }));
    };



    return (
        <div className="education-section">

            {eduBlocks.map((_, index) => (
                <EduBlock key={index} onSave={handleSave} />
            ))}
            <Button onClick={addEduBlock}>Add Edu</Button>
        </div>
    )
}

export default EducationSection