import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE, LINKS_ROUTE } from '../../utils/consts'
import './plates.scss'

const Plates = () => {
    const navigate = useNavigate()

    const plates = [
        { title: 'Каталог', text: 'Сховище документів та презентацій', onclick: () => navigate(CATALOG_ROUTE) },
        { title: 'Посилання', text: 'Сховище посилань на ресурси', onclick: () => navigate(LINKS_ROUTE) }
    ]

    return (
        <div className='plates container'>
            
            {plates.map((plate, index) => {
                return <div key={index} className="plate component">
                    <div className="text-content">
                        <div className="title">{plate.title}</div>
                        <div className="text">{plate.text}</div>
                    </div>
                    <button onClick={plate.onclick}>Перейти</button>
                </div>
            })}

        </div>
    )
}

export default Plates