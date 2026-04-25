import React from 'react'

function Sidebar() {
  return (
    <aside className="sidebar glass">
        <div className="sidebar__avatar-wrap">
            <img src="/src/assets/images/profile.jpg" alt="Evanjalin Bherina EH" className="sidebar__avatar" />
        </div>
        <div>
            <h1 className="sidebar__name">Evanjalin Bherina EH</h1>
            <p className="sidebar__title">Frontend Developer</p>
        </div>
        <div className="sidebar__socials">
            <a href="https://www.linkedin.com/in/evanjalin-bherina-0652a521a/" className="sidebar__social-btn glass-card" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            </a>
            <a href="https://github.com/bherina2/" className="sidebar__social-btn glass-card" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            </a>
            <a href="#" className="sidebar__social-btn glass-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
            </a>
            <a href="#" className="sidebar__social-btn glass-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" y1="8" x2="12" y2="8" />
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                </svg>
            </a>
        </div>
        <div className="sidebar__info">
            <div className="sidebar__info-row">
                <span className="sidebar__info-label">Status</span>
                <span className="sidebar__info-value">
                    <span className="status-dot"></span>Available </span>
            </div>
            <div className="sidebar__info-row">
                <span className="sidebar__info-label">Location</span>
                <span className="sidebar__info-value">Marthandam, TN</span>
            </div>
            <div className="sidebar__info-row">
                <span className="sidebar__info-label">Experience</span>
                <span className="sidebar__info-value">2+ Years</span>
            </div>
        </div>
        <button className="sidebar__cv-btn glass-card">Download CV <span>↗</span>
        </button>
    </aside>
  )
}

export default Sidebar