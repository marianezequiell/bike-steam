import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Sections/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router