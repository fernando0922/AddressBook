import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";
import { deleteContact } from "../../../api/deleteUser";

const DeleteModal = ({ id, firstname, lastname, description }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    deleteContact(id)
      .then((a) => {
        if (JSON.parse(a)["status"] === 200) {
          setIsModalVisible(false);
          window.location.reload();
        } else {
          alert("ERROR OCCURED");
        }
      })
      .catch((e) => console.log(e));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Tooltip title="Delete Contact">
        <DeleteOutlined onClick={showModal} style={{ color: "#ff4d4f" }} />
      </Tooltip>
      <Modal
        title={`About to Delete ${firstname} contact, Are you sure ?`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
      >
        <p>
          Name : {firstname} {lastname}
        </p>
        <p>Description : {description}</p>
      </Modal>
    </>
  );
};

export default DeleteModal;
