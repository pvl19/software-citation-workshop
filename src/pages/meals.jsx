import React from 'react'
import './meals.css'

export default function Meals() {
  return (
    <div className="meals">
      <h1>Meals</h1>
      <p>There will be coffee/tea and snacks provided throughout the workshop. Meals are not provided for this workshop, however there are many restaurants on campus for lunch, and we will plan to gather for informal dinners together throughout the week.</p>
      <h2>Dinners</h2>
      <p>
        <b>Monday:</b> We will be having an informal dinner at La Jolla Shores after the beach excursion on Monday evening.<br></br>
        <b>Tuesday:</b> We plan to have a group dinner at a restaurant close to campus on Tuesday evening.<br></br>
        <b>Wednesday:</b> We will be having an informal group dinner on Wednesday evening, likely at The Shops at La Jolla Village.<br></br>
        <b>Thursday:</b> Nothing is planned, however we encourage attendees who are still in town on Thursday evening to self organize.
      </p>
      <h2>Lunches</h2>
      <p> There are many different lunch options on campus, including the Price Center which is a ~10 minute walk from the workshop. You can explore all options on campus here:
      </p>
      
                  <div className="iframe-wrapper" aria-hidden={false}>
                <iframe
                    src="https://map.concept3d.com/?id=1005#!ce/17970?ct/17970,18012,18014?s/?sbc/?mc/32.88055863066228,-117.23666770759394?z/16.076776050389412?lvl/0"
                    title="University of California San Diego - Restaurants and Cafes"
                    loading="lazy"
                    allow="geolocation; gyroscope; accelerometer"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
    </div>
  )
}