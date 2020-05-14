import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import './clientGrid.scss'

const ClientGrid = (props) => {
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
        <h3>Previous Work</h3>
        <div className="client-logo-grid">
          {data.allFile.nodes.map((image) => (
            <Img className="client-logo" fluid={image.childImageSharp.fluid} alt="Client Logos" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientGrid
