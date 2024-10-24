import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Input, Flex } from "antd";
import { auth,db } from "../../../services/firbase";
import { Link, useNavigate } from "react-router-dom";
import { setDoc,doc } from "firebase/firestore"
import { passWalidation,ROUTE_CONSTANTS,FIRSTORE_PATH_NAMES } from "../../../core/constants/constants";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import registerBanner from "../../../core/images/register-auth.jpg";

const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (values) => {
    console.log(values);
    
    setLoading(true);
    const { firstName,lastName,email, password } = values;
    try {
      const  response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      
      const { uid } = response.user
      const createdDoc = doc(db,FIRSTORE_PATH_NAMES.REGISTERED_USERS,uid)
      await setDoc(createdDoc, {
        uid,firstName,lastName,email
      })
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
          name="firstName"
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
          name="lastName"
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
