import React from 'react'
import PropTypes from 'prop-types'

import Article from '../templates/article'
import Navigation from '../components/navigation'
import Footer from './../components/footer'
import Layout from './../components/layout';

const articleTemplate = (props) => {
  return (
    <Layout>
      <Article />
    </Layout>
  )
}

articleTemplate.propTypes = {}

export default articleTemplate
