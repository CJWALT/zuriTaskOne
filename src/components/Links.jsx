import React from 'react'
import {FaSlack, FaGithub} from 'react-icons/fa'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'

import {RiShareForwardLine} from 'react-icons/ri'
import Footer from './Footer'
import Profile from './Profile'


const Links = () => {
  return (
   <>
    <div className="container">
    <main>
        <Profile/>

    
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
            <a href={"/contact"} id="contact">Contact Me</a>
            
            </section>
            <section className="social__links">
            <a href='https://slack.com/wally'> <FaSlack  /> </a>
            <a href='https://github.com/cjwalt'> <FaGithub  /> </a>
            
            </section>
        </main>
        <Footer/>
        
    </div>


  </>
  
  
  );
}

export default Links