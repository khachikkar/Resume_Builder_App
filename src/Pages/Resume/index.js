import React, {useContext, useEffect} from 'react';
import {ResumeContext} from "../../context";
import {Spin} from "antd";
import ResumeTemplate from "../../components/ResumeTemplate";


const Resume = () => {

    const {collectdata, setLoading, loading} = useContext(ResumeContext);

    useEffect(() => {
 const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds
        }, 3000);

        // Clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [setLoading]);





    console.log(collectdata)

    return (
        <div>

            {
                loading ? <Spin /> : <ResumeTemplate data={collectdata} />
            }

        </div>
    )
}

export default Resume