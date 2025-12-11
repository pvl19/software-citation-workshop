import React from "react";
import RegisterButton from "../components/register-button";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <p>
        The Software Citation Workshop will run from <b>Monday April 13 - Thursday April 16, 2026</b> at the University of California San Diego.
        <RegisterButton/>
        The purpose of this workshop is to bring together experts in the astronomy and astrophysics software citation community, and participants with a wide variety of related experience including software engineering and journal expertise.
        <br></br>
        <br></br>
        Because this workshop is primarily dedicated to small group discussions, the number of participants will be limited, and so attendance is by application only. However, we are seeking participation from diverse perspectives and career stages to ensure that the community is properly represented, so we encourage anyone with an interest to apply! Expertise in astronomy is not required.
        <br></br>
        <br></br>
        There are 2 primary goals of this workshop:
        <ol>
          <li>Creating improved guidelines on how to make astronomy software citable and how to cite astronomy software</li>
          <li>Prioritizing enhancements to the <a href="https://www.tomwagg.com/software-citation-station/" >The Software Citation Station</a> to enable convenient practice of the community guidelines.</li>
        </ol>
        Attendees will give short flash talks, but the majority of the meeting will be group discussions, so we expect active participation from everyone!
      </p>
    </div>
  )
}