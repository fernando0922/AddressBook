import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import AddModal from "./add/AddModal";


const { Search } = Input;

const UserOperation = () => {
  const onSearch = (value) => console.log("value");

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
