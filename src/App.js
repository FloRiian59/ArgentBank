import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './pages/Home/Home.js'
import Footer from './components/Footer.js'
import Login from './pages/Login/Login.js'
import Profile from './pages/Profile/Profile.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './redux/actions/authActions.js'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    if (token) {
      dispatch(loginSuccess(token))
    }
  })

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}