import { LogoutOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserName, logout } from "../../service/Strorage";

const Header = () => {

  let navigate = useNavigate()

  return (
    <Menu mode="horizontal" className="header">
      <Menu.Item
        key="mail"
        icon={<UserOutlined />}
        style={{ pointerEvents: "none", position: "absolute" }}
      >
        {getUserName().toUpperCase()}
      </Menu.Item>
      <Menu.Item key="app" icon={<LogoutOutlined />} onClick={() => {
        logout()
        navigate("/")
      }}>
        LOGOUT
      </Menu.Item>
    </Menu>
  );
};

export default Header;
