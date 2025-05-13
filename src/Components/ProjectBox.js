import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TicTacDesc : "A fully functional Tic-Tac-Toe game developed using HTML, CSS, and vanilla JavaScriptThe application features two-player turn-based logic with automatic winner detection.Includes a clean and responsive user interface with a restart game option.Deployed on Netlify for seamless accessibility and performance.Also includes visual indicators to highlight the winning combination for better user experience.",
    TicTacGithub : "https://github.com/VatsalPrajapati2005/Tic-Tag-Tow-Game-With-js.git",
    TicTacWebsite : "https://fungame11.netlify.app/",

    ResponsivewebDesc:"Developed a responsive and scalable E-Commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented secure user authentication, dynamic product listings, shopping cart, and order management features. Built a dedicated admin panel for product and inventory control. Utilized RESTful APIs for seamless communication between frontend and backend. Focused on clean UI/UX design, data security, and performance optimization throughout the application.",
    ResponsivewebGithub:"https://github.com/VatsalPrajapati2005/Mern-Project.git",
    ResponsivewebWebsite:"https://mern-project-murex-tau.vercel.app/",

    SmartCalcDesc : "A clean and responsive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The project showcases strong understanding of DOM manipulation, event handling, and responsive UI design using core web technologies. It also emphasizes writing clean, maintainable code without relying on external libraries or frameworks.",
    SmartCalcGithub : "https://github.com/VatsalPrajapati2005/Calculator-with-Keydown-js.git",
    SmartCalcWebsite : "https://mathzy.netlify.app/",

    BlogAdminDesc:"A highly scalable and secure backend developed using Express JS for a Blog Application. It implements user authentication (Signup/Login), CRUD operations for blog posts, and secure RESTful API endpoints. Designed with best practices in mind, the backend ensures seamless communication with the frontend and handles asynchronous operations efficiently,Integrated middleware for error handling and route protection to enhance security and maintainability.",
    BlogAdminGithub:"https://github.com/VatsalPrajapati2005/login-Blog-adminPanel.git",
    BlogAdminWebsite:"https://login-blog-adminpanel.onrender.com",
    
    DynamicDataManagerDesc:"A modern React JS application utilizing Redux Toolkit for efficient state management. The project features asynchronous data fetching with createAsyncThunk, centralized state handling using createSlice, and a clean, modular component structure. The app demonstrates optimal performance, seamless user experience, and maintainable code architecture, ideal for scalable production applications.",
    DynamicDataManagerGithub:"https://github.com/VatsalPrajapati2005/Redux-Toolkit.git",
    DynamicDataManagerWebsite:"https://redux-toolkit-nine-taupe.vercel.app/",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox