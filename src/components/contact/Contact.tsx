import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Contact.scss'

interface ContactProps {}

const Contact = (props: ContactProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const { t } = useTranslation()

  const handleNameChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const handleEmailChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const handleMessageChanged = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value)
  }

  const submitDisabled = !Boolean(name.trim()) || !Boolean(email.trim()) || !Boolean(message.trim())
  return (
    <div className='Contact'>
      <h3
        className='Contact-title'>
        {t('contact.title')}
      </h3>

      <div
        className='Contact-content'>

        <ContactInput
          id='name'
          type='text'
          text={t('contact.name')}
          value={name}
          onChange={handleNameChanged}
        />

        <ContactInput
          id='email'
          type='email'
          text={t('contact.email')}
          value={email}
          onChange={handleEmailChanged}
        />

        <ContactTextArea
          id='message'
          text={t('contact.message')}
          value={message}
          onChange={handleMessageChanged}
        />

      </div>

      <button
        className='Contact-btn'
        disabled={submitDisabled}>
        {t('contact.submit')}
      </button>

    </div>
  )
}

interface ContactInputProps {
  type: string,
  value: string,
  text: string,
  id: string,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
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

interface ContactTextAreaProps {
  value: string,
  text: string,
  id: string,
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void
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
