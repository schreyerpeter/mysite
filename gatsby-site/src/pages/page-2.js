import React from 'react'
import Link from 'gatsby-link'
import Seychelles from '../img/IMG_0922.jpg'
import FamilyPic from '../img/IMG_1752.jpg'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <img src={FamilyPic} />
    <img src={Seychelles} />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
