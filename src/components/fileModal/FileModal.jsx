import React from 'react'
import './file-modal.scss'
import arrowIcon from '../../assets/icons/white-color/arrow-left.svg'

const FileModal = (props) => {

    // const linkpdf = 'https://drive.google.com/file/d/14RD9XxyV9gNMLCZF0iCceHwKpjFH5rG3/preview?embedded=true'

    // const linkpptx = 'https://docs.google.com/presentation/d/e/2PACX-1vQGNDA7mY33XC70SEA6Da2FjV0e1J9WQNkgArL9ubeKRF4uwg6sJRmksZKy4ioiEg/embed'

    return (
        <div className='file-modal'>
            
            <div className="controls">
                <div className="top">
                    <div className="back" onClick={() => props.closeFunc()}><img src={arrowIcon}/></div>
                    <div className="name">{props.file.name}</div>
                </div>
            </div>

            <div className="content">
                <iframe src={props.file.url} frameBorder={0}></iframe>
            </div>
        </div>
    )
}

export default FileModal