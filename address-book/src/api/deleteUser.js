import axios from "axios";

export const deleteContact = (contactId) => {
  var config = {
    method: "delete",
    url: `http://localhost:3001/contacts/${contactId}`,
    headers: {},
  };

  return axios(config)
    .then((response) => JSON.stringify(response))
    .catch((e) => console.log(e));
};
