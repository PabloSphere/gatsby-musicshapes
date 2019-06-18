import React from 'react'
import PropTypes from 'prop-types'
import whitelogo from '../images/whitelogo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">{<span className="icon fa-diamond"></span>}</div>
    <div className="content">
      <div className="inner">
        <h1>MusicShapes Creative Arts Therapy, PLLC</h1>
        <p>
          MusicShapes Creative Arts Therapy, PLLC, serves individuals with
          emotional, physical, developmental, and social needs through creative
          musical experiences to promote growth, development, and improve
          quality of life.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('team')
            }}
          >
            Our Team
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header