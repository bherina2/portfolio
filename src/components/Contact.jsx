import React from 'react';

function Contact() {
  return (
    <section className="section" data-section="contact">
      <h2 className="section__heading">
        <span 
          className="section__icon" 
          style={{ color: "var(--primary)", opacity: 0.7 }}
        >
          ✉
        </span> 
        Contact
      </h2>

      <p 
        className="about__text" 
        style={{ marginBottom: "2.5rem" }}
      >
        Have a project in mind? Let's build something extraordinary together.
      </p>

      <div className="contact-layout">
        <form 
          className="contact-form" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contact-form__row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit" className="contact-form__submit">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="contact-info-card__label">Location</p>
              <p className="contact-info-card__value">San Francisco, CA</p>
            </div>
          </div>

          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 
                  19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 
                  A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 
                  12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91 
                  a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 
                  12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="contact-info-card__label">Phone</p>
              <p className="contact-info-card__value">+1 (415) 555-0132</p>
            </div>
          </div>

          <div className="contact-info-card glass-card">
            <div className="contact-info-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="contact-info-card__label">Email</p>
              <p className="contact-info-card__value">hello@kaelenvoss.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;