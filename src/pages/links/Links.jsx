import React from 'react'
import Directory from '../../components/directory/Directory'
import Panel from '../../components/panel/Panel'
import { links } from '../../utils/links'
import './links.scss'

const Links = () => {
  return (
    <div className='links container'>

      <Panel title={'Посилання'} />

      <div className="content component">
        {links.map((item, index) => {
          return <Directory key={index} item={item} isOpen={true}/>
        })}
      </div>
    </div>
  )
}

export default Links