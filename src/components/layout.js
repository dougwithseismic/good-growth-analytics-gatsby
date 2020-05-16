import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
