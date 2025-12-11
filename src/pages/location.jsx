import React from "react";
import "./location.css";

export default function Location() {
  return (
    <div className="location">
      <h1>Workshop Location</h1>
      <p>The workshop will be hosted on the <b><a href="https://ucsd.edu" target="_blank" rel="noopener noreferrer">UC San Diego</a></b> campus (exact location to be determined).</p>
      <p>UC San Diego is located north of downtown La Jolla. Many hotels are available in this area and can be found with any search engine or travel agency. The MTS trolley runs directly to campus and lodging along the route offer an efficient way of getting to campus quickly. There is also a central bus transportation hub on campus offering service for many bus lines throughout the region.</p>
      <h2>Travel</h2>
      <h3>Travel to San Diego</h3>
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
      <h2>Lodging/Hotels</h2>
      <p>There are a number of hotel options in the area and surrounding areas accessible with public transport:
        <ul>
          <li><a href="https://www.marriott.com/en-us/hotels/sanjs-sheraton-la-jolla-hotel/overview/" target="_blank" rel="noopener noreferrer">Sheraton La Jolla</a>	(1.5 mi / 2.4 km	from campus)</li>
          <li><a href="https://www.hyatt.com/en-US/hotel/california/hyatt-regency-la-jolla-at-aventine/jolla" target="_blank" rel="noopener noreferrer">Hyatt Regency</a>	(2.0 mi / 3.2 km	from campus)</li>
          <li><a href="https://www.bestwestern.com/en_US/book/hotels-in-del-mar/best-western-premier-hotel-del-mar/propertyCode.05731.html" target="_blank" rel="noopener noreferrer">Best Western Premier Hotel Del Mar</a>	(2.0 mi / 3.2 km	from campus)</li>
          <li><a href="https://www.marriott.com/en-us/hotels/lajca-residence-inn-san-diego-la-jolla/overview/" target="_blank" rel="noopener noreferrer">Residence Inn San Diego La Jolla</a>	(1.8 mi / 2.9 km	from campus)</li>
          <li><a href="https://www.estancialajolla.com/" target="_blank" rel="noopener noreferrer">Estancia Hotel</a>	(1.6 mi / 2.6 km	from campus)</li>
          <li><a href="https://www.hilton.com/en/hotels/sanljes-embassy-suites-san-diego-la-jolla/" target="_blank" rel="noopener noreferrer">Embassy Suites</a>	(2.0 mi / 3.2 km	from campus)</li>
          <li><a href="https://www.hilton.com/en/hotels/santphh-hilton-la-jolla-torrey-pines/" target="_blank" rel="noopener noreferrer">Hilton La Jolla Torrey Pines</a>	(2.2 mi / 2.5 km	from campus)</li>
          <li><a href="https://www.ljshoreshotel.com/" target="_blank" rel="noopener noreferrer">La Jolla Shores Hotel</a>	(4.2 mi / 6.8 km	from campus)</li>
          <li><a href="https://www.marriott.com/en-us/hotels/sanlj-san-diego-marriott-la-jolla/overview/" target="_blank" rel="noopener noreferrer">San Diego Marriott La Jolla</a>	(1.8 mi / 2.9 km	from campus)</li>
          </ul>
      </p>
      <h2>Food</h2>
      <p>There are many restaurants on campus, which can be seen in this map.</p>
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