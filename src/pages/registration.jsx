import React from 'react'
import './registration.css'
import RegisterButton from '../components/register-button'

export default function Registration() {
  return (
    <div className="registration">
      <h1>Application</h1>
      <p>
        <div>The application deadline is now passed.</div>
        <br></br>
        All applicants will receive a response by <b><i>February 12, 2026</i></b>.
        </p>
    </div>
  )
}