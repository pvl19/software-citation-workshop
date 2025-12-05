import React from 'react'
import './schedule.css'

export default function Schedule() {
  return (
    <div className="schedule">
      <h1>Workshop Schedule</h1>
      <p>
        The workshop will be help from Monday April 13th to Thursday April 16th, 2026.
        <br></br>
        Most of the workshop will consist of discussions in small groups. The "Marketplace" style discussions will involve participants brining ideas of their own to discuss with others.
      </p>

      <div className="table-wrap">
        <object className='agenda' data="./resources/software-citation-agenda.pdf" type="application/pdf">
        </object>
      </div>
    </div>
  )
}