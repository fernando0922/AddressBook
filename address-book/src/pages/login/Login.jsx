import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="one-data-container">

        <h3 id="login-heading">Address Book</h3>

      <div id="login-container">
        <Form
          name="basic"
          wrapperCol={{
            span: 32,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Username *"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password *"/>
          </Form.Item>

          <Form.Item
           style={{textAlign:"center"}}
          >
            <Button
              type="primary"
              htmlType="submit"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>

      <h5 id="login-error">Incorrect Username or Password. Try Again</h5>

    </div>
  );
};

export default Login;
