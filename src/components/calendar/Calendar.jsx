import React, { useEffect, useState } from 'react'
import './calendar.scss'
import calendarIcon from '../../assets/icons/font-color/calendar.svg'
import { holidaysDates, holidaysNames } from '../../utils/calendar'

const Calendar = () => {
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [day, setDay] = useState('')
    const [holiday, setHoliday] = useState('')
    const [isWeekend, setIsWeekend] = useState(false)

    const [active, setActive] = useState(false)

    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота']

    const getFunc = () => {
        const today = new Date()
        setDate(String(today.getDate()).padStart(2, '0'))
        setMonth(String(today.getMonth() + 1).padStart(2, '0'))
        setYear(String(today.getFullYear()))
        setDay(days[today.getDay()])
        const fullDate = String(today.getDate()).padStart(2, '0') + '.' + String(today.getMonth() + 1).padStart(2, '0')
        const indexHoliday = holidaysDates.indexOf(fullDate)
        setHoliday(indexHoliday !== -1 ? holidaysNames[indexHoliday] : 'Свят немає')
        setIsWeekend(today.getDay() === 0 || today.getDay() === 6)
    }

    useEffect(() => {
        getFunc()
    }, [])

    return (
        <div className={`calendar ${active ? 'active' : ''}`}>
            
            <div className="content">

                <div className={`date-content ${isWeekend ? 'wknd' : ''}`}>
                    <div className="bar">
                        <div className="date">
                            <span>{date}</span>.<span>{month}</span>.<span>{year-2000}</span>
                        </div>
                        <div className='day'>{day}</div>
                    </div>
                    
                </div>
                

                <div onClick={() => setActive(!active)} className="opener">
                    <img src={calendarIcon} />
                </div>
            </div>

            <div className="holiday"><span>{holiday}</span></div>
        </div>
    )
}

export default Calendar