import React from 'react'
import './banner.css'

export default function Banner() {
  return (
    <div>
    <header className="banner">
      <div className='scs-logo'>
        <img src="/resources/software-citation-station-no-circle-blue.png" alt="Software Citation Logo" className="scs-logo-img" />
      </div>
      <div className='workshop-title'>
      <h1>Software Citation Workshop</h1>
      <h2>April 13-16, 2026 | San Diego Supercomputer Center (UCSD)</h2>
      </div>
    </header>
    </div>
  )
}
