import React from "react";
import RegisterButton from "../components/register-button";
import "./overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <div><b><i><span style={{color: 'var(--ucsd-navy)'}}>We look forward to welcoming all participants to UC San Diego shortly!</span></i></b></div>
      <br></br>
      <div className="summary when">
        <i class="fa fa-solid fa-calendar"></i>
        <b>When: <i>Monday April 13 - Thursday April 16, 2026</i></b></div>
      <div className="summary where">
        <i class="fa-solid fa-map fa"></i>
        <b>Where: <i>San Diego Supercomputer Center (UCSD Campus)</i></b></div>
      <p>
        The Software Citation Workshop is an interactive, cross-disciplinary event focused on advancing best practices, implementation strategies, and community engagement for software citation in astronomy research (and beyond)!
      </p>
      <h2>Workshop Goals</h2>
      <p>
        There are 2 primary goals:
        <ol>
          <li>Creating improved guidelines on how to make astronomy software citable and how to cite astronomy software.</li>
          <li>Prioritizing enhancements to <a href="https://www.tomwagg.com/software-citation-station/">The Software Citation Station</a> to enable convenient practice of the community guidelines.</li>
        </ol>
      </p>
      <p>
        This workshop will bring together researchers, software developers, librarians, and scholarly communication professionals to address key challenges and opportunities in software citation — a foundational practice for reproducibility, attribution, and scholarly impact in computational research. Attendees will give short flash talks, but the majority of the meeting will be group discussions, so this is an amazing opportunity to meet others in the community with similar interests and we expect active participation from everyone!
      </p>
      <p className="nasa-funding">
        <i>This workshop is organized by Floor Broekgaarden, Javier Duarte, Sandra Gesing, Daniel S. Katz, Shahed Shayan-Arani, Phil Van-Lane, Tom Wagg, Peter Williams, and Andrea Zonca, with funding from the National Aeronautics and Space Administration (NASA).</i>
      </p>
      <p>Any questions about the workshop should be directed to <a href="mailto:pvanlane@ucsd.edu">pvanlane@ucsd.edu</a>.</p>
    </div>
  )
}