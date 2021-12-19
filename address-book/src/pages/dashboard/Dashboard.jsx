import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllContacts } from "../../api/getAllContacts";
import { checkExistance } from "../../service/Strorage";
import ContactCard from "./card/ContactCard";
import Header from "./Header";
import UserOperation from "./UserOperation";

const Dashboard = () => {
  let navigate = useNavigate();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!checkExistance("userData")) {
      navigate("/");
    }

    getAllContacts()
      .then((a) => {
        setContacts(a);
      })
      .catch((e) => {
        setContacts([]);
      });
  }, []);

  const fromSearch = (value) =>{
    setContacts(value)
  }

  return (
    <div className="home-container">
      <div className="nav-header">
        <Header />
      </div>

      <div className="user-operation">
        <UserOperation fromSearch = {fromSearch}/>
      </div>

      <div className="contact-list">
        {contacts.length < 1 ? (
          <Spin />
        ) : (
          JSON.parse(contacts)["data"].map((a) => <ContactCard key={a["id"]} data = {a}/>)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
