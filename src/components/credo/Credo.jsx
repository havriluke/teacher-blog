import React from 'react'
import './credo.scss'

const Credo = (props) => {

    return (
        <div className='credo component'>

            <div className="title">{props.title}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Credo