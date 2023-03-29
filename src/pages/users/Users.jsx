import React from "react";
import UserCard from "../../components/userCard/UserCard";
import UsersTable from "../../components/usersTable/UsersTable";
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
        <div className="user-table-wrapper">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;
