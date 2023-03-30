import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import UserCard from "../../components/userCard/UserCard";
import UsersTable from "../../components/usersTable/UsersTable";
import { UserCardData } from "../../data/UsersData";
import "./users.scss";

const Api_Url =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(Api_Url);
        const users = await res.data;
        setUsers(users);

        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  // useEffect(() => {
  //   const addUser = (user) => {
  //     const users = JSON.parse(localStorage.getItem("users")) || [];
  //     users.push(user);
  //     localStorage.setItem("users", JSON.stringify(users));
  //   };
  //   addUser();
  // }, []);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage)
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="users-wrapper">
      <h1>Users</h1>

      <div className="inner-wrapper">
        <div className="card-wrapper">
          {UserCardData.map((item) => {
            return <UserCard item={item} />;
          })}
        </div>
        <div>
          <div className="user-table-wrapper">
            <UsersTable users={visibleUsers} />
          </div>

          <div className="pages-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
