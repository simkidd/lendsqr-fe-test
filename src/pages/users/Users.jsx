import React from "react";
import UserCard from "../../components/userCard/UserCard";
import { UserCardData } from "../../data/UsersData";
import "./users.scss";

const Users = () => {
  return (
    <div className="users-wrapper">
      <h1>Users</h1>

      <div className="inner-wrapper">
        <div className="card-wrapper">
          {UserCardData.map((item) => {
            return <UserCard item={item} />;
          })}
        </div>
        <div className="user-table-wrapper">table is here..</div>
      </div>
    </div>
  );
};

export default Users;
