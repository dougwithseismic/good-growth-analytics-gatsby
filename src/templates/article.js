import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Navigation from './../components/navigation'
import Footer from './../components/footer'

import ArticleHero from './../components/article/articleHero'
import ArticleBody from './../components/article/articleBody'

const article = (props) => {
  return (
    <Fragment>
      <Navigation />
      <ArticleHero content={{ header: 'Enhanced Ecommerce 101' }} />

      <div className="container fd-column">
        <ArticleBody />
      </div>
      <Footer />
    </Fragment>
  )
}

article.propTypes = {}

export default article
