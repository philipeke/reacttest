import './ProfileDropDown.css'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import LocalStorage from '../../../shared/cache/LocalStorage'

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem(LocalStorage.username)
        history.push(RoutingPath.homeView)
    }

    return (
        <div className='profileDropDownWrapper'>
            <span>Firstname Lastname</span> <br />
            <span>Email@Email.Email</span> <br />
            <hr />
            <span onClick={() => history.push(RoutingPath.profileView)}>Profile</span> <br />
            <span onClick={() => history.push(RoutingPath.settingsView)}>Settings</span> <br />
            <span>Cart</span> <br />
            <span onClick={() => logout()}>Logout</span> <br />
        </div>
    )
}

//span eller paragraph p spelar egentligen ingen roll vad som används