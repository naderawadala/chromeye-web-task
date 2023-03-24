import React, { useState } from 'react'
import data from '../../data/data.json'
import './header.css'

const Header = () => {
    const menu = data.main_menu

    const [showNav, toggleShowNav] = useState(false)
    const [activeNav, setActiveNav] = useState("/")

    return (
        <header className='container'>
            <nav>
                {/* can't get svg to work <svg width="50px" height="50px" xmlns={data.company_data.logo}></svg> */}
                <img src={data.company_data.logo} />
                <div className={showNav ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className='nav_list grid'>
                        {Object.keys(menu).map(
                            (value, index) => menu[value].url != null && (
                                <li key={index} className="nav_item">
                                    <a onClick={() => setActiveNav(menu[value].url)}
                                        href={menu[value].url}
                                        className={
                                            activeNav === menu[value].url ? "nav_link active-link" : "nav_link"
                                        }>
                                        {menu[value].name}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>

                    <i className="uil uil-times nav_close"
                        onClick={() => toggleShowNav(!showNav)}>
                    </i>
                </div>

                <div className="nav_toggle"
                    onClick={() => toggleShowNav(!showNav)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
