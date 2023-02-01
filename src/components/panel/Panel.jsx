import React from 'react'
import {useNavigate} from 'react-router-dom'
import './panel.scss'
import arrowIcon from '../../assets/icons/font-color/arrow-left.svg'
import { MAIN_ROUTE } from '../../utils/consts'

const Panel = (props) => {
    const navigate = useNavigate(null)

    return (
        <div className='panel'>

            <div className="content">
                <div className="back" onClick={() => navigate(MAIN_ROUTE)}>
                    <img src={arrowIcon} />
                    <span>На головну</span>
                </div>
                <h1 className="title">{props.title}</h1>
            </div>
            
        </div>
    )
}

export default Panel