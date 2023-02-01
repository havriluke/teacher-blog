import React, { useEffect, useState } from 'react'
import './scroll-up.scss'
import arrowIcon from '../../assets/icons/font-color/arrow-right.svg'

const ScrollUp = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        window.self.addEventListener('scroll', () => {
          setActive(window.scrollY >= 500)
        })
      }, [])

      const clickFunc = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      }

    return (
        <div onClick={clickFunc} className={`scroll-up ${active ? 'active': ''}`}>
            <img src={arrowIcon} />
        </div>
    )
}

export default ScrollUp