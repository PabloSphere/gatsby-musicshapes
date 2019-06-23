import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import musicshapeslogo from '../images/ms-logo20x20.png'
import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'title', content: 'MusicShapes Creative Arts Therapy' },
              {
                name: 'keywords,',
                content:
                  'music therapy, nyc music therapists, alan thompson music therapist, alan thompson, music therapy new york city',
              },
            ]}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: `${musicshapeslogo}`,
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
