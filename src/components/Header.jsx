import React from 'react'
import { NavLink } from 'react-router-dom'
import LogIn from './LogIn.jsx'
import LoggedIn from './LoggedIn.jsx'



const Header = ({ user, loggedIn, login, logout }) => {

    return (<ul className="header">
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/about">Om</NavLink></li>


        {!loggedIn ? (<LogIn login={login} />) :
            (<>
            <li><NavLink to="/events">Events</NavLink></li>
            <div className='mx-4 mt-2' style={{float: 'right'}}><LoggedIn user={user} logout={logout} /></div>
                {user.username === "admin" ? (<li><NavLink to="/admin">Admin</NavLink></li>) : (<>
                    
                    
                </>)}
                
            </>)}
    </ul>
    )
}

export default Header;

