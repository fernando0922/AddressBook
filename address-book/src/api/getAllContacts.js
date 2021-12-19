import axios from "axios";
import { getUserId } from "../service/Strorage";

export const getAllContacts = () => {
  const userId = getUserId();
  var config = {
    method: "get",
    url: `http://localhost:3001/contacts?OwnerId=${userId}`,
    headers: {},
  };

  return axios(config)
    .then((response) => JSON.stringify(response))
    .catch((e) => console.log(e));
};
