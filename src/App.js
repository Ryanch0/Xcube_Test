import React from 'react'
import LoginForm from './atomic/layouts/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './atomic/molecules/SideBar'

export default props => {
    return (
        <BrowserRouter>
        <Routes>
                {/* <Route path='/' element={<LoginForm/>}/> */}
                <Route path='/' element={<SideBar/>}/>
                {/* <Route path='/detail' element/> */}
        </Routes>
        </BrowserRouter>
    )
}