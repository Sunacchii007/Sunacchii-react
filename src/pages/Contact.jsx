import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  const cliksend = ()=>{
    alert('YOUR MESSAGE HAS BEEN SEND')}
  return (
    <div className='cont'>
      <h2>Contact us</h2>
      <div className="cont-in">
        <input className='inp' type='text' placeholder='your msg'></input>
        <button type='reset' className='btn' onClick={cliksend}> Send </button>
      </div>
    </div >
  )
}

export default Contact;