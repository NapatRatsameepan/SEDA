import React from 'react'
import '../styles/Notification.css'

import Bell from '../assets/Bell.svg'
import NotiBell from '../assets/NotiBell.svg'

function Notification() {
    return (
        <div className="notification-container">
            <img src={Bell} alt="" />
            <img src={NotiBell} alt="" />
        </div>
    )
}

export default Notification