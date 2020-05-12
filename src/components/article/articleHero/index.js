import React from 'react'
import './articleHero.scss'

const ArticleHero = ({ content: { header } }) => {
  return (
    <section className="article-hero">
      <div className="container">
        <div className="hero-content">
          <div className="article-hero-subtitle">Google Analytics</div>
          <h1 className="article-hero-header">{header}</h1>
        </div>
        {/* Could be a separate component..? */}
        <div className="author-details">
          <div className="article-author">Doug Silkstone</div>
          <div className="article-updated-at">Updated 11th May 2020 - 2:22pm</div>
        </div>
      </div>
    </section>
  )
}

export default ArticleHero
