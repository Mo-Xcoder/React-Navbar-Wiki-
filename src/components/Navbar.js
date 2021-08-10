import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from './SideBarData';
import BTimg from '../images/BT.jpg'

function Navbar() {
    // Initialise the show sidebar Hook
    const [sidebar, setSideBar] = useState(false);

    /* Function to show/hide sidebar, used by "onClick={}" */
    const showSideBar = () => setSideBar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{ color: '#fff' }}> {/* icon styling */}
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar} /> {/* icon that shows sidebar using "showSideBar" */}
                </Link>
                <h1 className="MainTitle">JoJo Wikipedia</h1>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> {/* checks if sidebar is false, if false then call class "nav menu active," this interacts with the NavBar.css to show or hide the sidebar */}
                <ul className='nav-menu-items' onClick={showSideBar}> {/* this shows this sidebar by clicking icon */}
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose /> {/* close the sidebar, code for it is below  |
                                                                                                   \_/  */}
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
