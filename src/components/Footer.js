import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Developed By: {''}
      Flat9.io Design By: <a href="https://html5up.net">HTML5 UP</a>. &copy;
      Gatsby - Dimension.
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
