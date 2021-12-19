import axios from "axios";
import { getUserId } from "../service/Strorage";

export const searchUser = (param) => {
    const userId = getUserId();
    var config = {
        method: 'get',
        url: `http://localhost:3001/contacts?OwnerId=${userId}&&q=${param}`,
        headers: { }
      };

  return axios(config)
    .then((response) => JSON.stringify(response))
    .catch((e) => console.log(e));
};
