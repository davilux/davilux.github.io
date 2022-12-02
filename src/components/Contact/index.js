import "./index.css"
import React, { useState } from "react"
import { TextField, Button } from "@mui/material"

const Contact = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [errorMessages, setErrorMessages] = useState([])
  const [showErrors, setShowErrors] = useState(false)

  let errors = []

  const handleFormSubmission = () => {
    if (validateForm()) {
      //connect to back end here. Submit the email.
      return true
    }
    return false
  }

  const validateEmail = (email) => {
    //TODO: validate email on the back end... using a regex here is not sufficient

    //temp:
    return true
  }

  const validateForm = () => {
    setErrorMessages([])
    errors = []

    if (name === "") errors.push("Name required.")
    if (!validateEmail(email)) errors.push("Invalid email, please try again.")
    if (email === "") errors.push("Email required.")
    if (message === "") errors.push("Message must not be empty.")
    if (subject === "") errors.push("Subject required.")
    if (errors.length > 0) {
      setShowErrors({ showErrors: true })
      setErrorMessages(errors)
      return false
    } else {
      setShowErrors({ showErrors: false })
      return true
    }
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
        <form>
          <TextField
            label="Name"
            type="text"
            className="nameField"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Subject"
            type="text"
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            label="Message"
            type="text"
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
          />

          {showErrors
            ? errorMessages.map((item, index) => {
                return <ul key={index}>{item}</ul>
              })
            : null}

          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={handleFormSubmission}
          >
            {" "}
            Submit{" "}
          </Button>
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
