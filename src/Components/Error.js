import React from 'react'
import errorImg from '../icon/error404.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div id='error'>
      <img src={errorImg} alt='404'/>
      <h1>UH OH! You're Lost.</h1>
      <p>The page you are looking fot does not exist. How you got here is a mystrey. But you can click the button to go back to home page</p>
      <button><Link to='/'>Home</Link></button>
    </div>
  )
}

export default Error