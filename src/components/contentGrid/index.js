import React from 'react'
import PropTypes from 'prop-types'
import './contentGrid.scss'
import GridItem from './gridItem'

const ContentGrid = (props) => {
  return (
    <section className="content-grid">
      <div className="container">
        <div className="grid-items">
          <GridItem
            content={{ subtitle: 'ppc', title: 'Autopilot Auditing', cta: 'Learn More', readTime: '5 Minute Read' }}
          />
          <GridItem
            content={{
              subtitle: 'Ecommerce',
              title: 'Escaping Growth Stagnancy',
              cta: 'Learn More',
              readTime: '7 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Analytics',
              title: 'Enhanced Ecommerce 101',
              cta: 'Learn More',
              readTime: '5 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Analytics',
              title: 'Enhanced Ecommerce 101',
              cta: 'Learn More',
              readTime: '5 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Analytics',
              title: 'Enhanced Ecommerce 101',
              cta: 'Learn More',
              readTime: '5 Minute Read'
            }}
          />
        </div>
      </div>
    </section>
  )
}

ContentGrid.propTypes = {}

export default ContentGrid
