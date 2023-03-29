import React, { useEffect, useState } from "react";
import "./usersTable.scss";
import FilterIcon from "../../assets/icons/filter-results-button.png";
import axios from "axios";

const Api_Url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

const UsersTable = () => {
    const [users, setUsers]= useState([])

    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
                const res = await axios.get(Api_Url);
                const users = await res.data;
                setUsers(users)

                console.log(users);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers()
    },[])

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
          {users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.orgName}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{new Intl.DateTimeFormat(undefined,{
                              year: 'numeric',
                              month: 'short',
                              day: '2-digit',
                              hour:'numeric',
                              minute:'numeric'
                            }).format(Date.parse(user.createdAt))}</td>
                            <td></td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
