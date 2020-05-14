import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ArticleHero from './../components/article/articleHero'
import ArticleBody from './../components/article/articleBody'
import ProductGrid from './../components/productGrid/index'
import Layout from './../components/layout'
import './article.scss'

const article = ({ data: { gcms: { article } } }) => {
  const { author, content, id, slug, title, updatedAt } = article
  console.log('article :>> ', article)
  return (
    <Layout>
      <ArticleHero content={{ article, author }} />

      <div className="article-contents">
        <div className="container">
          <ArticleBody content={content} />
          <ProductGrid />
        </div>
      </div>
    </Layout>
  )
}

article.defaultProps = {
  data: {
    gcms: {
      article: {
        title: 'Default Article Title',
        updatedAt: '2020-05-14T08:08:40.309258+00:00',
        slug: 'default-article',
        author: {
          name: 'Joe Bloggs',
          slug: 'joe-bloggs',
          bio: { raw: {} },
        },
      },
    },
  },
}

export default article
export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    gcms {
      article(where: { slug: $slug }) {
        id
        title
        slug
        updatedAt
        author {
          id
          name
          slug
          bio {
            raw
          }
        }
        content {
          markdown
        }
      }
    }
  }
`
