import React from 'react'
import { PageProps, Link } from 'gatsby'

import './gridItem.scss'

const GridItem = ({ content: { subtitle, title, cta, readTime } }) => {
  return (
    <Link to={`/article-template`}>
      <div className="grid-item">
        <div className="grid-text">
          <div className="grid-subtitle">{subtitle}</div>
          <div className="grid-title">{title}</div>
        </div>
        <div className="grid-details">
          <div className="grid-read-time">{readTime}</div>
          <div className="grid-cta">{cta}</div>
        </div>
      </div>
    </Link>
  )
}

export default GridItem
