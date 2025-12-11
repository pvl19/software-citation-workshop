import React, { useState } from 'react'
import Banner from './components/banner'
import Overview from './pages/overview'
import Schedule from './pages/schedule'
import Location from './pages/location'
import Registration from './pages/registration'
import OrganizingCommittees from './pages/ocs'
import './App.css'

export default function App() {
  const [tab, setTab] = useState('Overview')

  return (
    <div className="app">
      <Banner />

      <div className="page">
        <aside className="sidebar" aria-label="Main navigation">
          <nav>
            <ul>
              <li>
                <button
                  className={tab === 'Overview' ? 'active' : ''}
                  onClick={() => setTab('Overview')}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Schedule' ? 'active' : ''}
                  onClick={() => setTab('Schedule')}
                >
                  Schedule
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Location' ? 'active' : ''}
                  onClick={() => setTab('Location')}
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Organizing Committees' ? 'active' : ''}
                  onClick={() => setTab('Organizing Committees')}
                >
                  Organizing Committees
                </button>
              </li>
              <li>
                <button
                  className={tab === 'Registration' ? 'active' : ''}
                  onClick={() => setTab('Registration')}
                >
                  Application
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="content">

          <section className="tab-content">
            {tab === 'Overview' && (
              <Overview>
              </Overview>
            )}

            {tab === 'Schedule' && (
              <Schedule>
              </Schedule>
            )}

            {tab === 'Location' && (
              <Location>
              </Location>
            )}

            {tab === 'Organizing Committees' && (
              <OrganizingCommittees>
              </OrganizingCommittees>
            )}

            {tab === 'Registration' && (
              <Registration>
              </Registration>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
