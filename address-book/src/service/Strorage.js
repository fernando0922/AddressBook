export const addToStorage = (name, value) => {
  sessionStorage.setItem(name, value);
};

export const checkExistance = (data) => {
  try {
    return sessionStorage.getItem(data).length >= 2;
  } catch (error) {
    return false;
  }
};

export const getUserName = () =>{
    try {
        return JSON.parse(getData("userData"))["username"]
    } catch (error) {
        return "";
    }
}

export const getUserId = () =>{
    try {
        return JSON.parse(getData("userData"))["id"]
    } catch (error) {
        return -1;
    }
}

 const getData = (data) => {
  try {
    return sessionStorage.getItem(data);
  } catch (error) {
    return "";
  }
};


export const logout = () => {
  sessionStorage.clear();
};
