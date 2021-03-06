import React from 'react'
import Tilt from 'react-tilt'
import './Logo.styles.scss'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="brain ma4 mt0">
            <Tilt className="Tilt tilt-component" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img src={brain} alt="logo" /> </div>
            </Tilt>
        </div>
    )
}

export default Logo;
