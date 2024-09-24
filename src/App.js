import React from 'react'
import LoginForm from './atomic/layouts/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './atomic/layouts/DetailPage'

export default props => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
                <Route path='/' element={<LoginForm/>}/>
                <Route path='/detail' element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}