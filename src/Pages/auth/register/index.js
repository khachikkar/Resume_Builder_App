import React, {useContext} from 'react';
import {Form, Flex, Button, Input} from "antd"
import {Link, useNavigate} from "react-router-dom";
import {ROUTE_CONSTANTS, passWalidation} from "../../../utils/constants/constants";
import "./index.css"

import {auth, db} from "../../../service/firebase/firebase";
import {doc, setDoc} from "firebase/firestore"
import {createUserWithEmailAndPassword} from "firebase/auth";
import {ResumeContext} from "../../../context";

const Register = ()=>{

const [form]=Form.useForm()
const navigate = useNavigate()
const {setIsAuth, isAuth} = useContext(ResumeContext);



const handleRegister = async(values)=>{
    const {name, lastname, email, password} = values;
    try{
      const resp =  await createUserWithEmailAndPassword(auth, email, password);
      const {uid} = resp.user
        const createDoc = doc(db, "regusers", uid)
        await setDoc(createDoc, {
            uid, name, lastname, email
        })
        navigate("/main");
    }catch (e){
        console.log(e)
    }
}

console.log(isAuth, "LLL")

    return (
        <div className="register-container">
            <Form layout="vertical" form={form} onFinish={handleRegister}>
                <Form.Item
                    label="First Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Firstname!",
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter Your Name" style={{fontSize: '16px'}}/>
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Lastname!",
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter Your Surname" style={{fontSize: '16px'}}/>
                </Form.Item>

                <Form.Item
                    label="Eamil"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}
                >
                    <Input type="text" placeholder="Enter Your Email" style={{fontSize: '16px'}}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    tooltip="Password must be 6-16 characters, including at least one number and one..."
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                        {
                            pattern: passWalidation,
                            message:
                                "Password must be 6-16 characters, including at least one number , one symbol, a minimum one uppercase and one lowercase letter",
                        },
                    ]}
                >
                    <Input.Password type="text" placeholder="Enter Your Password" style={{fontSize: '16px'}}/>
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    tooltip="Password must be 6-16 characters, including at least one number , one symbol, a minimum one uppercase and one lowercase letter"
                    dependencies={["password"]} // sa nayum e password i popoxutyany talis enq label i name vor nayi dran
                    rules={
                        [
                            {
                                required: true,
                                message: "Please input your Password!",
                            },

                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        new Error("The Password doesn't match")
                                    );
                                },
                            }),
                        ]
                        // ays funkcian ant i funkcia e vory confirm e anum pass0y getfieldvalue- confirmi miji gracn e , value dependencieic ekac value
                    }
                >
                    <Input.Password type="text" placeholder="Confirm Password" style={{fontSize: '16px'}}/>
                </Form.Item>

                <Flex wrap justify="center" align="center" gap="10px">
                    <Button
                        className='primaryButton'
                        style={{width: "100%"}}
                        type="primary"
                        htmlType="submit"
                        // loading={loading}
                    >
                        Register
                    </Button>


                    <Link to="/login">
                        <Button style={{width: "100%"}} type="Link">
                            Log In
                        </Button>
                    </Link>


                </Flex>
            </Form>
        </div>
    )
}

export default Register;