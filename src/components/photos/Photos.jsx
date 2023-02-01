import React from 'react'
import './photos.scss'
import PhotosWrapper from '../photos-wrapper/PhotosWrapper'
import { photolitopys } from '../../utils/photolitopys'
import {useNavigate} from 'react-router-dom'
import { PHOTOS_ROUTE } from '../../utils/consts'

const Photos = () => {
    const navigate = useNavigate(null)

    return (
        <div className='photos container'>

            <h2 className="title">Фотолітопис</h2>

            <PhotosWrapper items={photolitopys.slice(0, 2)} />
            
            <div className="button-wrapper">
                <button onClick={() => navigate(PHOTOS_ROUTE)} className="more"><span>Більше</span><span>{'>'}</span></button>
            </div>
            
        </div>
    )
}

export default Photos