import '../about/about.css'
import Me from '../../assets/mypic.jpg'
import { FcReading } from "react-icons/fc";

const About = () => {
  return (
    <section className='containerabout'>
      <div className='subBoxImg'>
        <img className='pic' src={Me} alt="Profile Picture" />
      </div>
      <div className='subBoxText'>
        <p>Introduction</p>
        <h2>Overview <FcReading /></h2>   
        <p>I am a skilled software developer with experience in in so many areas (as sales, law, administrative, cleaner, banker, aupair) and with code in HTML, CSS, Javascript, Python, React, Three.js, Node, Express, PHP, C, JAVA, Raspberry PI and and Aplications, Handlebars, SQL, Android Studio, GitHub, Visual Studio Code, Codespaces, Web Systems Project, Programming Logic, Portugol and others, while also being an aupair. "Continue learning by myself."(Unknown author)</p>
      </div>
    </section>
  )
}

export default About