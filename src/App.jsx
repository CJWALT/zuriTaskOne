import React from 'react'
import Profile from './components/Profile'
import {FaSlack, FaGithub} from 'react-icons/fa'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'

import {RiShareForwardLine} from 'react-icons/ri'
const App = () => {
  return (
    <>
      <div className="container">
        <main>
          <Profile />
          <div className="share__icon">
            <HiOutlineDotsHorizontal className='opt__icon'/> 
            <RiShareForwardLine className='share__btn-icon'/>
          </div>
          <section className="profile__links">
            <a href="https://twitter.com/im_walt" id="twitter">Twitter Link</a>
            <a href="https://twitter.com/im_walt" id="twitter">Zuri Team</a>
            <a href="https://twitter.com/im_walt" id="twitter">Zuri Books</a>
            <a href="https://twitter.com/im_walt" id="twitter">Python Books</a>
            <a href="https://twitter.com/im_walt" id="twitter">Background Check for Coders </a>
            <a href="https://twitter.com/im_walt" id="twitter">Design Books</a>
          </section>
          <section className="social__links">
           <a href='https://slack.com'> <FaSlack  /> </a>
           <a href='https://github.com/cjwalt'> <FaGithub  /> </a>
            
          </section>
  </main>
    <footer>
      <div className="footer__wrap">
        <img src='./images/Zuri.Internship_Logo.png' alt='zuri Intern ship logo' className='footer__logo'/>
        <small>HNG Intership Frontend Task</small>
        <img src='./images/i4G.png' alt ='i4G LOGO'/>
      </div>
        
      </footer>
  </div>
    </>
  )
}

export default App