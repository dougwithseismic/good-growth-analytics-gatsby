import React from 'react'
import './footer.scss'

import GGALogo from '../../images/WHITE_TRANS_H@2x.svg'

const Footer = (props) => {
  return (
    <section className="footer">
      <img src={GGALogo} alt="The Good Growth Analytics Logo" />
      <div className="footer-items">
        <div className="footer-item">Articles</div>
        <div className="footer-item">Audit Guides</div>
        <div className="footer-item">Consulting</div>
      </div>
    </section>
  )
}

Footer.propTypes = {}

export default Footer
