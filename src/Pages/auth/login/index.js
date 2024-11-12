import React, {useContext} from 'react';
import "./index.css"
import {Form, Input, Button, Flex, notification} from "antd"
import {Link, useNavigate} from "react-router-dom";

import {ROUTE_CONSTANTS} from "../../../utils/constants/constants";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../../service/firebase/firebase";
import {ResumeContext} from "../../../context";




const Login = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {setIsAuth, isAuth} = useContext(ResumeContext);


const handleLogin = async(values)=>{
try{
    const {email,password} = values;
    await signInWithEmailAndPassword(auth, email, password);
    form.resetFields();
    setIsAuth(true)

}catch (e){
    notification.error({
        message: e.message,
    })
}
}

console.log(isAuth, "isAuth")
    return (
        <div className="Login">

                <Form layout="vertical" form={form}  onFinish={handleLogin}>
                    <Form.Item
                        label="Email"
                        name="email"
                        tooltip="This field is for your Email"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter Your Email",
                            },
                        ]}
                    >
                        <Input
                            type="email"
                            placeholder="Email"
                            style={{fontSize: "16px"}}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please Enter Your Password",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" style={{fontSize: '16px'}}/>
                    </Form.Item>

                    <Flex wrap justify="flex-end" align="center" gap="10px">


                        <Button
                            className="primaryButton"
                            style={{width: "100%"}}
                            type="primary"
                            htmlType="submit"
                            // loading={loading}
                        >
                            Login
                        </Button>


                        <Link style={{width: "100%"}} to="/register">
                            <Button  style={{width: "100%"}} type="Link">
                                Create Account
                            </Button>
                        </Link>

                    </Flex>
                </Form>

        </div>
    )
}

export default Login;