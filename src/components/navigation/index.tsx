import React from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

import './navigation.scss'

const Navigation = (props: PageProps) => {
  return (
    <nav className="navigation-bar">
      <div className="container fd-row">
        <div className="trial-cta">Start a 7day trial for £1</div>
        <div className="navigation-items">
          <div className="nav-item">...</div>
          <div className="nav-item">Menu</div>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {}

export default Navigation
