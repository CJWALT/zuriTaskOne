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
                    <div className="form-field">
                        <label>First name<br/>
                        <input type='text' id ='first_name' placeholder="Enter your first name"/>
                        </label><br/>
                        <label>Last name<br/>
                            <input type='text' id ='last_name' placeholder="Enter your last name"/>
                        </label>
                    </div>
                    
                    <div className="form-field">
                        <label>Email 
                            <input type='text' id='email' placeholder="yourname@gmail.com"/>
                        </label>
                    </div>
                    <div className="form-field">
                        <label>Message 
                            <textarea id='message' placeholder="Send me a message and i'll reply you as soon as possible"/> 
                        </label>
                    </div> 

                    <div className="form-field">
                        <label><input type='checkbox' /> 
                            You agree to providing your data to {name} who may contact you.
                            </label>
                    </div>

                </form>

            </div>
        <Footer />
     </div> 
        
    </>
  )
}

export default Contact