
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Layouts from './layouts/Layouts'
import Dashboard from './pages/dashboard'
import Users from './pages/users'
import UserDetails from './pages/userDetails/UserDetails'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts />} >
          <Route index element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App