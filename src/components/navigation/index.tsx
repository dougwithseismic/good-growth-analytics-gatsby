import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'
import whiteLogo from '../../images/WHITE_TRANS_H@2x.svg'

import './navigation.scss'

const Navigation = (props: PageProps) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <nav className="navigation-bar">
      <div className="container">
        <div className="trial-cta">Start a 7day trial for £1</div>
        <div className={`navigation-items${isMenuOpen ? ' menu-open' : ''}`}>
          <div className="nav-item">...</div>
          <div className="nav-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Menu
          </div>
        </div>
        {/* Fullscreen Menu */}
        <div className={`navigation-menu${isMenuOpen ? ' menu-open' : ''}`}>
          <div className="menu-content">
            <div className="container">
              <hgroup>
                <h3>Menu</h3>
                <h1>01. Articles</h1>
                <h1>02. How To Guides</h1>
                <h1>03. Training</h1>
              </hgroup>

              <div className="menu-footer">
                <img className="footer-logo" src={whiteLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {}

export default Navigation
