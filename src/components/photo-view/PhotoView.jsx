
import React, { useEffect, useState } from 'react'
import './photo-view.scss'
import closeIcon from '../../assets/icons/white-color/close.svg'
import rArrowIcon from '../../assets/icons/white-color/arrow-right.svg'
import lArrowIcon from '../../assets/icons/white-color/arrow-left.svg'
import useSlideEvent from '../../hooks/useSlideEvent'

const PhotoView = (props) => {
    const [item, setItem] = useState(null)
    const [controlsActive, setControlsActive] = useState(false)
    const [photoActive, setPhotoActive] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const mousemove = () => {
        if (controlsActive) return
        setControlsActive(true)
        setTimeout(() => {
            setControlsActive(false)
        }, 1000 * 3.5)
    }

    useEffect(() => {
        if (!props.active) {
            setItem(null)
            setPhotoActive(0)
            setIsFullscreen(false)
            return
        }
        setItem(props.items[props.index])
    }, [props.active])

    const closeFunc = () => {
        props.closeFunc()
    }

    useSlideEvent(()=>{}, ()=>{}, () => {
        if (photoActive <= 0) return
        setPhotoActive(photoActive-1)
    }, () => {
        if (photoActive >= item.photos.length-1) return
        setPhotoActive(photoActive+1)
    }, props.active)

    return (
        <>
        {!!item && <div onMouseMove={mousemove} onClick={mousemove} className={`photo-view ${isFullscreen || window.screenX < 600 ? 'fullscreen' : ''}`}>
            <div className="slides" style={{transform: `translateX(-${photoActive*100}vw)`}}>

                {item.photos.map((photo, index) => {
                    return <div key={index} className='slide'>
                        <div onClick={() => setIsFullscreen(!isFullscreen)} className="photo"><img src={photo}/></div>
                    </div>
                })}
            </div>
                        
            <div className={`controls ${controlsActive ? 'active' : ''}`}>
                <div className="close" onClick={closeFunc}><img src={closeIcon} /></div>
                <div className="count">{photoActive+1} / {item.photos.length}</div>
                <div className="text-content">
                    <span>{item.descr}</span>
                    <span>{item.date}</span>
                </div>
                {photoActive < item.photos.length-1 && <div className="arrow r" onClick={() => setPhotoActive(photoActive+1)}><img src={rArrowIcon}/></div>}
                {photoActive > 0 && <div className="arrow l" onClick={() => setPhotoActive(photoActive-1)}><img src={lArrowIcon}/></div>}
            </div>
        </div>}
        </>
        
    )
}

export default PhotoView