import React from 'react'
import './background.scss'

const Background = (props) => {

    return (
        <div className='background'>
            {props.children}
            <div className="squares">
                {[...Array(10).keys()].map((item, index) => {
                    return <div key={index} className="square"></div>
                })}
            </div>
        </div>
    )
}

export default Background