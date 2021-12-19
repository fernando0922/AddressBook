import React from "react";
import ContactCard from "./card/ContactCard";
import Header from "./Header";
import UserOperation from "./UserOperation";

const Dashboard = () => {
  return (
    <div className="home-container">
      <div className="nav-header">
        <Header />
      </div>

      <div className="user-operation">
        <UserOperation />
      </div>

      <div className="contact-list">
        {[1, 2, 3, 4, 5, 6, 7].map((a) => (
          <ContactCard key={a} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
