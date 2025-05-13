import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Vatsal Prajapati</b> and I am from Gujarat, India.
            I'm a <b>MERN stack developer</b> and a Third year college student pursuing <b>B.Com in Shri K.K Shashtri Government Commerce College</b>. <br/><br/>
            
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
          My passion lies as a <b> Full-stack developer </b>accomplished in modern web technologies React js and Node js. I have experience in state management with Redux and Redux Toolkit Thunk, creative UI/UX design in React. Furthermore, I have implemented MVC, managed databases with Atlas, and performed CRUD operations. Moreover, I have experience with cookies management and user authentication with both Passport and JWT in Node js and Express js.<a href="https://www.instagram.com/vatsal__prajapati_2005" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='jQuery ' />
        <Skills skill='Postman' />
        <Skills skill='Css' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About