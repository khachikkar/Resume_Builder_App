import React, {useContext,  useState} from 'react';
import {Select} from "antd";
import {ResumeContext} from "../../context";

const SkillSection = ()=>{

    const [skills, setSkills] = useState([]);
    const {setCollectdata} = useContext(ResumeContext);


    const handleChange = (value) => {
        console.log( value, "KKK");
        setSkills(value);
        setCollectdata((prevData) => ({
            ...prevData,
            skills: value, // Directly set the skills array in collectdata
        }));
    };

console.log(skills, "my skills");




    return (
        <div style={{width:"500px"}} className="skillSection">
            <Select
                mode="tags"
                size="middle"
                placeholder="Please write your skills"
                onChange={handleChange}
                style={{
                    width: '100%',
                }}

            />
        </div>
    )
}

export default SkillSection