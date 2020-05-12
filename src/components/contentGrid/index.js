import React from 'react'
import PropTypes from 'prop-types'
import './contentGrid.scss'
import GridItem from './gridItem'

import imageimage from '../../images/hero-swirl.png'

const ContentGrid = (props) => {
  return (
    <section className="content-grid">
      <div className="container">
        <img className="swirl-image" src={imageimage} alt="The Good Growth Analytics Swirl" />
        <div className="grid-items">
          <GridItem
            content={{ subtitle: 'Clients', title: 'Handling Trainwreck Calls', cta: 'Choke less', readTime: '15 Minute Read' }}
          />
          <GridItem
            content={{
              subtitle: 'Guide',
              title: `How To: Your first 60 days with a client`,
              cta: 'Learn More',
              readTime: '22 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Reporting',
              title: `How to forecast properly and impress everyone`,
              cta: 'Learn More',
              readTime: '5 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Outsourcing',
              title: 'Auditing your agency - The honest truth',
              cta: 'Learn More',
              readTime: '20 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Client',
              title: 'Budget versus expectations',
              cta: 'Learn More',
              readTime: '7 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Analytics',
              title: 'Bin manual work & learn to automate',
              cta: 'Learn More',
              readTime: '5 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Career',
              title: 'How JavaScript changed my life',
              cta: 'Learn More',
              readTime: '15 Minute Read'
            }}
          />
          <GridItem
            content={{
              subtitle: 'Automation',
              title: 'How to automate EVERYTHING.',
              cta: 'Learn More',
              readTime: '12 Minute Read'
            }}
          />
        </div>
      </div>
    </section>
  )
}

ContentGrid.propTypes = {}

export default ContentGrid
