import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input, Flex } from "antd";
import { auth } from "../../../services/firbase";
import { passWalidation } from "../../../core/constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import registerBanner from "../../../core/images/register-auth.jpg";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (values) => {
    setLoading(true);
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(ROUTE_CONSTANTS.LOGIN);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Sign-up" banner={registerBanner}>
      <Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
          label="First Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your Last name!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your surname" />
        </Form.Item>

        <Form.Item
          label="Eamil"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Last email!",
            },
          ]}
        >
          <Input type="text" placeholder="enter your name" />
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
                "Password must be 6-16 characters, including at least one number and one...",
            },
          ]}
        >
          <Input.Password type="text" placeholder="enter your password" />
        </Form.Item>

        <Form.Item
          label="Config Password"
          name="confirm"
          dependencies={["password"]}
          tooltip="Password must be 6-16 characters, including at least one number and one..."
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match")
                );
              },
            }),
          ]}
        >
          <Input.Password type="text" placeholder="Config Password" />
        </Form.Item>
        <Flex align="flex-end" gap="10px" justify="flex-end">
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>

          <Link to={ROUTE_CONSTANTS.LOGIN}>
            <Button type="Link">Log In</Button>
          </Link>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Register;
