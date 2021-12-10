import {NavLink} from 'react-router-dom'
import './Header.css'



const Header = () => {
    return (
        <header className='Header'>
            <nav className='Header-list'>
                <div className='container'>
                <ul className='Header__list'>
                    <div className='Header_list-items'>
                    <li>
                        <NavLink to='/'>Trending</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Movies'>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Series'>Series</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Search'>Search</NavLink>
                    </li>
                    </div>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;