import React from 'react'
import './header.scss'

const Header = () => {

    return (

        <div className='header'>
            <div className="bg-image"></div>

            <div className="quote">
                <span className='stars'>* * *</span>
                <div className="text">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <span>Lorem ipsum dolor sit amet consectetur.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolorem!</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                </div>
                <span className="author">Kvas Taras</span>
            </div>
        </div>
        
    )
}

export default Header