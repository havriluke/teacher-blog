import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {deafultRoutes} from '../routes'
import { MAIN_ROUTE } from '../utils/consts'

const AppRouter = () => {
    return (
        <Routes>
            {deafultRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={Component}  />
            })}
            
            <Route path='*' element={<Navigate replace to={MAIN_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter