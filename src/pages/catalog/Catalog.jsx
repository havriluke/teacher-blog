import React, { useState } from 'react'
import Directory from '../../components/directory/Directory'
import FileModal from '../../components/fileModal/FileModal'
import Panel from '../../components/panel/Panel'
import { catalog } from '../../utils/catalog'
import './catalog.scss'

const Catalog = () => {
  const [activeFile, setActiveFile] = useState(null)

  return (
    <div className='catalog container'>

      {!!activeFile && <FileModal file={activeFile} closeFunc={() => setActiveFile(null)}/>}

      <Panel title={'Каталог'} />
      
      <div className="content component">
        {catalog.map((item, index) => {
          return <Directory key={index} item={item} fileFunc={setActiveFile} isOpen={false} />
        })}
      </div>
      

    </div>
  )
}

export default Catalog