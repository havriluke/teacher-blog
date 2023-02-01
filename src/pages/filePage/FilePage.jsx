import React, { useEffect, useRef, useState } from 'react'
import {useLocation} from 'react-router-dom'
import './file-page.scss'

const FilePage = () => {
    const location = useLocation().pathname
    const [fileId, setFileId] = useState('')
    const iframeRef = useRef(null)

    useEffect(() => {
        setFileId(location.split('/').slice(-1))
    }, [location])

    const generateLink = (id) => {
        return 'https://docs.google.com/document/d/e/' + id + '/pub?embedded=true'
    }

    function resizeIframe() {
        console.log(iframeRef.current.contentWindow.window);
        iframeRef.current.style.height = iframeRef.current.contentWindow.document.documentElement.scrollHeight + 'px';
    }

    //2PACX-1vQIUVFmXLWrpKV3mCccxf2J6n7JqbWFG0X4XUpfSIimt25MkjqOG_9pAaoYHApV2w

    return (
        <div className='file-page container'>
            
            {/* <div className="content component"> */}
                <iframe
                    frameBorder={0}
                    // ref={iframeRef}
                    // scrolling='no'
                    // overflow={'visible'}
                    // onLoad={resizeIframe}
                    src={generateLink(fileId)}
                    // width={900}
                ></iframe>
            {/* </div> */}

        </div>
    )
}

export default FilePage