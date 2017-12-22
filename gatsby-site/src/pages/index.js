import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
    render() {
      return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
        <h1>About Me</h1>
        <p>My name is Pete, and I love to code.</p>
        <p>I live in beautiful Newport Beach, CA, with my amazing fiancée and our adorable pup.</p>
        <p>During the average weekday, you will find me working as a web developer for a digital analytics company, but on the weekends my little family and I will be at the beach.</p>
        <Link to="/page-2/">See some pictures of us!</Link>
      </div>
      )
    }
}

export default IndexPage
