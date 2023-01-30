import "./index.css"
import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import { clear } from "@testing-library/user-event/dist/clear";

const Contact = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessages, setErrorMessages] = useState([])
  const [showErrors, setShowErrors] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const form = useRef();
  const nameField = useRef();
  const emailField = useRef();
  const subjectField = useRef();
  const messageField = useRef();


  const handleFormSubmission = (e) => {
    if (validateForm()){
      sendEmail(e)
      clearForm()
      setEmailSent(true)
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail_id', 'contact_form', form.current, '1xN_G2VM06GatQ0GB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const validateEmail = (email) => {
    //TODO: validate email. Ideally, we'd want to do this on the back end, but for the sake of this app, I can probably get a working version with regEx.

    //temp:
    return true
  }

  const validateForm = () => {
    setErrorMessages([])
    let errors = []

    if (name === "") errors.push("Name required.")
    if (!validateEmail(email)) errors.push("Invalid email, please try again.")
    if (email === "") errors.push("Email required.")
    if (subject === "") errors.push("Subject required.")
    if (message === "") errors.push("Message must not be empty.")

    if (errors.length > 0) {
      setShowErrors(true)
      setErrorMessages(errors)
      return false
    } else {
      setShowErrors(true)
      return true
    }
  }

  const clearForm = () => {
    nameField.current.value = ''
    emailField.current.value = ''
    subjectField.current.value = ''
    messageField.current.value = ''
  }


  return (
    <section id="contact" className="contact">
      <h3>&nbsp;&nbsp;&lt;form&gt;</h3>
      <div className="purple-box">
        <h1 className="top-left-h1">Contact</h1>
        {/* <h1 className="right-h1">03</h1> */}
        <p>
          Feel free to send me an email with job opportunities or interest in
          collaboration.
        </p>
        <form ref={form}>
          <section className="top-inputs">
          <input
            type="text"
            className = "form-name"
            placeholder="name"
            name="user_name"
            ref = {nameField}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className = "form-email"
            placeholder="email"
            name="user_email"
            ref = {emailField}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className = "form-subject"
            placeholder="subject"
            name="subject"
            ref = {subjectField}
            onChange={(e) => setSubject(e.target.value)}
          />
          </section>
          <textarea
            type="text"
            placeholder="message"
            name="message"
            ref = {messageField}
            onChange={(e) => setMessage(e.target.value)}
          />
          {showErrors && <ul> {errorMessages.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            } </ul>}
          {emailSent && <p>Email sent!</p>}
          <div className="button-container">
          <button
            color="primary"
            variant="contained"
            type="button"
            onClick={handleFormSubmission}
          >
            {" "}
            send{" "}
          </button></div>
        </form>
      </div>
      <div>
        <h3>&nbsp;&nbsp;&lt;/form&gt;</h3>
        <h3>&nbsp;&lt;/body&gt;</h3>
        <h3>&lt;/html&gt;</h3>
      </div>
    </section>
  )
}

export default Contact


//TODO: Integrate reCaptcha to verify user is human.
//TODO: Keep fields styled even when they are filled with autocomplete
//TODO: User can submit the form using enter key.
