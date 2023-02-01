import React from 'react'
import './footer.scss'
import fbIcon from '../../assets/icons/font-color/facebook.svg'
import tgIcon from '../../assets/icons/font-color/telegram.svg'

const Footer = () => {

    return (
        <div className='footer'>
            
            {/* <div className="logo">
                <div className="label">Іринка Блог</div>
            </div> */}
            <div className="social">
                <img onClick={() => window.open('https://www.facebook.com/profile.php?id=100018870015455')} src={fbIcon} />
                <img onClick={() => window.open('https://t.me/+380974940720')} src={tgIcon} />
            </div>
        </div>
    )
}

export default Footer