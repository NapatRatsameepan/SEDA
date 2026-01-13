import React, { useState } from 'react'
import '../styles/Nav.css'
import LanguageSwitch from './LanguageSwitch'
import Notification from './Notification'

import logo from '../assets/seda-logo.png'
import ThaiFlag from '../assets/ThaiFlag.svg'
import SearchIcon from '../assets/SearchIcon.svg'

function Nav() {

    const [menu, setMenu] = useState('news');
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [currentFlag, setCurrentFlag] = useState(ThaiFlag);

    const handleLanguageChange = (flag) => {setCurrentFlag(flag);};

    return (
        <header>
            <div className="nav-left">
                <img src={logo} className="logo" alt="SEDA logo" />
                <form className="search" onSubmit={(e) => e.preventDefault()}>
                    <input placeholder="ค้นหาที่นี้" />
                    <button type="button" className="search-icon" aria-label="Search">
                        <img src={SearchIcon} className="SearchIcon" alt="Search" />
                    </button>
                </form>
            </div>

            <nav className="nav-center" >
                <ul>
                    <li>
                        <a href="#"
                            onClick={() => setMenu('news')}
                            className={`menu-btn ${menu === 'news' ? 'active' : ''}`}
                        >
                            News
                        </a>
                    </li>
                    <span className="divider" ></span>
                    <li>
                        <a href="#"
                            onClick={() => setMenu('events')}
                            className={`menu-btn ${menu === 'events' ? 'active' : ''}`}
                        >
                            Events
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="nav-right">
                <button className="search-icon-mobile">
                    <img src={SearchIcon} className="SearchIcon" />
                </button>
                <div className="lang-container">
                    <button className="lang" onClick={() => setIsLangOpen(!isLangOpen)}>
                        <img src={currentFlag} className="Thai" />
                    </button>
                    {isLangOpen &&
                        <div className="lang-popover">
                            <LanguageSwitch onSelectLanguage={handleLanguageChange}/>
                        </div>}
                </div>

                <div className="profile-container">
                    <button className="profile" onClick={() => setIsProfileOpen(!isProfileOpen)}></button>
                    {isProfileOpen &&
                        <div className="profile-popover">
                            <Notification />
                        </div>}
                </div>
            </div>
        </header>
    )
}

export default Nav