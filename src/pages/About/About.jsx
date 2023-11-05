import React from 'react';
import './About.css';
import SaiVarun from "../../Assets/varun.jpg";
import Shwetank from "../../Assets/shwetank.jpg";
import Ranganath from "../../Assets/ranganath.png";

function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Shwetank',
      role: 'NIT Bhopal',
      branch: 'ECE',
      year: 'Final Year',
      description1: 'Worked on many projects involving Advanced Waste Management System using AI/ML, Graphical Authentication System,etc. Using Tech Stack as : MERN Stack, AI/ML, Algorithms.',
      description2: 'Attended Multiple Hackathons involving WittyHacks 3.0, MLH Hackathon & open-source events.',
      description3: 'Check out my Github Profile at https://github.com/aayanlobo and Linkedin profile at https://www.linkedin.com/in/shwetank-aryan/',
      image: Shwetank, // Set the image source for Shwetank
    },
    {
      id: 2,
      name: 'N Sai Varun',
      role: 'NIT Bhopal',
      branch: 'ECE',
      year: 'Final Year',      description1: 'Full Stack Mobile developer and Web developer with proficiency in multiple frameworks like Flutter, MERN Stack, Fiber(goLang) and AWS hosting services',
      description2: "I've undertaken various freelance projects involving the management and development of a diverse range of web applications and native mobile applications.",
      description3: 'Check out my Linkedin profile : https://www.linkedin.com/in/nsvot/',
      image: SaiVarun, // Set the image source for Sai Varun
    },
    {
      id: 3,
      name: 'G Ranganath',
      role: 'NIT Bhopal',
      branch: 'ECE',
      year: 'Final Year',
      description1: 'Python Backend Developer. Using Tech Stack as: Django, Flask, FastAPI',
      description2: 'All of my projects can be found here : https://github.com/ranganath294',
      description3: 'Working as a Freelancer. Built Backend for Otabu Global Pvt Ltd', image: Ranganath, // Set the image source for G Ranganath
    },
  ];

  return (
    <div className="about">
      <h1>Our Team - HackTheHustle</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id}>
            <div className="member-details">
            <div className="member-image" style={{ background: `url(${member.image}) no-repeat center`, backgroundSize: 'cover' }}></div>

              <div className="member-info">
                <h2>{member.name}</h2>
                <p>Branch: {member.branch}</p>
                <p>Year: {member.year}</p>
                <p>College: {member.role}</p>
              </div>
            </div>
            <div className="member-description">
              <ul>
                <li>{member.description1}</li>
                <li>{member.description2}</li>
                <li>{member.description3}</li>
                {/* Add more bullet points as needed */}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
