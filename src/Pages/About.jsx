import React from 'react'
import Marquee from 'react-fast-marquee';
import html from '../assests/html.png'
import css from '../assests/css.png'
import js from '../assests/js.jpg'
import bootstrap from '../assests/bootstrap.png'
import react from '../assests/react.png'
import node from '../assests/node.png'
import express from '../assests/express.png'
import mongo from '../assests/mongo.png'


const About = () => {

  return (
    <>
      <div className="about-main">
        <div className="about-des">
          I'm Syed Hanzila, a dedicated MERN stack developer and code enthusiast currently pursuing a Bachelor's Degree in Computer Science.
          I specialize in building dynamic web applications using MongoDB, Express.js, React, and Node.js.
          Passionate about solving complex problems and continuously learning new technologies, I aim to create innovative solutions that make a difference.
          <br />
          <br />
        </div>
        <h3 className='tech-used'>
          Technologies I Use
        </h3>
        <Marquee>
          <div className="marq_pic">
            <img src={html} alt='picnotfound' />
            <img src={css} alt='picnotfound' />
            <img src={bootstrap} alt='picnotfound' />
            <img src={js} alt='picnotfound' />
            <img src={react} alt='picnotfound' />
            <img src={node} alt='picnotfound' />
            <img src={express} alt='picnotfound' />
            <img src={mongo} alt='picnotfound' />
          </div>
        </Marquee>
        <div className="tech-used">
          Skills and Expertise
        </div>
        <div className="about-skills">
          <h3>MERN Stack:</h3>
          <p>Proficient in MongoDB, Express.js, React, and Node.js, enabling me to develop full-stack web applications with efficiency and elegance.</p>
          <h3>Front-End Development:</h3>
          <p>Expertise in HTML, CSS, JavaScript, and modern frameworks, ensuring visually appealing and highly functional user interfaces.</p>
          <h3>Back-End Development:</h3>
          <p>Skilled in creating robust server-side applications and RESTful APIs, with experience in database management and server deployment</p>
          <h3>Version Control:</h3>
          <p>Familiar with Git and GitHub for collaborative and version-controlled development</p>
        </div>

      </div>
    </>
    
  )
}

export default About