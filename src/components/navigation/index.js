import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'

import whiteLogo from '../../images/WHITE_TRANS_H@2x.svg'

import './navigation.scss'

const Navigation = (props) => {
  const animation = useAnimation()
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  useEffect(
    () => {
      animation.start(

          isMenuOpen ? 'open' :
          'closed'
      )
    },
    [ isMenuOpen ]
  )

  const variantControl = {
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [ 0.6, 0.05, -0.2, 0.9 ],
      },
    },
    closed: {
      y: '-101%',
      transition: {
        duration: 1,
        ease: [ 0.6, 0.05, -0.2, 0.9 ],
      },
    },
  }

  const itemControl = {
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [ 0.6, 0.05, -0.01, 0.9 ],
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [ 0.6, 0.05, -0.01, 0.9 ],
        staggerChildren: 0.1,
      },
    },
  }

  const itemChildren = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [ 0.6, 0.05, -0.01, 0.9 ],
      },
    },
    closed: {
      opacity: 0,
      y: -12,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.nav className="navigation-bar">
      {/* <div className="container"> */}
      <div className="trial-cta">Start a 7day trial for £1</div>
      <div
        className={`navigation-items${
          isMenuOpen ? ' menu-open' :
          ''}`}
      >
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/article-template" className="nav-item">
          Article
        </Link>
        <div className="nav-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </div>
      </div>
      {/* Fullscreen Menu */}
      <motion.div
        className={`navigation-menu${
          isMenuOpen ? ' menu-open' :
          ''}`}
        animate={animation}
        initial="closed"
        variants={variantControl}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="menu-content">
          <div className="container">
            <motion.hgroup animate={animation} variants={itemControl}>
              <motion.h3 variants={itemChildren}>Menu</motion.h3>
              <motion.h1 variants={itemChildren}>01. Articles</motion.h1>
              <motion.h1 variants={itemChildren}>02. How To Guides</motion.h1>
              <motion.h1 variants={itemChildren}>03. Training</motion.h1>
            </motion.hgroup>

            <motion.div className="menu-footer">
              <img className="footer-logo" src={whiteLogo} />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`navigation-overlay${
          isMenuOpen ? ' menu-open' :
          ''}`}
        animate={animation}
        initial="closed"
        variants={{
          open: {
            opacity: 0.95,
          },

          closed: {
            opacity: 0,
            transition: { delay: 0.2 },
          },
        }}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* </div> */}
    </motion.nav>
  )
}

Navigation.propTypes = {}

export default Navigation
