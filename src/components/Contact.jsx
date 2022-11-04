import React from 'react'
import Footer from './Footer';

const Contact = () => {
    const name = 'Oyedele Emmanuel'; 
  return (
    <>
        <div className="container"> 

            <div className="contact-wrap">
                <h2 className='contact__heading'>Contact me</h2>
                <p className='contact__para'>
                    Hi there, contact me to ask me about anything you have in mind.
                </p>

                <form action="#">
                    <fieldset>
                        <label className='label__width'><p>First name</p>
                        <input type='text' id ='first_name' placeholder="Enter your first name"/>
                        </label><br/>
                        <label className='label__width'><p>Last name </p>
                            <input type='text' id ='last_name' placeholder="Enter your last name"/>
                        </label>
                    </fieldset>
                    
                    <fieldset>
                        <label><p>Email </p>
                            <input type='text' id='email' placeholder="yourname@gmail.com"/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label><p>Message </p>
                            <textarea id='message' placeholder="Send me a message and i'll reply you as soon as possible"/> 
                        </label>
                    </fieldset> 

                    <fieldset>
                        <label><input type='checkbox' className='checkbox'/> 
                            <p className='checkbox__para'> You agree to providing your data to {name} who may contact you.</p>
                        </label>
                    </fieldset>
                    <button id='btn__submit' className="btn">
                        Send Message
                    </button>
                </form>

            </div>
        <Footer />
     </div> 
        
    </>
  )
}

export default Contact