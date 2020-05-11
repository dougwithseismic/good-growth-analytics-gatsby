import React from 'react'
import PropTypes from 'prop-types'
import './ContentGrid.scss'
import GridItem from './gridItem'

const ContentGrid = (props) => {
  return (
    <section className="content-grid container">
      <GridItem content={{ subtitle: 'ppc', title: 'Autopilot Auditing', cta: 'Learn More', readTime: '5 Minute Read' }} />
      <GridItem content={{ subtitle: 'Ecommerce', title: 'Escaping Growth Stagnancy', cta: 'Learn More', readTime: '7 Minute Read' }} />
      <GridItem content={{ subtitle: 'Analytics', title: 'Enhanced Ecommerce 101', cta: 'Learn More', readTime: '5 Minute Read' }} />
    </section>
  )
}

ContentGrid.propTypes = {}

export default ContentGrid
