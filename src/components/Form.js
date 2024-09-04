import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import '../css/Form.css'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginFailed, loginSuccess } from "../redux/actions/authActions"
import { loginUser } from "../services/api"

function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await loginUser(email, password)
            dispatch(loginSuccess(token))
            sessionStorage.setItem("token", token)
            if (rememberMe) {
                localStorage.setItem("token", token)
            }
            navigate('/profile')
        } catch (error) {
            dispatch(loginFailed(error.message))
        }
    }
    return (
        <section className="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={email} onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='input-remember'>
                    <input id='remember-me' type='checkbox' checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <label htmlFor='remember-me'>Remember me</label>
                </div>
                <button className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default Form
