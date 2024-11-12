import React, {useContext, useState} from 'react';
import "./index.css";
import { Tabs, Button } from 'antd';
import ProfileSection from "../../components/ProfileSection";
import {ResumeContext} from "../../context";
import EducationSection from "../../components/EducationSection";
import SkillSection from "../../components/SkillSection";
import ProjectSection from "../../components/ProjectSection";
import SocialSection from "../../components/SocialSection";
import {useNavigate} from "react-router-dom";

const { TabPane } = Tabs;

const Builder = () => {
    // Track the current active tab
    const [activeTabKey, setActiveTabKey] = useState("1");
    const navigate = useNavigate()


    // Function to handle tab change from user input
    const handleTabChange = (key) => {
        setActiveTabKey(key);
    };

    // Function to handle the "Next" button click
    const handleNext = () => {
        // Convert the active tab key to a number, increment it, and then convert it back to a string
        const nextTabKey = (parseInt(activeTabKey) + 1).toString();
        if (nextTabKey <= "5") {
            setActiveTabKey(nextTabKey);
        }
    };

    // Function to handle the "Back" button click
    const handleBack = () => {
        const prevTabKey = (parseInt(activeTabKey) - 1).toString();
        if (prevTabKey >= "1") {
            setActiveTabKey(prevTabKey);
        }
    };


    // console.table(collectdata, "YYY")


    return (
        <div className="generalCont">
            <h1>Resume Builder</h1>

            <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
                <TabPane tab="Profile Section" key="1">
                    <ProfileSection />
                </TabPane>
                <TabPane tab="Education Section" key="2">
                    <EducationSection />
                </TabPane>
                <TabPane tab="Skills Section" key="3">
                   <SkillSection />
                </TabPane>
                <TabPane tab="Projects Section" key="4">
                   <ProjectSection />
                </TabPane>
                <TabPane tab="Social Section" key="5">
                  <SocialSection />
                </TabPane>
            </Tabs>

            <div style={{ marginTop: "16px" }}>
                <Button onClick={handleBack} disabled={activeTabKey === "1"}>
                    Back
                </Button>
                <Button type="primary" onClick={handleNext} disabled={activeTabKey === "5"} style={{ marginLeft: "8px" }}>
                    Next
                </Button>
                <Button type="primary" onClick={()=>navigate("/main/builder/resume")} disabled={activeTabKey === "1"} >Finish</Button>
            </div>
        </div>
    );
}

export default Builder;
