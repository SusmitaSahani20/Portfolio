import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Layout