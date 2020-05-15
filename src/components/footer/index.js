import React from 'react'
import './footer.scss'

import { Link } from 'gatsby'

const Footer = () => {
  return (
    <section className="footer">
      <Link to="/">
      </Link>
      {/* <div className="footer-items">
        <div className="footer-item">Articles</div>
        <div className="footer-item">Audit Guides</div>
        <div className="footer-item">Consulting</div>
      </div> */}
    </section>
  )
}

Footer.propTypes = {}

export default Footer
