import React from 'react'
import './registration.css'
import RegisterButton from '../components/register-button'

export default function Registration() {
  return (
    <div className="registration">
      <h1>Application</h1>
      <p>
        <div>The application deadline <s>is January 14, 2026</s> has been extended to <b><i>February 2, 2026</i></b>.</div>
        <RegisterButton/>
        All applicants will receive a response by February 12, 2026.
        <br></br>
        <br></br>
        We encourage applications from researchers, practitioners, and other stakeholders interested in software citation, at any career stage!
        </p>
    </div>
  )
}