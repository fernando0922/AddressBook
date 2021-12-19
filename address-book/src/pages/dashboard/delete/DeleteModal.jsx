import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons/lib/icons';

const DeleteModal = () => {
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
    <Tooltip title="Delete Contact">
      <DeleteOutlined onClick={showModal} style={{color:"#ff4d4f"}}/>
    </Tooltip>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>YOU SURE ABOUT DELETING??</p>
      </Modal>
    </>
  );
};

export default DeleteModal