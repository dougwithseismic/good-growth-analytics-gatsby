import React from 'react'
import PropTypes from 'prop-types'
import { PageProps } from 'gatsby'

import './navigation.scss'

const Navigation = (props: PageProps) => {
  return (
    <section className="navigation-bar container">
        <div className="trial-cta">Start a 7day trial for £1</div>
        <div className="navigation-items">
          <div className="nav-item">...</div>
          <div className="nav-item">Menu</div>
        </div>
    </section>
  )
}

Navigation.propTypes = {}

export default Navigation
