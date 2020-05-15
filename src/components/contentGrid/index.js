import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GridItem from './gridItem'
import Img from 'gatsby-image'

import './contentGrid.scss'

const ContentGrid = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-swirl.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="content-grid">
      <div className="container">
        <Img
          className="swirl-image"
          fluid={data.file.childImageSharp.fluid}
          alt="The Good Growth Analytics Swirl"
          style={{ position: 'absolute' }}
          fadeIn={false}
        />

        <div className="grid-items">
          <GridItem
            content={{
              subtitle: 'Clients',
              title: 'Handling Trainwreck Calls',
              cta: 'Choke less',
              readTime: '15 Minute Read'
            }}
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
          {/* <GridItem
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
          /> */}
        </div>
      </div>
    </section>
  )
}

ContentGrid.propTypes = {}

export default ContentGrid
