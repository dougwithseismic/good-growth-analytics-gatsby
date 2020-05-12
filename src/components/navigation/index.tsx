import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

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
                <h3>01. Articles</h3>
                <h3>02. How To Guides</h3>
                <h3>03. Training</h3>
              </hgroup>

              <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and expound the actual teachings of the great
                explorer of the truth, the master-builder of human happiness.
              </p>
              <p>
                No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do
                not know how to pursue pleasure rationally encounter consequences that are extremely painful.{' '}
              </p>
              <h3>Header Three</h3>
              <p>
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                To take a trivial. But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder of human happiness.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                To take a trivial. But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder of human happiness.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                To take a trivial. But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder of human happiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {}

export default Navigation
