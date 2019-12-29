import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Contact.scss'

declare var Email: any

interface ContactProps {}

const Contact = (props: ContactProps) => {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitText, setSubmitText] = useState(t('contact.submit'))
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleNameChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const handleEmailChanged = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const handleMessageChanged = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value)
  }

  const onSendMailPressed = () => {
    setIsSending(true)
    setSubmitText(t('contact.sending'))
    Email.send({
      SecureToken : "ff1161a1-4f82-4b6c-8629-fcb9b0b09e72",
      To: 'bulle.pzt@gmail.com',
      From: 'ash.uncover@gmail.com',
      Subject: `Contact Site: ${name}`,
      Body: `<div><div>Nom: ${name}</div><div>Email: ${email}</div><br /><div>${message.split('\n').join('<br />')}</div></div>`
    })
      .then((msg: string) => {
        if (msg === 'OK') {
          setIsError(false)
          setIsSent(true)
          setSubmitText(t('contact.sent'))
        } else {
          setIsError(true)
          setSubmitText(t('contact.error'))
        }
      })
      .catch(() => {
        setIsError(true)
        setSubmitText(t('contact.error'))
      })
      .finally(() => {
        setIsSending(false)
      })

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
          disabled={isSending || isSent}
          onChange={handleNameChanged}
        />

        <ContactInput
          id='email'
          type='email'
          text={t('contact.email')}
          value={email}
          disabled={isSending || isSent}
          onChange={handleEmailChanged}
        />

        <ContactTextArea
          id='message'
          text={t('contact.message')}
          value={message}
          disabled={isSending || isSent}
          onChange={handleMessageChanged}
        />

      </div>

      <button
        className={isSent ? 'Contact-btn Contact-btn-sent' : (isError ? 'Contact-btn Contact-btn-error' : 'Contact-btn')}
        disabled={submitDisabled || isSending || isSent}
        onClick={onSendMailPressed}>
        {submitText}
      </button>

    </div>
  )
}

interface ContactInputProps {
  type: string,
  value: string,
  text: string,
  id: string,
  disabled: boolean,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

function ContactInput(props: ContactInputProps) {
  const {
    id,
    type,
    text,
    value,
    disabled,
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
        disabled={disabled}
        required>
      </input>
    </div>
  )
}

interface ContactTextAreaProps {
  value: string,
  text: string,
  id: string,
  disabled: boolean,
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

function ContactTextArea(props: ContactTextAreaProps) {
  const {
    id,
    text,
    value,
    disabled,
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
        disabled={disabled}
        rows={5}
        required>
      </textarea>
    </div>
  )
}

export default Contact
