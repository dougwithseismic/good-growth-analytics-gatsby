import React from 'react'
import { PageProps, Link } from 'gatsby'

import './gridItem.scss'

const GridItem = ({ content: { subtitle, title, cta, readTime } }) => {
  return (
    <Link className="grid-item" to={`/article-template`} style={{ textDecoration: 'none' }}>
      <div className="grid-text">
        <h3 className="grid-subtitle">{subtitle}</h3>
        <h1 className="grid-title">{title}</h1>
      </div>
      <div className="grid-details">
        <div className="grid-read-time">{readTime}</div>
        <div className="grid-cta">{cta}</div>
      </div>
    </Link>
  )
}

export default GridItem
