import React from 'react'
import '../styles/LanguageSwitch.css'

import UkFlag from '../assets/UkFlag.svg'
import ThaiFlag from '../assets/ThaiFlag.svg'

function LanguageSwitch() {
  return (
    <div className="switch-container">
        <img src={ThaiFlag} alt="" />
        <img src={UkFlag} alt="" />
    </div>
  )
}

export default LanguageSwitch