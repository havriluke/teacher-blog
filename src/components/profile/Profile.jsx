import React from 'react'
import './profile.scss'
import fbIcon from '../../assets/icons/font-color/facebook.svg'
import tgIcon from '../../assets/icons/font-color/telegram.svg'
import featherIcon from '../../assets/icons/base-color/feather.png'

const Profile = () => {

    return (
        <div className='profile container'>

            <div className="content">
                
                {/* <div className="bg-icon">
                    <img src={featherIcon} />
                </div> */}
                <div className="photo"></div>
                <div className="text-content">
                    <h1 className="title">Гаврилюк Ірина Вікторівна</h1>
                    <div className='text'>
                        <span>Заслужений вчитель України.</span>
                        <span>Завуч Гришковецької гімназії. Хороша людина.</span>
                    </div>
                    <div className="social">
                        <img onClick={() => window.open('https://www.facebook.com/profile.php?id=100018870015455')} src={fbIcon} />
                        <img onClick={() => window.open('https://t.me/+380974940720')} src={tgIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile