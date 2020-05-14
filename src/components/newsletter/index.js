import React from 'react'
import PropTypes from 'prop-types'

/*
This is an example of a HOC acting as a headless UI component (H)
It opens up logic for children so logic can be written once 
and styled multiple times depending on need

      <NewsletterSignup>
      {({ onSignup }) => (
      <div onClick={onSignup}>SIGN ME UP</div>
    )}
      </NewsletterSignup>


*/

const NewsletterSignup = (props) => {
    
  const validateEmail = (email) => {
    return email.includes('@') ? true : false
  }

  const onSignup = (input = 'dougsilkstone@gmail.com') => {
    validateEmail(input) && console.log('signedup!')
  }
  return props.children({
    onSignup,
  })
}

NewsletterSignup.propTypes = {}

export default NewsletterSignup
