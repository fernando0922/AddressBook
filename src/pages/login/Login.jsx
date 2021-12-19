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

        <h3 className="login-heading">Address Book</h3>

      <div id="login-container">
        <Form
          name="basic"
          labelCol={{
            span: 32,
          }}
          wrapperCol={{
            span: 0,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 32,
            }}
            style={{ paddingLeft: "18%" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ textAlign: "center" }}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
