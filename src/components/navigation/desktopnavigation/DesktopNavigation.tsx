import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logo.svg'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
    const history = useHistory()

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={Logotype}
                alt={'..error'}
                onClick={() => history.push(RoutingPath.homeView)} />
            <span onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span onClick={() => history.push(RoutingPath.accessoriesView)}>Accessories</span>
            <span onClick={() => history.push(RoutingPath.brandsView)}>Brands</span>
            <span onClick={() => history.push(RoutingPath.newsView)}>News</span>
            <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
        </div>
    )
}

