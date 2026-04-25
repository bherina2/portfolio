import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Mobile/Header'
import Sidebar1 from './components/Mobile/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NavbarRight from './components/NavbarRight'
import NavbarBottom from './components/Mobile/NavbarBottom'

function App() {
  return (
    <>
      <div className="orb orb--primary"></div>
      <div className="orb orb--secondary"></div>
      <div className="orb-vignette"></div>
      {/* <Header />
      <Sidebar1 /> */}
      <div className="app-wrapper">
          <div className="app-layout">
            <Sidebar />
            <main className="main-content glass" id="mainContent">
              <Home />
              <About />
              <Testimonial />
              <Resume />
              <Portfolio />
              <Contact />
            </main>
            <NavbarRight />
          </div>
      </div>
      <NavbarBottom/>
    </>
  )
}

export default App
