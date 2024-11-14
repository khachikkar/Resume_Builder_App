import React, {useContext, useState} from 'react';
import "./index.css";
import {Tabs, Button, Flex} from 'antd';
import ProfileSection from "../../components/ProfileSection";
import EducationSection from "../../components/EducationSection";
import SkillSection from "../../components/SkillSection";
import ProjectSection from "../../components/ProjectSection";
import SocialSection from "../../components/SocialSection";
import {useNavigate} from "react-router-dom";

import {db} from "../../service/firebase/firebase";
import {doc, updateDoc} from "firebase/firestore";
import {ResumeContext} from "../../context";


const { TabPane } = Tabs;




const Builder = () => {
    // Track the current active tab
    const [activeTabKey, setActiveTabKey] = useState("1");
    const navigate = useNavigate()
    const {userProfileInfo:{uid}, collectdata, loading} = useContext(ResumeContext)


    console.log(loading, "IIII")


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
    const handleDataStore = async() =>{
        try{
            const userDocRef = doc(db, "regusers", uid)
            await updateDoc(userDocRef, collectdata);
            navigate("/main/builder/resume")
        }catch(e){
            console.log(e)
        }
    }



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

            <Flex gap="small" style={{ marginTop: "16px" }}>
                <Button onClick={handleBack} disabled={activeTabKey === "1"}>
                    Back
                </Button>
                <Button type="primary" onClick={handleNext} disabled={activeTabKey === "5"} style={{ marginLeft: "8px" }}>
                    Next
                </Button>
                <Button type="primary" onClick={handleDataStore} disabled={activeTabKey === "1"} >Finish</Button>
            </Flex>
        </div>
    );
}

export default Builder;
