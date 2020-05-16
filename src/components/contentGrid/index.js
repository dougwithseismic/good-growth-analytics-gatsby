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
              subtitle: 'ElephantBox',
              title: 'Unprofitable Ecommerce to 6x ROAS in less than a month',
              cta: 'Choke less',
              readTime: 'PPC, CRO',
            }}
          />
          <GridItem
            content={{
              subtitle: 'The Beeswax Wrap Co.',
              title: `Zero-waste winners - creating DTC Market leaders`,
              cta: 'Learn More',
              readTime: 'Web, PPC, Strategy',
            }}
          />
          <GridItem
            content={{
              subtitle: 'Topman',
              title: `Most Creative Performance Marketing Campaign`,
              cta: 'Learn More',
              readTime: 'Paid Social, Development, R&D',
            }}
          />
          <GridItem
            content={{
              subtitle: 'The Donkey Sanctuary',
              title: 'Uncovering an Analytics Emergency',
              cta: 'Learn More',
              readTime: 'Analytics, GTM, Development',
            }}
          />
          <GridItem
            content={{
              subtitle: 'The Collective',
              title: 'Creating a short-stay analytics success',
              cta: 'Learn More',
              readTime: 'Analytics, Web',
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
