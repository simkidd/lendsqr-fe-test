import React, { useState } from 'react';
import './filterSort.scss';

const FilterSortComp = ({ filterUsers, setFilteredUsers, users, setIsFilterOpen }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        orgName: '',
        userName: '',
        email: '',
        createdAt: '',
        phoneNumber: '',
        status: '',
    });

    const handleOptionChange = (e) => {
        setSelectedOptions({
            ...selectedOptions,
            [e.target.id]: e.target.value,
        });
    };

    const handleSelectChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.toLowerCase();

        setSelectedOptions({
            ...selectedOptions,
            [name]: value
        });
    };

    const handleFilterClick = () => {
        const filteredUsers = filterUsers(selectedOptions);
        setFilteredUsers(filteredUsers);
        setIsFilterOpen(false);

        // if (filteredUsers.length === 0) {
        //     alert('No results found.');

        // }
    };

    const handleResetClick = () => {
        setSelectedOptions({
            orgName: '',
            userName: '',
            email: '',
            createdAt: '',
            phoneNumber: '',
            status: '',
        });
        setFilteredUsers(users);
    };

    return (
        <div className='filter-container'>
            <div className='filter-options'>
                <label htmlFor='organization'>Organization:</label>
                <input type='text' id='orgName' value={selectedOptions.orgName} onChange={handleOptionChange} />

                <label htmlFor='username'>Username:</label>
                <input type='text' id='userName' value={selectedOptions.userName} onChange={handleOptionChange} />

                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' value={selectedOptions.email} onChange={handleOptionChange} />

                <label htmlFor='date'>Date:</label>
                <input type='date' id='createdAt' value={selectedOptions.createdAt} onChange={handleOptionChange} />

                <label htmlFor='phone'>Phone Number:</label>
                <input type='text' id='phoneNumber' value={selectedOptions.phoneNumber} onChange={handleOptionChange} />

                <label htmlFor='status'>Status:</label>
                <select id='status' value={selectedOptions.status} onChange={handleSelectChange}>
                    <option value=''>All</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                </select>
            </div>
            <div className='filter-buttons'>
                <button onClick={handleResetClick}>Reset</button>
                <button onClick={handleFilterClick}>Filter</button>
            </div>
        </div>
    );
};

export default FilterSortComp;
