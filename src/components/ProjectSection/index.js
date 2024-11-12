import EduBlock from "../EduBlock";
import {Button} from "antd";
import React, {useContext, useState} from "react";
import {ResumeContext} from "../../context";
import ProjBlock from "../ProjBlovk";

const ProjectSection = ()=>{


    const [projblocks, setProjblock] = useState([]);
    const {setCollectdata} = useContext(ResumeContext);


    const addProjblock = () => {
        setProjblock([...projblocks, {}]); // Add a new block
    };


    const handleSave = (newProj) => {
        setCollectdata((prevData) => ({
            ...prevData,
            projects: [
                ...(prevData.projects || []),
                newProj,
            ],
        }));
    };



    return (
        <div className="project">

            {projblocks.map((_, index) => (
                <ProjBlock key={index} onSave={handleSave} />
            ))}
            <Button onClick={addProjblock}>Add Project</Button>

        </div>
    )
}

export default ProjectSection