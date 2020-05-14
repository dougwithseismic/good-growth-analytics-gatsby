import React from 'react'
import { Link } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'

import './gridItem.scss'

const GridItem = ({ content: { subtitle, title, cta, readTime } }) => {
  const AnimLink = motion.custom(Link)
  return (
    <AnimLink
      className="grid-item"
      to={`/article-template`}
      style={{ textDecoration: 'none' }}
   >
      <motion.div className="grid-text">
        <motion.h3 className="grid-subtitle">{subtitle}</motion.h3>
        <motion.h1 className="grid-title">{title}</motion.h1>
      </motion.div>
      <div className="grid-details">
        <div className="grid-read-time">{readTime}</div>
        <div className="grid-cta">{cta}</div>
      </div>
    </AnimLink>
  )
}

export default GridItem
