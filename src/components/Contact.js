import React from "react";
import "../App.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Information</h2>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            {/* Email */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#000" className="icon-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h16.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l8.25 6.375L20.25 6.75" />
            </svg>
          </div>
          <span>kwanghyukryu@gmail.com</span>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            {/* Phone */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#000" className="icon-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A3 3 0 015.25 3.75h1.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H5.25A3 3 0 012.25 6.75zm0 0A17.25 17.25 0 0012 21.75a17.25 17.25 0 0010.5-15 3 3 0 00-3-3h-1.5a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h1.5" />
            </svg>
          </div>
          <span>+1 (778) 227-1714</span>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            {/* Location */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#000" className="icon-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a6.75 6.75 0 016.75 6.75c0 3.75-6.75 12-6.75 12S5.25 12.75 5.25 9A6.75 6.75 0 0112 2.25z" />
              <circle cx="12" cy="9" r="1.8" />
            </svg>
          </div>
          <span>Burnaby, BC, Canada</span>
        </div>
      </div>

      <div className="socials">
        <div className="social-buttons">
          {/* GitHub */}
          <a className="social-button" href="https://github.com/kwanghyukryu" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub Profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" className="social-svg">
              <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.3.7-4-1.5-4-1.5a3.1 3.1 0 00-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.3 2.6 2.6 0 003.5 1 2.6 2.6 0 01.8-1.7c-2.7-.3-5.6-1.3-5.6-6A4.6 4.6 0 015.3 7a4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.2 4.6 4.6 0 011.2 3.2c0 4.8-2.9 5.6-5.6 6a3 3 0 01.9 2.3v3.5c0 .4.2.7.8.6A12 12 0 0012 0" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a className="social-button" href="https://linkedin.com/in/kwanghyukryu" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn Profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" className="social-svg">
              <path d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 8h4v12H3zM9 8h3.8v1.7h.1a4.1 4.1 0 013.7-2c4 0 4.8 2.6 4.8 6v6.3h-4V14.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 3v5.4H9z" />
            </svg>
            <span>LinkedIn</span>
          </a>


          {/* Instagram */}
          <a className="social-button" href="https://www.instagram.com/kwanghyukryu/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram Profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" className="social-svg">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
