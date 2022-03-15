import React from 'react'
import '../styles/Contact.css';
import contactImage from '../assets/fooda.jpeg';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${contactImage})`}}>
            
        </div>
        <div className='rightSide'>
            <h1>Contsct Us</h1>
            <form id='conact-form' method='POST'>
                <label htmlFor='name'>
             Full name
                </label>
                <input name='name' type='text' placeholder='Enter your name' />

            <label htmlFor='email'>
             email 
                </label>
                <input type='email' name='name' placeholder='Enter email address' />
                <label htmlFor='message'>
             message
                </label>
                <textarea name='message' rows='7' placeholder='enter your mesage' ></textarea>
                <button type='submit'>send mesage</button>
            </form>
        </div>
    </div>
  )
}

export default Contact