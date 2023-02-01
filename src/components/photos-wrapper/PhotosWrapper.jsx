import React, { useState } from 'react'
import PhotoItem from '../photo-item/PhotoItem'
import PhotoView from '../photo-view/PhotoView'
import './photos-wrapper.scss'

const PhotosWrapper = (props) => {
    const [viewActive, setViewActive] = useState(-1)

    const closeFunc = () => {
        setViewActive(-1)
    }

    return (

        <>
        <PhotoView items={props.items} index={viewActive} active={viewActive >= 0} closeFunc={closeFunc} />
        <div className='photos-wrapper'>
            {props.items.map((item, index) => {
                return <PhotoItem
                    key={index}
                    clickFunc={() => setViewActive(index)}
                    item={item}
                />
            })}
        </div>
        </>
        
    )
}

export default PhotosWrapper