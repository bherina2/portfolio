import React from 'react';

function About() {
  return (
    <section className="section" data-section="about">
      <h2 className="section__heading">
        <span className="section__icon">◈</span> About Me
      </h2>

      <p className="about__text">
        I'm a multidisciplinary designer and developer with 8+ years of experience creating digital products. 
        I believe in the intersection of aesthetics and functionality — where beautiful design meets seamless user experience.
      </p>

      <div className="about__info-grid">
        <div className="about__info-item">
          <span className="about__info-label">Age</span>
          <span className="about__info-value">28</span>
        </div>
        <div className="about__info-item">
          <span className="about__info-label">Residence</span>
          <span className="about__info-value">San Francisco, CA</span>
        </div>
        <div className="about__info-item">
          <span className="about__info-label">Freelance</span>
          <span className="about__info-value">Available</span>
        </div>
        <div className="about__info-item">
          <span className="about__info-label">Email</span>
          <span className="about__info-value">hello@kaelenvoss.com</span>
        </div>
      </div>

      <h3 className="section__heading" style={{ fontSize: '1.25rem' }}>
        What I Do
      </h3>

      <div className="services-grid">
        <div className="service-card glass-card">
          <div className="service-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h4 className="service-card__title">Web Development</h4>
          <p className="service-card__desc">
            Building responsive, performant web applications using modern frameworks and cutting-edge technologies.
          </p>
        </div>

        <div className="service-card glass-card">
          <div className="service-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <h4 className="service-card__title">UI/UX Design</h4>
          <p className="service-card__desc">
            Crafting intuitive interfaces with meticulous attention to visual hierarchy, spacing and micro-interactions.
          </p>
        </div>

        <div className="service-card glass-card">
          <div className="service-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h4 className="service-card__title">Brand Strategy</h4>
          <p className="service-card__desc">
            Developing cohesive brand identities that resonate with target audiences and drive engagement.
          </p>
        </div>

        <div className="service-card glass-card">
          <div className="service-card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <h4 className="service-card__title">Analytics & SEO</h4>
          <p className="service-card__desc">
            Optimizing digital presence through data-driven insights and search engine optimization strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;