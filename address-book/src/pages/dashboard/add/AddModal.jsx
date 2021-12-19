import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons/lib/icons";

const AddModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        icon={<PlusOutlined />}
        style={{ backgroundColor: "#0076e3", color:"white" }}
        onClick={showModal}
      >
        ADD CONTACT
      </Button>
      <Modal
        title="EDIR CONTACT INFORMATION"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>YOU SURE ABOUT DELETING??</p>
      </Modal>
    </>
  );
};

export default AddModal;
