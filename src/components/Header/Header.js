import React from 'react'
import data from '../../data/data.json'

const menu = data.main_menu

const Header = () => {

    return (
        <div className='container'>
            <div>

            </div>
            <div>
                <ul>
                    {Object.keys(menu).map(
                        (value, index) => menu[value].url != null && (
                            <li key={index} className="nav-item active">
                                <a className="nav-link" href={menu[value].url}>
                                    {menu[value].name}{" "}
                                </a>
                            </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header
