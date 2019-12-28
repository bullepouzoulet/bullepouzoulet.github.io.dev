import React from 'react'

import './Contact.css'

interface ContactProps {}
interface ContactState {
  name: string,
  email: string,
  message: string,
  sent: boolean
}

interface ContactInputProps {
  type: string,
  value: string,
  text: string,
  id: string,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

interface ContactTextAreaProps {
  value: string,
  text: string,
  id: string,
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor (props: ContactProps) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    }

    this.handleNameChanged = this.handleNameChanged.bind(this)
    this.handleEmailChanged = this.handleEmailChanged.bind(this)
    this.handleMessageChanged = this.handleMessageChanged.bind(this)
  }

  handleNameChanged (event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      name: event.currentTarget.value
    })
  }

  handleEmailChanged (event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      email: event.currentTarget.value
    })
  }

  handleMessageChanged (event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({
      message: event.currentTarget.value
    })
  }

  render () {
    const submitDisabled = !Boolean(this.state.name.trim()) || !Boolean(this.state.email.trim()) || !Boolean(this.state.message.trim())
    return (
      <div className='Contact'>
        <h3
          className='Contact-title'>
          Vous voulez en savoir plus ?
        </h3>

        <div
          className='Contact-content'>

          <ContactInput
            id='name'
            type='text'
            text='Votre nom'
            value={this.state.name}
            onChange={this.handleNameChanged}
          />

          <ContactInput
            id='email'
            type='email'
            text='Votre adresse email'
            value={this.state.email}
            onChange={this.handleEmailChanged}
          />

          <ContactTextArea
            id='message'
            text='Votre message'
            value={this.state.message}
            onChange={this.handleMessageChanged}
          />

        </div>

        <button
          className='Contact-btn'
          disabled={submitDisabled}>
          Envoyer
        </button>

      </div>
    )
  }
}

function ContactInput(props: ContactInputProps) {
  const {
    id,
    type,
    text,
    value,
    onChange
  } = props
  return (
    <div
      className='Contact-form'>
      <label
        className='Contact-label'
        htmlFor={id}>
        {text}
      </label>
      <input
        className='Contact-input'
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required>
      </input>
    </div>
  )
}

function ContactTextArea(props: ContactTextAreaProps) {
  const {
    id,
    text,
    value,
    onChange
  } = props
  return (
    <div
      className='Contact-form'>
      <label
        className='Contact-label'
        htmlFor={id}>
        {text}
      </label>
      <textarea
        className='Contact-textarea'
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={5}
        required>
      </textarea>
    </div>
  )
}

export default Contact
