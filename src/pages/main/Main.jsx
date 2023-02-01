import React from 'react'
import Background from '../../components/background/Background'
import Calendar from '../../components/calendar/Calendar'
import Credo from '../../components/credo/Credo'
import Photos from '../../components/photos/Photos'
import Plates from '../../components/plates/Plates'
import Profile from '../../components/profile/Profile'
import Quote from '../../components/quote/Quote'
import './main.scss'

const Main = () => {
  return (
    <div className='main'>

      <Calendar />

      {/* <Background> */}
        <Profile />

        <div className="credos container">
          <Credo
            title={'Життєве кредо'}
            text={'Навіть сильний супротивник не здатен здолати маленький народ, який вміє свято берегти пам’ять предків і свою духовність.'}
          />
          <Credo
            title={'Педагогічне кредо'}
            text={'Не вчи камінь котитися, просто прийми перешкоду – і він сам покотиться...'}
          />
        </div>

        
      {/* </Background> */}

      <Photos />

      <Quote />

      <Plates />

    </div>
  )
}

export default Main