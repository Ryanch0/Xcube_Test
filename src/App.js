import React from 'react'
import LoginForm from './atomic/layouts/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './atomic/layouts/DetailPage'

export default props => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
                <Route path='/Xcube_Test/' element={<LoginForm/>}/>
                <Route path='/Xcube_Test/detail' element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}