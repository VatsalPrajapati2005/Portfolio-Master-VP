import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"
import { AiFillMediumSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h4>Developed Vatsal Prajapati</h4>
      <h4>Copyright &copy; 2025 VP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/VatsalPrajapati2005" target='_blank'><FaGithub/></a>
        <a href="https://in.linkedin.com/in/vatsal-prajapati-vs2005" target='_blank'><FaLinkedin/></a>
        <a href='kamleshprajapti101947@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://medium.com/@kamleshprajapti101947" target="_blank"><AiFillMediumSquare /></a>
      </div>
    </footer>
  )
}

export default Footer