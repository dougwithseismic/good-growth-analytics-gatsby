import React from 'react'
import { PageProps } from 'gatsby'

import './gridItem.scss'

const GridItem = ({ content: { subtitle, title, cta, readTime } }) => {
  return (
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
  )
}

export default GridItem
