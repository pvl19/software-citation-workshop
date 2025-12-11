import React from 'react'
import './registration.css'
import RegisterButton from '../components/register-button'

export default function Registration() {
  return (
    <div className="registration">
      <h1>Application</h1>
      <p>
        <div>The application deadline is <b><i>January 14, 2026.</i></b></div>
        <RegisterButton/>
        All applicants will receive a response by January 31, 2026.
        <br></br>
        <br></br>
        We encourage applications from researchers, practitioners, and other stakeholders interested in software citation, at any career stage!
        </p>
    </div>
  )
}