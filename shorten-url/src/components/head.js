import React from 'react'
import { Link, } from 'react-router-dom'

function head() 
{
  return (
    <>
    
      <div className='main_nav'>
        <div className='sub_nav'>
          <h1>Url Shortner</h1>
          </div>
          <div className='sub_nav'>
            <nav className='nav_links'>
              <ul>
                
                <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
                <li><Link  style={{ textDecoration: 'none', color: 'white' }} to="/history">History</Link></li>
                
              </ul>
            </nav>
          </div>
      </div>
    </>
  )
}

export default head