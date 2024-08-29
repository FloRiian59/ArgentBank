import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import '../css/Header.css'
function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to='/'>
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to='login'>
            <FontAwesomeIcon icon={faCircleUser} />
            <p>Sign In</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

/* <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav> */
