import { useEffect, useState } from 'react'
import { userCardData } from '@/data/usersData';
import UserCard from './components/userCard';
import Pagination from './components/pagination';
import UsersTable from './components/usersTable';
import axios from 'axios';
import { SelectedOptions, User } from '@/types/types';
import './users.scss'

const Api_Url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem('__users');
    if (savedUsers) {
      return JSON.parse(savedUsers)
    } else {
      return [];
    }
  });
  const [loading, setLoading] = useState(false)

  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

  //To close the filter container when the filter button is clicked
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const res = await axios.get(Api_Url);
        const users = await res.data;
        setUsers(users);
        setFilteredUsers(users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem('__users', JSON.stringify(filteredUsers))
  }, [filteredUsers])

  // function to filter the users based on the selected options
  const filterUsers = (selectedOptions: SelectedOptions) => {
    let filteredUsers = users;

    // Apply the selected options to filter the list of users
    if (selectedOptions.orgName) {
      filteredUsers = filteredUsers.filter((user) => user.orgName.toLowerCase().includes(selectedOptions.orgName));
    }
    if (selectedOptions.userName) {
      filteredUsers = filteredUsers.filter((user) => user.userName.toLowerCase().includes(selectedOptions.userName));
    }
    if (selectedOptions.email) {
      filteredUsers = filteredUsers.filter((user) => user.email.toLowerCase().includes(selectedOptions.email));
    }
    if (selectedOptions.createdAt) {
      filteredUsers = filteredUsers.filter((user) => user.createdAt.includes(selectedOptions.createdAt));
    }
    if (selectedOptions.phoneNumber) {
      filteredUsers = filteredUsers.filter((user) => user.phoneNumber.toLowerCase().includes(selectedOptions.phoneNumber));
    }
    if (selectedOptions.status) {
      filteredUsers = filteredUsers.filter((user) => getStatus(user.lastActiveDate) === selectedOptions.status);
    }
    return filteredUsers;
  }

  // check user status
  const getStatus = (lastActiveDate: string): string => {
    const now = new Date();
    const lastActive = new Date(lastActiveDate);
    const diffInMs = now.getTime() - lastActive.getTime();
    const diffInMins = Math.round(diffInMs / (1000 * 60));
    if (diffInMins < 30) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="users-wrapper">
      <h1>Users</h1>

      <div className="inner-wrapper">
        <div className="card-wrapper">
          {userCardData.map((item, i) => (
            <UserCard item={item} key={i} />
          ))}
        </div>
        <>
          <div className="user-table-wrapper">
            <UsersTable
              users={visibleUsers}
              status={getStatus}
              setIsFilterOpen={setIsFilterOpen}
              isFilterOpen={isFilterOpen}
              filterUsers={filterUsers}
              setFilteredUsers={setFilteredUsers}
              loading={loading}
              startIndex={startIndex}
            />
          </div>

          <div className="pages-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              prev={handlePrev}
              next={handleNext}
              itemsPerPage={itemsPerPage}
              totalItems={filteredUsers.length}
            />
          </div>
        </>
      </div>
    </div>
  )
}

export default Users