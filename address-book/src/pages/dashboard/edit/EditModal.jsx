import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons/lib/icons';

const EditModal = () => {
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
    <Tooltip title="Edit Contact">
      <EditOutlined onClick={showModal} style={{color:"#0076e3"}}/>
    </Tooltip>
      <Modal title="EDIR CONTACT INFORMATION" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>YOU SURE ABOUT DELETING??</p>
      </Modal>
    </>
  );
};

export default EditModal