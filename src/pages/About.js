import React from 'react';
import about from "../assets/about.jpg";
import "../styles/About.css";



function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${about})` }}>
        
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>

        <p>Ut exercitation adipisicing et consequat veniam sunt amet fugiat ea proident fugiat. Officia culpa dolore cillum officia aliqua in eu sint Lorem proident in ad. Reprehenderit et nulla nulla aliquip Lorem non nisi esse. Nisi eu non duis et elit laboris enim deserunt. Aliqua ullamco mollit quis pariatur qui Lorem dolor et. Non quis in eiusmod cillum tempor do qui aliquip duis voluptate est.</p>
      </div>
    </div>
  );
}

export default About;
