import React from "react";
import RegisterButton from "../components/register-button";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <div><b><i><span style={{color: 'var(--ucsd-blue)'}}>The application deadline has now passed.</span></i></b> All applicants will receive a response by <b><i><span style={{color: 'red'}}>February 12, 2026</span></i></b>.</div>
      <p>
        We are pleased to announce the Software Citation Workshop — an interactive, cross-disciplinary event focused on advancing best practices, implementation strategies, and community engagement for software citation in astronomy research (and beyond)!
      </p>
      <div className="summary when">
        <i class="fa fa-solid fa-calendar"></i>
        <b>When: <i>Monday April 13 - Thursday April 16, 2026</i></b></div>
      <div className="summary where">
        <i class="fa-solid fa-map fa"></i>
        <b>Where: <i>UCSD campus in Sunny San Diego</i></b></div>
      <p>
        <b><i>Some funding support is available to help cover travel and accommodation costs for this workshop (you can apply for this in the workshop application form).</i></b>
      </p>
      <p>
        This workshop will bring together researchers, software developers, librarians, and scholarly communication professionals to address key challenges and opportunities in software citation — a foundational practice for reproducibility, attribution, and scholarly impact in computational research. Attendees will give short flash talks, but the majority of the meeting will be group discussions, so this is an amazing opportunity to meet others in the community with similar interests and we expect active participation from everyone!
      </p>
      <p>
        We are seeking participation from diverse perspectives and career stages to ensure that the community is properly represented, so we encourage anyone with an interest to apply. <b><i>Expertise in astronomy or software citation is not required, and we specifically encourage early-career scientists and software enthusiasts to apply!</i></b>
      </p>
      <p className="nasa-funding">
        <i>This workshop is organized by Floor Broekgaarden, Javier Duarte, Sandra Gesing, Daniel S. Katz, Shahed Shayan-Arani, Phil Van-Lane, Tom Wagg, Peter Williams, and Andrea Zonca, with funding from the National Aeronautics and Space Administration (NASA).</i>
      </p>
    </div>
  )
}