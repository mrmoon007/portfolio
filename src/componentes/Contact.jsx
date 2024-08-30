import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="text-3xl my-10 text-center">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b"> {CONTACT.email} </a>
      </div>
    </div>
  )
}

export default Contact
