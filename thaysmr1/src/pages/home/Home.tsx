import './home.css'
import { motion } from 'framer-motion'
import background from '../../assets/backvideo.mp4';
import Navbar from '../../components/Navbar'; // Import your Navbar component

const Home = () => {
  return (
    <section className='home-container'>
      <div className='video-container'>
        <video autoPlay loop muted id='bg-video'>
          <source src={background} type='video/mp4' />
        </video>
      </div>
      <Navbar /> 

      <div className='content-text'>
          <h1>Hi, I am <span className='myname'>&nbsp;Thays Moia Ribeiro</span></h1>
          <p>I have Graduation degree in Law ⚖, and Association degree in System Developement 💻and Administration 📊</p>
        </div>
        <div className='content-people' style={{width: 1500, height: 400, marginTop: -100}}>
          {/* <ComputersCanvas /> */}
        </div>
    </section>
  );
};

export default Home;