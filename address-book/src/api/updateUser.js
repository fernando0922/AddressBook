import axios from "axios";
import { getUserId } from "../service/Strorage";

export const updateUser = (contactsData) => {
  var data = JSON.stringify({
    id: contactsData.id,
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
    CreatedDate: contactsData.CreatedDate,
    UpdatedDate: new Date().toISOString(),
  });

  var config = {
    method: 'put',
    url: `http://localhost:3001/contacts/${contactsData["id"]}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  return axios(config)
    .then((response) => JSON.stringify(response))
    .catch((e) => console.log(e));
};
