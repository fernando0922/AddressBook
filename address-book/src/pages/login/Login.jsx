import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Spin } from "antd";
import { loginCheck } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { addToStorage } from "../../service/Strorage";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [errorDisplay, setErrorDisplay] = useState(false);

  const onFinish = (values) => {
    setloading(true);
    loginCheck(values["username"])
      .then((a) => {
        setloading(false);
        addToStorage("userData", `{"id":${JSON.parse(a)[0]["ID"]},"username":"${JSON.parse(a)[0]["Username"]}"}`);
        navigate("/home")
      })
      .catch((e) => {
        setloading(false);
        setErrorDisplay(true);
      });
  };

  const onFinishFailed = (errorInfo) => {
    //in case any fields are empty
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
            <Input placeholder="Username *" />
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
            <Input.Password placeholder="Password *" />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              {loading ? <Spin /> : "LOGIN"}
            </Button>
          </Form.Item>
        </Form>
      </div>

      {errorDisplay ? (
        <h5 id="login-error">Incorrect Username or Password. Try Again</h5>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
