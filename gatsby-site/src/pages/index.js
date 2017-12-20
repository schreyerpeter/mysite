import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {

    render() {
      return (
        <div>
        <h1>Hello World...</h1>
        <p>My name is Pete, and I love code</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      )
    }
}

export default IndexPage
