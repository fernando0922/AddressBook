import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import AddModal from "./add/AddModal";
import { searchUser } from "../../api/searchUser";

const { Search } = Input;

const UserOperation = (props) => {
  const onSearch = (value) => {
    searchUser(value)
      .then((a) => props.fromSearch(a))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="search-container">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          allowClear
          enterButton="Search"
        />
      </div>
      <AddModal />
    </>
  );
};

export default UserOperation;
