import React, { useEffect } from "react";
import "./usersTable.scss";
import FilterIcon from "../../assets/icons/filter-results-button.png";
import { Link } from "react-router-dom";

const UsersTable = (props) => {
  const { users } = props;

  
  // useEffect(() => {
  //   const addUser = (user) => {
  //     const users = JSON.parse(localStorage.getItem("users")) || [];
  //     users.push(user);
  //     localStorage.setItem("users", JSON.stringify(users));
  //   };
  //   addUser();
  // }, []);

  // const getUserById = (id) =>{
  //   const users = JSON.parse(localStorage.getItem('users')) || []
  // }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              organization
              <img src={FilterIcon} alt="" />
            </th>
            <th>
              username
              <img src={FilterIcon} alt="" />
            </th>
            <th>
              email
              <img src={FilterIcon} alt="" />
            </th>
            <th>
              phone
              <img src={FilterIcon} alt="" />
            </th>
            <th>
              date joined
              <img src={FilterIcon} alt="" />
            </th>
            <th>
              status
              <img src={FilterIcon} alt="" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.orgName}</td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.userName}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  {new Intl.DateTimeFormat(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                  }).format(Date.parse(user.createdAt))}
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
