import React, {useContext, useState} from 'react';
import "./index.css";
import { Tabs, Button } from 'antd';
import ProfileSection from "../../components/ProfileSection";
import {ResumeContext} from "../../context";
import EducationSection from "../../components/EducationSection";

const { TabPane } = Tabs;

const Builder = () => {
    // Track the current active tab
    const [activeTabKey, setActiveTabKey] = useState("1");
    const {collectdata} = useContext(ResumeContext);


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


    console.log(collectdata, "YYY")


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
                    Content for Skills
                </TabPane>
                <TabPane tab="Projects Section" key="4">
                    Content for Projects
                </TabPane>
                <TabPane tab="Social Section" key="5">
                    Content for Social
                </TabPane>
            </Tabs>

            <div style={{ marginTop: "16px" }}>
                <Button onClick={handleBack} disabled={activeTabKey === "1"}>
                    Back
                </Button>
                <Button type="primary" onClick={handleNext} disabled={activeTabKey === "5"} style={{ marginLeft: "8px" }}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Builder;
