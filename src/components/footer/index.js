import React from 'react'
import './footer.scss'

import GGALogo from '../../images/WHITE_TRANS_H@2x.svg'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <section className="footer">
      <Link to="/">
        <img src={GGALogo} alt="The Good Growth Analytics Logo" />
      </Link>
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
