import React from "react";

function About() {
  return (
    <div class="fill-window">
      <h1 class="card-header">About Me</h1>
      {/* Profile Pic */}
      <h4><img src="profile.png" alt="Profile pic"></img></h4>
      <h4 class="card-body">
        {/* Text Description */}
        <p class="card-text">I am Ted Belanoff, and I am an amateur developer originally from Northern California. 
          I have a number of years of data analysis, SQL, and VBA experience and currently work in the financial services field.
        </p> 
      {/* Links to Personal Resources */}
      <a href="https://www.linkedin.com/in/belanoff">LinkedIn</a>
      <br></br>
      <a href="https://github.com/TedBelanoff">GitHub</a>
      <br></br>
      <a href="Belanoff Resume.pdf">Resume</a></h4>
    </div>
  );
}

export default About;
