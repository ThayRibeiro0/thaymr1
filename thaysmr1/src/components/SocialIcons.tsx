import { IoLogoLinkedin } from 'react-icons/io'
import { FaGithubSquare } from "react-icons/fa"
import { BiSolidFilePdf } from "react-icons/bi";

import { NavLink } from 'react-router-dom'

import './socialIcons.css'


export const SocialIcons = () => {

  return (
    <div className='socialBox'>
        <div className='social-container'>
            <a className="linkedin icons" href="https://www.linkedin.com/in/thays-moia-ribeiro-475b39275/">
            <IoLogoLinkedin size={35}/>myLinkedin
            </a>
        </div>
        <div className='social-container' >
            <a className="github icons" href="https://github.com/ThayRibeiro0">
                <FaGithubSquare size={35}/> myGithub
            </a>
        </div>
        <div className='social-container' >
            <a className="curriculum icons" href="/">
                <BiSolidFilePdf size={35}/> myCurriculum
            </a>
        </div>
    </div>
  )
}
