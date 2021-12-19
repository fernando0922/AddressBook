import axios from "axios";
import { getUserId } from "../service/Strorage";

export const addUser = (contactsData) => {
  var data = JSON.stringify({
    id: parseInt(Math.random() * 10000),
    First_Name: contactsData.First_Name,
    Last_Name: contactsData.Last_Name,
    Birthday: contactsData.Birthday,
    Description: contactsData.Description,
    Emails: [contactsData.Email_one, contactsData.Email_two],
    Phones: [
      {
        Type: "Mobile",
        Phone_Number: contactsData.Phones_Mobile,
      },
      {
        Type: "Home",
        Phone_Number: contactsData.Phones_Home,
      },
    ],
    OwnerId: getUserId(),
    CreatedDate: new Date().toISOString(),
    UpdatedDate: new Date().toISOString(),
  });

  var config = {
    method: "post",
    url: "http://localhost:3001/contacts",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then((response) => JSON.stringify(response))
    .catch((e) => console.log(e));
};
