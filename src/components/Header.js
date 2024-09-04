import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import '../css/Header.css'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/actions/authActions"

function Header() {

  const isAuthenticated = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    sessionStorage.clear()
    localStorage.clear()
  }

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to='/'>
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <div className="connected">
              <Link className="main-nav-item" to='/profile'>
                <FontAwesomeIcon icon={faCircleUser} />
                Tony
              </Link>
              <Link className="main-nav-item" to='/' onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to='/login'>
              <FontAwesomeIcon icon={faCircleUser} />
              <p>Sign In</p>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header