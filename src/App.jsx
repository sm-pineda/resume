import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Name() {
  return (
    <div className="name-and-pic">
      <div className="profile-pic">
        <img src="/picture.png" width="205" />
      </div>
      <div className="name-title">
        <h1>Sophia</h1>
        <h1>Pineda</h1>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p><strong>Address</strong><br />
          San Isidro, Bacolor, Pampanga</p>
        <p><strong>Phone</strong><br />
          +639941085675</p>
        <p><strong>E-mail</strong><br />sm_pineda.student@ua.edu.ph</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <ul>
          <li>Languages: Python, Javascript, SQL, C++</li>
          <li>ITS Database Certified</li>
          <li>Strong communication and teamwork skills</li>
          <li>Problem solving & critical thinking</li>
          <li>Attention to detail and documentation</li>
        </ul>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="description">
      <p>
        IT undergraduate with a strong foundation in programming, web development, and database management.
        Experienced in using Django, React, Vite, and SQL through coursework and academic projects. Eager to learn new technologies,
        collaborate with teams, and apply technical skills to real-world challenges.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-left-spacer"></div>
        <div className="education-content">
          <p>
            <strong>Bachelor of Science in Information Technology</strong><br />
            University of the Assumption
          </p><br />
          <p><strong>Accountancy, Business, and Management</strong><br />
            University of the Assumption
          </p>
        </div>
      </div>
    </div>
  );
}

function ExperienceContent(props) {
  return (
    <div className="experience-content">
      <div className="experience-year">{props.year}</div>
      <div className="experience-title">
        <h3>{props.title}</h3>
        <p className="experience-company"><i>{props.company}</i></p>
        <ul>
          <li>{props.detail1}</li>
          <li>{props.detail2}</li>
          <li>{props.detail3}</li>
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-container">

        <div className="experience-item">
          <div className="experience-year">
            <span>2025</span>
          </div>
          <div className="experience-content-right">
            <ExperienceContent
              title="TechKada 2025 Web Developer & Presenter"
              company="University of the Assumption"
              detail1="Developed and presented a web project as part of the TechKada 2025 event."
              detail2="Showcased skills in front-end development and technical communication."
              detail3="Collaborated with peers to deliver a functional and engaging presentation."
            />
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-year">
            <span>2024</span>
          </div>
          <div className="experience-content-right">
            <ExperienceContent
              title="Freelance Graphic Designer"
              company="Self-Employed"
              detail1="Designed digital and print materials such as posters, social media graphics, and flyers."
              detail2="Collaborated with clients to understand branding requirements and deliver creative solutions."
              detail3="Managed multiple projects independently, meeting deadlines and client expectations."
            />
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-year">
            <span>2023 - Current</span>
          </div>
          <div className="experience-content-right">
            <ExperienceContent
              title="Future IT Professional"
              company="University of the Assumption"
              detail1="Building a solid foundation in programming, web development, and database management."
              detail2="Gaining hands-on experience through academic projects using Django, React, Vite, and SQL."
              detail3="Developing problem-solving, collaboration, and continuous learning skills."
            />
          </div>
        </div>

      </div>
    </div>
  );
}


function App() {
  return (
    <div className="main">
      <div className="left-panel">
        <Name />
        <Contact />
        <Skills />
      </div>
      <div className="right-panel">
        <Description />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App
