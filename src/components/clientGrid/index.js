import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import './clientGrid.scss'

const ClientGrid = ({ title }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 250, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <section className="client-grid">
      <div className="container">
        <div className="client-grid-content">
          {title && <span className="highlight">{title}</span>}
          <div className="client-logo-grid">
            {data.allFile.nodes.map((image) => (
              <div className="client-logo">
                <Img className="logo" fluid={image.childImageSharp.fluid} alt="Client Logos" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientGrid
