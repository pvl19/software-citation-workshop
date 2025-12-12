import React from 'react'
import './schedule.css'

export default function Schedule() {
  return (
    <div className="schedule">
      <h1>Workshop Schedule</h1>
      <p>
        The workshop will be help from <b>Monday April 13th</b> to <b>Thursday April 16th, 2026</b>.
        <br></br>
        <br></br>
        The first day will consist of flash talks by all attendees, which will be designed to highlight everyone's unique perspective and contributions to the committee, and to facilitate discussion. After the first day, most of the workshop will consist of discussions in small groups. The format will be similar to what is often called an "Unconference" approach, where active discussions are prioritized.
      </p>
      <div className="agenda-wrap">
        <img src="/resources/agenda.png" alt="Workshop Agenda" className="agenda" />
      </div>
      <a href="/resources/software-citation-agenda.pdf" download>Download Schedule PDF</a>
      <h2>Marketplace Discussion</h2>
      <p>
        The "Marketplace" style discussions will involve participants bringing ideas of their own to discuss with others, so start thinking about what you would like to get community input on!
        <br></br>
        <br></br>
        The first hour of Tuesday will be dedicated to brainstorming and sharing these ideas. The rest of the day will be spent discussing these items in small groups, until the last hour when each group will share their takeaways with the rest of participants.
        <br></br>
        <br></br>
        Wednesday and Thursday will be spent actively working on these goals in small groups.
      </p>
    </div>
  )
}