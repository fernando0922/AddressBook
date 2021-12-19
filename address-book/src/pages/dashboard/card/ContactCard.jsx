import React from "react";
import { Card } from "antd";

import "antd/dist/antd.css";
import {
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
  PhoneOutlined,
} from "@ant-design/icons/lib/icons";
import DeleteModal from "../delete/DeleteModal";
import EditModal from "../edit/EditModal";

const { Meta } = Card;

const ContactCard = (props) => {
  return (
    <Card
      style={{ width: 400, marginBottom: "10px", marginRight: "10px" }}
      bordered
      actions={[
        <EditModal key="edit" data={props.data}/>,
        <DeleteModal
          id={props.data["id"]}
          firstname={props.data["First_Name"]}
          lastname={props.data["Last_Name"]}
          description = {props.data["Description"]}
        />,
      ]}
    >
      <Meta
        style={{ textAlign: "justify" }}
        title={`${props.data["First_Name"]} ${props.data["Last_Name"]}`}
        description={`${props.data["First_Name"]} ${
          props.data["Last_Name"]
        } was born in ${props.data["Birthday"]} and is ${
          new Date().getFullYear() -
          new Date(props.data["Birthday"]).getFullYear()
        } years of age. In your words , "${props.data["Description"]}".`}
      />

      <div className="information-container">
        <div className="contact-Information">
          <div className="phone-information">
            {props.data["Phones"].map((a) => {
              if (a["Type"] === "Home") {
                return (
                  <p key={a["Phone_Number"]}>
                    <HomeOutlined /> {a["Phone_Number"]}
                  </p>
                );
              } else if (a["Type"] === "Mobile") {
                return (
                  <p key={a["Phone_Number"]}>
                    <MobileOutlined /> {a["Phone_Number"]}
                  </p>
                );
              } else {
                return (
                  <p key={a["Phone_Number"]}>
                    <PhoneOutlined /> {a["Phone_Number"]}
                  </p>
                );
              }
            })}
          </div>

          <div className="email-information">
            {props.data["Emails"].map((a) => (
              <p key={a}>
                <MailOutlined /> {a}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
