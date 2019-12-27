import React from 'react'

import './Contact.css'

interface ContactProps {}
interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
  render () {
    return (
      <div className='Contact'>
        <h1>Contact</h1>
      </div>
    )
  }
}

export default Contact
