import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Input, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons/lib/icons";
import { addUser } from "../../../api/addUser";

const AddModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [userInformation, setuserInformation] = useState({
    First_Name: "",
    Last_Name: "",
    Birthday: "",
    Description: "",
    Email_one: "",
    Email_two: "",
    Phones_Mobile: "",
    Phones_Home: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    addUser(userInformation)
      .then((a) => {
        if (JSON.parse(a)["status"] === 201) {
          setIsModalVisible(false);
          window.location.reload();
        } else {
          alert("ERROR OCCURED")
        }
      })
      .catch((e) => console.log(e));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        style={{ backgroundColor: "#0076e3", color: "white" }}
        onClick={showModal}
      >
        ADD CONTACT
      </Button>
      <Modal
        title="ADD NEW CONTACT "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="SAVE"
      >
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
              placeholder="Home Number"
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

export default AddModal;
