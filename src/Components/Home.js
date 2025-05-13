import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Vatsal Prajapati</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          {/* <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Node.js</b> and know a bit of <b>React.js</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br />
            <br />
            As a dedicated learner, I continuously explore new technologies and development practices to improve my skills and stay aligned with industry standards. I enjoy working on real-world projects that challenge my problem-solving abilities and help me grow as a full-stack developer.
            My goal is to contribute to impactful projects, collaborate with innovative teams, and build solutions that make a meaningful difference.
          </p> */}
          <p>
            I’m a MERN stack developer and a passionate learner currently pursuing my studies in technology. I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
            <br></br><br></br>
So far, I’ve built multiple projects including an admin panel with blog functionality, user authentication systems, and interactive tools like a JavaScript calculator.
I focus on writing clean, maintainable code and enjoy solving real-world problems through web development. <br></br><br></br>
I’m always exploring new technologies and best practices to enhance my skills and stay up-to-date with the evolving tech landscape.
My goal is to contribute to impactful projects, work with innovative teams, and grow as a full-stack developer in the software industry.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home