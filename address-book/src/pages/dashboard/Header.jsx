import { LogoutOutlined, UserOutlined } from '@ant-design/icons/lib/icons'
import { Menu } from 'antd'
import React from 'react'

const Header = () => {
    return (
        
        <Menu mode="horizontal" className='header'>
        <Menu.Item key="mail" icon={<UserOutlined />} style={{pointerEvents:"none",position:"absolute"}}>
          USERNAME
        </Menu.Item>
        <Menu.Item key="app" icon={<LogoutOutlined />}>
          LOGOUT
        </Menu.Item>
      </Menu>
     
    
    )
}

export default Header
