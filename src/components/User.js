import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/User.css'
import { updateUserProfile } from '../services/api'
import { updateUsername } from '../redux/actions/userActions'

function User() {
    const token = useSelector((state) => state.auth.token)
    const userData = useSelector((state) => state.user.userData)

    const [display, setDisplay] = useState(true)
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const handleSubmitUsername = async (event) => {
        event.preventDefault();
        try {
            const updatedData = await updateUserProfile(token, userName)
            dispatch(updateUsername(updatedData.userName))
            setDisplay(!display)
        } catch (error) {
            console.error("Failed to update username:", error)
        }
    }
    return (
        <div className="header">
            {display ?
                <>
                    <h1>Welcome back<br />{userData.firstname} {userData.lastname}!</h1>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </>
                :
                <>
                    <h2>Edit user info</h2>
                    <form onSubmit={handleSubmitUsername}>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" defaultValue={userData.username} onChange={(event) => setUserName(event.target.value)} />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input type="text" id="firstname" defaultValue={userData.firstname}
                                disabled={true} />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastname" defaultValue={userData.lastname}
                                disabled={true} />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button" type="submit">Save</button>
                            <button className="edit-username-button" type="button" onClick={() => setDisplay(!display)}>Cancel</button>
                        </div>
                    </form>
                </>
            }
        </div>
    )
}

export default User
