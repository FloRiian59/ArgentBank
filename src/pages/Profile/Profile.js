import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../../services/api'
import { userProfile } from '../../redux/actions/userActions'
import User from '../../components/User'
import Account from '../../components/Account'
import './Profile.css'

function Profile() {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    useEffect(() => {
        if (token) {
            const getUserData = async () => {
                try {
                    const userData = await fetchUserData(token)
                    dispatch(userProfile(userData))
                } catch (error) {
                    console.error("Erreur lors de la récupération des informations utilisateur", error)
                }
            }
            getUserData()
        } else {
            console.log("Token not available.")
        }
    }, [dispatch, token])

    return (
        <main className="main bg-dark">
            <User />
            <Account />
        </main>
    )
}

export default Profile