import React from 'react';
import "./index.css"
import {Tabs} from 'antd';

const {TabPane} = Tabs;


const Builder = () => {

    const handleTabChange = (key) => {
        console.log("Active tab key:", key);
    };


    return (
        <div className="generalCont">

            <h1>Resume Builder</h1>


            <Tabs defaultActiveKey="1" onChange={handleTabChange}>
                <TabPane
                    tab="Profile Section"
                    key="1"
                >




                </TabPane>


                <TabPane
                    tab="Education Section"
                    key="2"
                >
                    Content for Educations
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
            );
        </div>
    )
}

export default Builder