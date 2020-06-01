import React from 'react'
import PropTypes from 'prop-types'

const SectionWithContainer = ({ children, className }) => (
  <section className={className}>
    <div className="container">{children}</div>
  </section>
)

const Section = ({ container, children, className }) => {
  return container ? (
    <SectionWithContainer className={className ? className : null}>{children}</SectionWithContainer>
  ) : (
    <section>{children}</section>
  )
}

Section.propTypes = {}

export default Section
