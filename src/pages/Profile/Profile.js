import User from '../../components/User'
import Account from '../../components/Account'
import './Profile.css'
function Profile() {
    return (
        <main className="main bg-dark">
            <User />
            <Account />
        </main>
    )
}

export default Profile