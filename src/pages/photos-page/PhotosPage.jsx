import React from 'react'
import Panel from '../../components/panel/Panel'
import PhotosWrapper from '../../components/photos-wrapper/PhotosWrapper'
import { photolitopys } from '../../utils/photolitopys'
import './photos-page.scss'

const PhotosPage = () => {
    return (
      <div className='photos-page container'>

        <Panel title={'Фотолітопис'} />

        <PhotosWrapper items={photolitopys} />

      </div>
    )
}

export default PhotosPage