import React from 'react'
import PropTypes from 'prop-types'
import './footer.scss'

const Footer = (props) => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-cta">
          <h2>Shall we?</h2>
          <p>
            If your gut feeling is that I'd be able to help you get to where you need to be, a casual chat is all that's
            needed.
          </p>
          <div className="cta-bubble">
            <a
              href="https://calendly.com/doug-withseismic/quick-catchup"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-bubble-main"
            >
              Book a call in the calendar
            </a>
            <div className="cta-bubble-extra">⟶ No commitment, no cost, no problem</div>
          </div>
        </div>
        <div className="footer-lower" />

        <div className="footer-content">
          <div className="footer-items">
            <div className="footer-item">
              <h3>Contact</h3>
              <ul>
                <li>doug@withseismic.com</li>
                <li>
                  <a href="https://linkedin.com/in/dougsilkstone">Linkedin.com/in/dougsilkstone</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-extra-links">
            <span>© Doug Silkstone - Digital Marketing Consultancy 2020</span>
            <span>Privacy Policy</span>
            <span>Store</span>
            <span>CV</span>
          </div>
        </div>
      </div>
    </section>
  )
}

Footer.propTypes = {}

export default Footer
