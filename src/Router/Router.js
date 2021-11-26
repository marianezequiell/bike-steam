import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Team from '../Sections/Team'
import AboutUs from '../Sections/AboutUs'
import Contact from '../Sections/Contact'
import Home from '../Sections/Home'
import Aside from '../UI/Aside'
import SocialMedia from '../UI/SocialMedia'
import Footer from '../UI/Footer'
import Copyright from '../UI/Copyright'

const Router = () => {
    return (
        <>               
             <BrowserRouter>
                <div id="Page">
                    <SocialMedia />
                    <Routes>
                        <Route path="/about-us" element={<AboutUs />}/>
                        <Route path="/team" element={<Team />}/>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                    <Copyright />
                </div>
                <Aside />
            </BrowserRouter>
        </>
    )
}

export default Router