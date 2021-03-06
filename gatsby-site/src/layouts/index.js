import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ReactLogo from '../svg/react_logo.svg'
import ReduxLogo from '../svg/redux_logo.svg'
import NodeLogo from '../svg/node_logo.svg'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'linear-gradient(to right, #1F989A, #97D2E3)',
      height: '460px',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        position: 'relative',
        width: '200px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1 id='title'>
          Pete Loves Code
      </h1>
      <div id='react_logo' style={{height: '300px', width: '110px'}}>
      <img src={ReactLogo} alt='Redux logo' />
      </div>
      <div id='redux_logo' style={{height: '460px', width: '80px'}}>
        <img src={ReduxLogo} alt='React logo' />
      </div>
      <div id='node_logo' style={{height: '300px', width: '60px'}}>
        <img src={NodeLogo} alt='Node logo' />
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Peter Schreyer"
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'flex',
        justifyContent: 'center'
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
