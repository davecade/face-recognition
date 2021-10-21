import React from 'react'
import './Navigation.styles.scss'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav className="navbar">
                <p onClick={() => onRouteChange('signout')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
        <nav className="navbar">
            <p onClick={() => onRouteChange('signin')}>Sign In</p>
            <p onClick={() => onRouteChange('register')}>Register</p>
        </nav>
        )
    }
}

export default Navigation
