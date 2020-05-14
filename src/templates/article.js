import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ArticleHero from './../components/article/articleHero'
import ArticleBody from './../components/article/articleBody'
import ProductGrid from './../components/productGrid/index'

import './article.scss'

const article = (props) => {
  return (
    <Fragment>
      <ArticleHero content={{ header: 'Enhanced Ecommerce 101' }} />

      <div className="article-contents">
        <div className="container">
          <ArticleBody />
          <ProductGrid />
        </div>
      </div>
    </Fragment>
  )
}

article.propTypes = {}

export default article
