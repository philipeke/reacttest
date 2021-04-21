import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logo.svg'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'

export const DesktopNavigation = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const renderLogin = () => {
        if (authenticatedUser) {
            return <div className='signInButton'> <Profile /> </div>
        }
        return <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>

    }

    //Bättre skriva IF sats såhär
    const renderLogin2 = () => {
        //return CONDITION ? true : false
        return authenticatedUser
            ? <div className='signInButton'> <Profile /> </div>
            : <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
    }

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={Logotype}
                alt={'..error'}
                onClick={() => history.push(RoutingPath.homeView)} />
            <span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span className='accessoriesButton' onClick={() => history.push(RoutingPath.accessoriesView)}>Accessories</span>
            <span className='brandsButton' onClick={() => history.push(RoutingPath.brandsView)}>Brands</span>
            <span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>News</span>
            {renderLogin()}
        </div>
    )
}

