import React from 'react'
import './articleHero.scss'
import { Link } from 'gatsby'

const ArticleHero = ({ content: { article } }) => {
  return (
    <section className="article-hero">
      <div className="container">
        <div className="hero-content">
          <div className="article-hero-subtitle">Google Analytics</div>
          <h1 className="article-hero-header">{article.title}</h1>
        </div>
        {/* Could be a separate component..? */}
        <div className="author-details">
          <div className="article-author">
            By{' '}
            <Link to={`/authors/${article.author.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {article.author.name}
            </Link>
          </div>
          <div className="article-updated-at">Updated 11th May 2020 - 2:22pm</div>
        </div>
      </div>
    </section>
  )
}

ArticleHero.defaultProps = {
  content: {
    article: { title: 'Default Article Title', updatedAt: '2020-05-14T08:08:40.309258+00:00', slug: 'default-article' },
    author: {
      name: 'Joe Bloggs',
      slug: 'joe-bloggs',
      bio: { raw: {} },
    },
  },
}

export default ArticleHero
