import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FilterIcon from '@/assets/icons/filter-results-button.png'
import MoreVert from '@/assets/icons/more_vert.png';
import Eye from '@/assets/icons/eye.png'
import Blacklist from '@/assets/icons/np_delete-friend_3248001_000000 1.png'
import Activate from '@/assets/icons/np_user_2995993_000000 1.png'
import { User } from '@/types/types';
import FilterSortComp from './filterSortComp/FilterSortComp';
import './usersTable.scss'


interface IUsersTable {
  users: User[];
  status: (lastActiveDate: string) => string;
  setIsFilterOpen: (isOpen: boolean) => void;
  isFilterOpen: boolean;
  filterUsers: (selectedOptions: any) => User[];
  setFilteredUsers: (filteredUsers: User[]) => void;
  loading: boolean;
  startIndex: number
}

const UsersTable: React.FC<IUsersTable> = (props) => {
  const { users, status, setIsFilterOpen, isFilterOpen, filterUsers, setFilteredUsers, loading, startIndex } = props;

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate()

  const handleMoreOptionsClick = (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    setSelectedUser(user);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
      setSelectedUser(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  return (
    <div className="table-container">
      {loading ? (
        <h4 style={{ textAlign: 'center', padding: '30px' }}>Loading...</h4>
      ) : 
      users.length === 0 ? (
        <div className='no-results'>No results found</div>
      ) : (
        <div className="table-container-inner">
          <table>
            <thead>
              <tr>
                <th>
                  <div className='table-heading'>
                    S/No
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    organization
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" onClick={() => setIsFilterOpen(true)} />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    username
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    email address
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    phone
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    date joined
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className='table-heading'>
                    status
                    <div className="filter-icon">
                      <img src={FilterIcon} alt="" />
                    </div>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td>No results found</td>
                </tr>
              ):
                users.map((user, i) => {
                  return (
                    <tr key={user.id}>
                      <td style={{ width: '50px' }}>{startIndex + i + 1}</td>
                      <td style={{ width: '200px' }}>{user.orgName}</td>
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
                        <div
                          ref={optionsRef}
                          className='more-options'>
                          <div
                            className='more-btn'
                            onClick={(e) => handleMoreOptionsClick(e, user)}>
                            <img
                              src={MoreVert}
                              alt=""
                            />
                          </div>
                          {selectedUser && selectedUser.id === user.id && (
                            <ul className="options-list">
                              <li onClick={() => navigate(`/users/${user.id}`)}><img src={Eye} alt="" />View Details</li>
                              <li><img src={Blacklist} alt="" />Blacklist User</li>
                              <li><img src={Activate} alt="" />Activate User</li>
                            </ul>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })

              }
            </tbody>
          </table>
        </div>
      )}


      {isFilterOpen && (
        <FilterSortComp
          filterUsers={filterUsers}
          setFilteredUsers={setFilteredUsers}
          users={users}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      )}
    </div>
  )
}

export default UsersTable
