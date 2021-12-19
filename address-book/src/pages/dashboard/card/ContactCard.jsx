import React from "react";
import { Card } from "antd";

import "antd/dist/antd.css";
import { HomeOutlined, MailOutlined, MobileOutlined, PhoneOutlined } from "@ant-design/icons/lib/icons";
import DeleteModal from "../delete/DeleteModal";
import EditModal from "../edit/EditModal";

const { Meta } = Card;

const ContactCard = () => {
  return (
    <Card
      style={{ width: 400, marginBottom:"10px",marginRight:"10px"}}
      bordered
       actions={[<EditModal key="edit" />, <DeleteModal/>]}
    >
      <Meta
        style={{textAlign:"justify"}}
        title="First_name Last_name"
        description="First_name Last_name was botn in dd-mm-yyyy and is of xy years. In your words , 'This is the descriptionThis is the description.'"
      />

      <div className="information-container">
        <div className="contact-Information">
          <div className="phone-information">
            <p><MobileOutlined /> +912323223232323</p>
            <p><PhoneOutlined /> +912323223232323</p>
            <p><HomeOutlined /> +912323223232323</p>
          </div>

          <div className="email-information">
            <p><MailOutlined /> one@one.com</p>
            <p><MailOutlined /> one@one.com</p>
            <p><MailOutlined /> one@one.com</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
