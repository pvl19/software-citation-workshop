import React from "react";
import "./ocs.css";

export default function OrganizingCommittees() {
  return (
    <div className="ocs">
        <h1>Organizing Committees</h1>
        <p>
        The Software Citation Workshop is organized by a team with a variety of expertise and backgrounds related to software citation:
        </p>
        <div className="lists">
            <div className="soc">
                <h2>Scientific Organizing Committee</h2>
                <ul>
                    <li><b>Floor Broekgaarden</b> (UC San Diego)</li>
                    <li><b>Javier Duarte</b> (UC San Diego)</li>
                    <li><b>Sandra Gesing</b> (UC San Diego)</li>
                    <li><b>Daniel S. Katz</b> (University of Illinois Urbana-Champaign)</li>
                    <li><b>Phil Van-Lane</b> (UC San Diego/University of Toronto)</li>
                    <li><b>Tom Wagg</b> (Flatiron Institute)</li>
                    <li><b>Peter Williams</b> (Center for Astrophysics)</li>
                    <li><b>Andrea Zonca</b> (San Diego Supercomputer Center)</li>
                </ul>
            </div>
            <div className="loc">
                <h2>Local Organizing Committee</h2>
                <ul>
                    <li><b>Floor Broekgaarden</b> (UC San Diego)</li>
                    <li><b>Javier Duarte</b> (UC San Diego)</li>
                    <li><b>Shahed Shayan-Arani</b> (UC San Diego)</li>
                    <li><b>Phil Van-Lane</b> (UC San Diego/University of Toronto)</li>
                </ul>
            </div>
        </div>
    </div>
  )
}