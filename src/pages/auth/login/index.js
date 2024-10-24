import React, { useState } from "react";
import { Form, Input, Button,Flex,notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firbase";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import loginBanner from "../../../core/images/login-auth.jpg"

const Login = ({ setIsAuth }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      form.resetFields();
      setIsAuth(true)
    } catch (error) {
      notification.error({
        message:"Invalid Login Credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Sign in" banner = {loginBanner}>
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          tooltip="This field is for your Email"
          rules={[
            {
              required: true,
              message: "Pls enter your Eamil",
            },
          ]}
        >
          <Input type="email" placeholder="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Pls enter your Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

       <Flex align="flex-end" gap="10px" justify="flex-end">  
        <Button
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
          <Link to={ROUTE_CONSTANTS.REGISTER}>
            <Button  type="Link">
              Create Account
            </Button>
          </Link>
       </Flex>
      </Form>

    </AuthWrapper>
  );
};

export default Login;
