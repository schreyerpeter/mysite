import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactLogo from '../react_logo.svg'
import ReduxLogo from '../redux_logo.svg'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'navy',
      marginBottom: '1.45rem',
      height: '560px'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        position: 'relative',
        height: '300px',
        width: '300px',
        left: '50px',
        color: 'white'
      }}
    >
      <div style={{ position: 'absolute', top: '200px', textAlign: 'center'}}>
      <h1 style={{fontFamily:'trebuchet'}}>
          Hello World
      </h1>
      </div>
      <div id='react_logo' style={{position:'absolute', height: '0px', width: '100px'}}>
      <img src={ReactLogo} alt='Redux logo' />
      </div>
      <div id='redux_logo' style={{position:'absolute', height: '500px', width: '80px'}}>
        <img src={ReduxLogo} alt='React logo' />
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
