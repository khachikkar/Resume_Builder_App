import {Input, Button} from "antd";
import React, {useContext, useEffect, useState} from "react";
import {ResumeContext} from "../../context";
import "./index.css"




const ProjBlock = ({onSave}) => {

    const [proj, setProj] = useState("");
    const [link, setLink] = useState("");
    const [descr, setDescr] = useState("");



    const handleSave = () => {
        onSave({ proj, link, descr });
    };



    return (
        <div className="edu-block">
            <Input
                onChange={(e) => setProj(e.target.value)}
                type="text"
                placeholder="Project Name"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="Link"
                style={{fontSize: "16px"}}
            />
            <Input
                onChange={(e) => setDescr(e.target.value)}
                type="text"
                placeholder="Description"
                style={{fontSize: "16px"}}
            />
            <Button type="primary" onClick={handleSave}>Save Project</Button>
        </div>
    )
}

export default ProjBlock