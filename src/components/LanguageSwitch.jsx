import React from 'react'
import '../styles/LanguageSwitch.css'

import UkFlag from '../assets/UkFlag.svg'
import ThaiFlag from '../assets/ThaiFlag.svg'

function LanguageSwitch({ onSelectLanguage }) {

  return (
    <div className="switch-container">
        <img src={ThaiFlag} alt="" onClick={() => onSelectLanguage(ThaiFlag)}/>
        <img src={UkFlag} alt="" onClick={() => onSelectLanguage(UkFlag)}/>
    </div>
  )
}

export default LanguageSwitch