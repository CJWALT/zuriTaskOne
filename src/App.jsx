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
            <a href="https://twitter.com/im_walt2" id="twitter">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
            <a href="http://books.zuri.team" id="books">Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=oyedeleemmanuel" id="book__python">Python Books</a>
            <a href="https://background.zuri.team" id="twitter">Background Check for Coders </a>
            <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
          </section>
          <section className="social__links">
           <a href='https://slack.com/wally'> <FaSlack  /> </a>
           <a href='https://github.com/cjwalt'> <FaGithub  /> </a>
            
          </section>
  </main>
    <footer>
      <div className="footer__wrap">
        <img src='./images/Zuri.Internship_Logo.png' alt='zuri Intern ship logo' className='footer__logo'/>
        <small>HNG Internship Frontend Task</small>
        <img src='./images/i4G.png' alt ='i4G LOGO'/>
      </div>
        
      </footer>
  </div>
    </>
  )
}

export default App