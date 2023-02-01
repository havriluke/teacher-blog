import React, { useEffect, useState } from 'react'
import './quote.scss'
import { quotes } from '../../utils/quotes'
import arrowRight from '../../assets/icons/font-color/arrow-right.svg'
import arrowLeft from '../../assets/icons/font-color/arrow-left.svg'
import quoteIcon from '../../assets/icons/base-color/quote.png'

const Quote = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPressed, setIsPressed] = useState(false)

    let timeoutObj = null
    useEffect(() => {
        if (activeIndex <= -1) setActiveIndex(quotes.length - 1)
        else if (activeIndex >= quotes.length) setActiveIndex(0)
        if (isPressed) return
        timeoutObj = setTimeout(() => {
            setActiveIndex(activeIndex + 1)
        }, 1000 * 10)
    }, [activeIndex])

    const turnFunc = (dirr) => {
        clearTimeout(timeoutObj)
        setIsPressed(true)
        setActiveIndex(activeIndex + dirr)
    }

    return (
        <div className='quotes container'>
            
            <div className="symbols">
                <div className="symbols-wrapper">
                    <img src={quoteIcon} />
                    <img src={quoteIcon} />
                </div>
            </div>

            <div className="controls">
                <img src={arrowLeft} onClick={() => turnFunc(-1)} />
                <div className="dots">
                    {quotes.map((item, index) => {
                        return <div key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></div>
                    })}
                </div>
                <img src={arrowRight} onClick={() => turnFunc(1)} />
            </div>
            
            <div className="quote component">
                {quotes.map((item, index) => {
                    return <div key={index} className={`content ${activeIndex === index ? 'active' : ''}`}>
                        <div className="photo"
                            style={{backgroundImage: `url(${item.photo})`}}
                        ></div>
                        <div className="text-content">
                            <div className="text">
                                {item.text.map((str, i) => {
                                    return <span key={i}>{str}</span>
                                })}
                            </div>
                            <div className="author">
                                {item.author}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            

            

            
        </div>
    )
}

export default Quote