import React from 'react'
import './photo-item.scss'

const PhotoItem = (props) => {

    const openFunc = () => {
        props.clickFunc()
    }

    return (
        <div onClick={openFunc} className='photo-item component'>
            
            <div className="content">
                <div className="photo-content">
                    <div className="photo-count">{props.item.photos.length} фото</div>
                    <div className="photo-album">
                        {props.item.photos.map((url, index) => {
                            return <div key={index} style={{backgroundImage: `url(${url})`}}></div>
                        })}
                    </div>
                </div>

                <div className="text-content">
                    <span className="descr">{props.item.descr}</span>
                    <span className="date">{props.item.date}</span>
                </div>
            </div>
            

        </div>
    )
}

export default PhotoItem