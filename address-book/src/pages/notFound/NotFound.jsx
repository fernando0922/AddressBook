import React from 'react'
import 'antd/dist/antd.css';
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    let navigate = useNavigate();

    return (
        <div className="one-data-container" id="not-found-container">
        <Result
        status="404"
        title="The page you visited does not exist."
        extra={<Button type="primary" onClick={()=>navigate("/")}>Back To Login</Button>}
        />
        </div>
    )
}

export default NotFound
