import React, { useState } from 'react'
import './directory.scss'
import arrowIcon from '../../assets/icons/font-color/arrow-right.svg'
import linkIcon from '../../assets/icons/font-color/link.svg'
import fileIcon from '../../assets/icons/font-color/file.svg'

const Directory = (props) => {
    const [opened, setOpened] = useState(props.isOpen)

    const linkFunc = (link) => {
        window.open(link)
    }

    const fileFunc = (file) => {
        props.fileFunc(file)
    }

    return (
        <div className='directory item'>
            <div className="title" onClick={() => setOpened(!opened)}>
                <div>
                    <img src={arrowIcon} style={{transform: `rotate(${opened ? 90 : 0}deg)`}}/>
                    <span>{props.item.name}</span>
                </div>
            </div>

            {opened && <div className="items">
                {props.item.items.map((item, index) => {
                    if (item.type === 'folder') return <Directory key={index} item={item} fileFunc={props.fileFunc} isOpen={false}/>
                    else if (item.type === 'link') return <div key={index} className="link item">
                        <div className="title" onClick={() => linkFunc(item.url)}>
                            <div><img src={linkIcon} /><span>{item.name}</span></div>
                        </div>
                    </div>
                    else if (item.type === 'file') return <div key={index} className="file item">
                        <div className="title" onClick={() => fileFunc(item)}>
                            <div><img src={fileIcon} /><span>{item.name.split('.').slice(0, -1).join('.')}</span></div>
                            <div className="type">.{item.name.split('.').slice(-1)}</div>
                        </div>
                    </div>
                })}
            </div>}
        </div>
    )
}

export default Directory