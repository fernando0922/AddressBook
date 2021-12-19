import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Modal, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons/lib/icons';
import { updateUser } from '../../../api/updateUser';

const EditModal = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [userInformation, setuserInformation] = useState({
    id:props.data["id"],
    First_Name: props.data["First_Name"],
    Last_Name: props.data["Last_Name"],
    Birthday: props.data["Birthday"],
    Description: props.data["Description"],
    Email_one: props.data["Emails"][0],
    Email_two: props.data["Emails"][1],
    Phones_Mobile: props.data["Phones"][0]["Phone_Number"],
    Phones_Home: props.data["Phones"][1]["Phone_Number"],
    CreatedDate:props.data["CreatedDate"]
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    updateUser(userInformation).then(a => {
      if(JSON.parse(a)["status"]===200){
        setIsModalVisible(false);
          window.location.reload();
      }else{
        alert("ERROR OCCURED")
      }
    })
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Tooltip title="Edit Contact">
      <EditOutlined onClick={showModal} style={{color:"#0076e3"}}/>
    </Tooltip>
      <Modal title={`Edit ContactID is ${userInformation.id}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Update">
      <div className="contact-add-container">
          <div style={{ marginRight: "10px" }}>
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="First Name"
              value={userInformation.First_Name}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  First_Name: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Last Name"
              value={userInformation.Last_Name}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Last_Name: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Date Of Birth in YYYY-MM-DD"
              value={userInformation.Birthday}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Birthday: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Short Description"
              value={userInformation.Description}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Description: event.target.value,
                })
              }
            />
          </div>

          <div>
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Email 1"
              value={userInformation.Email_one}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Email_one: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Email 2"
              value={userInformation.Email_two}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Email_two: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Mobile Number"
              value={userInformation.Phones_Mobile}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Phones_Mobile: event.target.value,
                })
              }
            />
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Home Phone Number"
              value={userInformation.Phones_Home}
              onChange={(event) =>
                setuserInformation({
                  ...userInformation,
                  Phones_Home: event.target.value,
                })
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditModal