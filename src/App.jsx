import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Users from './pages/users/Users'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
        {/* <Route path='/users/:id' element={<UserDetails/>} /> */}
      </Routes>
    </Router>
  )
}

export default App