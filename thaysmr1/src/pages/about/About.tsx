import '../about/about.css'
import Me from '../../assets/mypic.jpg'

const About = () => {
  return (
    <section className='container'>
      <div className="leftHalf">About 1</div>
      <div className="rightHalf">About 2</div>
      <div className='middleHalf'>
        <div className='subBoxTotal'>
          <div className='subBoxText'>
            <p>Introduction</p>
            <h2>Overview</h2>
            <p>I am a skilled software developer with experience in in so many areas (as sales, law, administrative, cleaner, banker, aupair) and with code in HTML, CSS, Javascript, Python, React, Three.js, Node, Express, PHP, C, JAVA, Raspberry PI and and Aplications, Handlebars, SQL, Android Studio, GitHub, Visual Studio Code, Codespaces, Web Systems Project, Programming Logic, Portugol and others, while also being an aupair. "Continue learning by myself."(Unknown author)</p>

            <h2>
              <a target = "_blank">Download my Curriculum 📋</a>
            </h2> 
            <h2>
              <a href = "https://www.linkedin.com/in/thays-moia-ribeiro-475b39275/" target = "_blank">LinkedLn 🕵🏾‍♀️</a>
            </h2>
            <h2>
              <a href = "https://github.com/ThayRibeiro0" target = "_blank">Github 💻</a>
            </h2>
          </div>
        </div>
        <div>
          <div className='subBoxImg'>
            <img className='pic' src={Me} alt="Profile Picture" />
          </div>    
        </div>
      </div>
    </section>
    // <div> 
    //   <div>
    //     <p> Introduction </p>
    //     <h2> Overview </h2>
    //   </div> 

    //   <div>
    //     <p>I am a skilled software developer with experience in in so many areas (as sales, law, administrative, cleaner, banker, aupair) and with code in HTML, CSS, Javascript, Python, React, Three.js, Node, Express, PHP, C, JAVA, Raspberry PI and and Aplications, Handlebars, SQL, Android Studio, GitHub, Visual Studio Code, Codespaces, Web Systems Project, Programming Logic, Portugol and others, while also being an aupair.
    //   Phase: "Continue learning by myself."(Unknown author)</p>
    //     <h2>
    //       <a target = "_blank">Download my Curriculum 📋</a>
    //     </h2> 
    //     <h2>
    //       <a href = "https://www.linkedin.com/in/thays-moia-ribeiro-475b39275/" target = "_blank">LinkedLn 🕵🏾‍♀️</a>
    //     </h2>
    //     <h2> 
    //       <a href = "https://github.com/ThayRibeiro0" target = "_blank">Github 💻</a>
    //     </h2>
    //   </div>
    // </div>
  )
}

export default About