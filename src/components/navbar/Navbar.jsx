import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavList from '../navlist/NavList'
import './navbar.scss'
import logo from '../../assets/logo.png'
import { MAIN_ROUTE } from '../../utils/consts'
import ScrollUp from '../scroll-up/ScrollUp'

const Navbar = () => {
    const location = useLocation().pathname
    const navigate = useNavigate(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="navbar">
            
            <ScrollUp />
            {/* <div className="container content">
                <div className="logo" onClick={() => navigate(MAIN_ROUTE)}>
                    <img src={logo} />
                    <span>Іринка Блог</span>
                </div>
            </div> */}
            <NavList />
        </div>
    )
}

export default Navbar