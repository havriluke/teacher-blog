import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { CATALOG_ROUTE, PHOTOS_ROUTE, LINKS_ROUTE } from '../../utils/consts'
import './navlist.scss'
import menuIcon from '../../assets/icons/font-color/menu.svg'
import closeIcon from '../../assets/icons/font-color/close.svg'

const NavList = (props) => {
    const navigate = useNavigate(null)
    const [isActive, setIsActive] = useState(true)

    const navList = [
        { title: 'Фотолітопис', link: PHOTOS_ROUTE },
        { title: 'Каталог', link: CATALOG_ROUTE},
        { title: 'Посилання', link: LINKS_ROUTE },
    ]

    const navigateFunc = (link) => {
        // setIsActive(false)
        navigate(link)
    }

    return (
        <div className={`navlist ${isActive ? 'active' : ''}`}>
            {/* <div className="icon" onClick={() => setIsActive(!isActive)}>
                <img src={isActive ? closeIcon : menuIcon} />
            </div> */}
            <ul className='list'>
                {navList.map((li, index) => {
                    return <li key={index}>
                        <span onClick={() => navigateFunc(li.link)}>{li.title}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NavList