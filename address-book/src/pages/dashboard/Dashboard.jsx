import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkExistance } from "../../service/Strorage";
import ContactCard from "./card/ContactCard";
import Header from "./Header";
import UserOperation from "./UserOperation";

const Dashboard = () => {

  let navigate = useNavigate()

  useEffect(() => {

    if(!checkExistance("userData")){
        navigate("/")
    }
  
  }, [])

  return (
    <div className="home-container">
      <div className="nav-header">
        <Header />
      </div>

      <div className="user-operation">
        <UserOperation />
      </div>

      <div className="contact-list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1].map((a) => (
          <ContactCard key={a} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
