import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./usersTable.scss";
import FilterSortComp from "../filterSort/FilterSortComp";
import FilterIcon from "../../assets/icons/filter-results-button.png";
import MoreVert from '../../assets/icons/more_vert.png';
import Eye from '../../assets/icons/eye.png'
import Blacklist from '../../assets/icons/np_delete-friend_3248001_000000 1.png'
import Activate from '../../assets/icons/np_user_2995993_000000 1.png'

const UsersTable = (props) => {
  const { users, status, setIsFilterOpen, isFilterOpen, filterUsers, setFilteredUsers } = props;

  const [selectedUser, setSelectedUser] = useState(false);
  const optionsRef = useRef(null);

  const handleMoreOptionsClick = (event, user) => {
    event.stopPropagation();
    setSelectedUser(user);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setSelectedUser(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              organization
              <img src={FilterIcon} alt="" onClick={() => setIsFilterOpen(!isFilterOpen)} />
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

        {users.length === 0 ? (
          <p className='no-results'>No results found</p>
        ) : (
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
                  <td>
                    <span
                      className={status(user.lastActiveDate) === 'Active' ? 'active' : 'inactive'}
                    >{status(user.lastActiveDate)}</span>
                  </td>
                  <td>
                    <div ref={optionsRef}>
                      <img
                        className="more-options"
                        src={MoreVert}
                        alt=""
                        onClick={(event) => handleMoreOptionsClick(event, user)}
                      />
                      {selectedUser && selectedUser.id === user.id && (
                        <ul className="options-list">
                          <li><img src={Eye} alt="" />View Details</li>
                          <li><img src={Blacklist} alt="" />Blacklist User</li>
                          <li><img src={Activate} alt="" />Activate User</li>
                        </ul>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>



      {isFilterOpen && (
        <FilterSortComp filterUsers={filterUsers} setFilteredUsers={setFilteredUsers} users={users} setIsFilterOpen={setIsFilterOpen} />
      )}
    </div>
  );
};

export default UsersTable;
