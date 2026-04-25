import {React, useState} from 'react'

function NavbarBottom() {
  
  const [active, setActive] = useState('home');
    
  const handleClick = (section) => {
    setActive(section);

    const el = document.querySelector(`[data-section="${section}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bottom-nav glass">
      <div className="bottom-nav__inner">

        <button className={`bottom-nav__btn ${active === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')} data-nav="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Home
        </button>

        <button className={`bottom-nav__btn ${active === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')} data-nav="about">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          About
        </button>

        <button className={`bottom-nav__btn ${active === 'resume' ? 'active' : ''}`} onClick={() => handleClick('resume')}  data-nav="resume">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          Resume
        </button>

        <button className={`bottom-nav__btn ${active === 'portfolio' ? 'active' : ''}`} onClick={() => handleClick('portfolio')}  data-nav="portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Work
        </button>

        <button className={`bottom-nav__btn ${active === 'contact' ? 'active' : ''}`} onClick={() => handleClick ('contact')}  data-nav="contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Contact
        </button>

      </div>
    </nav>
  )
}

export default NavbarBottom