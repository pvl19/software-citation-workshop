import React from "react";
import "./location.css";

export default function Location() {
  return (
    <div className="location">
      <h1>Workshop Logistics</h1>
      <h2>Location</h2>
      <p>The workshop will be hosted at the <b><i><a href="https://www.google.com/maps/place/San+Diego+Supercomputer+Center/@32.8843429,-117.2422346,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc06c1fd84fe93:0x1eb27ea2a3de8388!8m2!3d32.8843429!4d-117.2396597!16zL20vMDM1ODB6?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">San Diego Supercomputer Center</a></i></b>, on the UC San Diego campus. The group sessions will be held in the <b>Auditorium</b>, with breakout sessions in nearby rooms.</p>
      <p><b><i>When you arrive, please check in at the registration desk in the auditorium.</i></b></p>
      <p>UC San Diego is located north of downtown La Jolla. There is an MTS trolley stop on campus, which offers a convenient way to get to/from other areas of the city. There is also a central bus transportation hub on campus offering service for many bus lines throughout the region.</p>
      <h2>Lodging/Hotels</h2>
      <p>For everyone who registered for the workshop-provided accommodation, it will be booked for you and you will receive details via email.
      </p>
      <h2>Travel</h2>
      <h3>Travel to San Diego</h3>
      <p>
        For all participants traveling from outside of San Diego, you will have received an email with instructions on booking/reimbursing your travel.
      </p>
      <p>The San Diego International Airport (IATA-code: SAN) is served by a large number of US and international airlines. Direct flights are offered to most major US and many non-US airports. For non-direct flights, the Los Angeles International Airport (IATA-code: LAX) offers direct flights to many locations all over the world, located 193 km (120 mi) from San Diego.</p>
      <h3>Travel to Campus</h3>
      Public transportation in San Diego is provided by the San Diego Metropolitan Transportation Services (MTS) (its website offers a journey planner with timetables for all bus, trolley, and metro services in San Diego). To reach the UC San Diego from the airport, there are several options:
      <ul>
        <li>You can take the <a href="https://www.san.org/before-you-go-travel-tips/courtesy-shuttles/" target="_blank" rel="noopener noreferrer">free flyer bus</a> from the airport to the Old Town Transit Center trolley station.</li>
        <li>You can also take the MTS Bus lines <a href="https://www.sdmts.com/getting-around/departures-and-schedules/schedules/923/Downtown" target="_blank" rel="noopener noreferrer">923</a> or <a href="https://www.sdmts.com/getting-around/departures-and-schedules/schedules/992" target="_blank" rel="noopener noreferrer">992</a> to nearby trolley stations.</li>
        <li>From the trolley station, you can take the northbound <a href="https://www.sdmts.com/uc-san-diego-blue-line-trolley-extension" target="_blank" rel="noopener noreferrer">UC San Diego Blue Line trolley</a> to get to the UC San Diego Central Campus stop. A single ride trolley fare is $2.50.</li>
        <li><a href="https://www.sdmts.com/getting-around/airport" target="_blank" rel="noopener noreferrer">MTS Airport Help</a></li>
        <li>A taxi (or Uber/Lyft) from the airport costs about USD $40-$50.</li>
      </ul>
      <h3>Parking on Campus</h3>
      <p>Parking on campus is available in various parking structures and surface lots, but a parking pass must be purchased. Details can be found on the <a href="https://transportation.ucsd.edu/visit/parking.html#la-jolla-academic-campus" target="_blank" rel="noopener noreferrer">UCSD parking website</a>.</p>
      <h3>Getting Around in San Diego</h3>
      <p>Public transportation in San Diego is provided by <a href="https://www.sdmts.com/" target="_blank" rel="noopener noreferrer">SDMTS</a>. UCSD is a short ride from La Jolla, and about 25-30 minutes from downtown San Diego. The La Jolla beach and surrounding areas are easily accessible by walking.</p>
      <h2>Food</h2>
      <p>There will be coffee/tea and snacks provided throughout the workshop.</p>
      <p>Meals are not provided for this workshop, however there are many restaurants on campus (see this map). There is no official workshop dinner, but participants are encouraged to join informal dinners throughout the week.</p>
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