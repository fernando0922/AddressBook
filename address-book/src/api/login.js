import axios from "axios";

export const loginCheck = (username) => {
  var config = {
    method: "get",
    url: `http://localhost:3001/users?Username=${username}`,
    headers: {},
  };

  return axios(config)
    .then((response) => JSON.stringify(response.data))
    .catch((e) => console.log(e));
};
