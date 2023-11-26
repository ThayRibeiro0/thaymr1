import './home.css'
import { motion } from 'framer-motion'
import background from '../../assets/backvideo.mp4';
import Navbar from '../../components/Navbar'; // Import your Navbar component
import ComputersCanvas from './gltf/Computers'
import { center } from 'maath/dist/declarations/src/buffer';

const Home = () => {
  return (
    <section className='home-container'>
      <div className='video-container'>
        <video autoPlay loop muted id='bg-video'>
          <source src={background} type='video/mp4' />
        </video>
      </div>
      <div className='content-text'>
          <h1>Hi, I am <span className='myname'>&nbsp;Thays Moia Ribeiro</span></h1>
          <p>I have Graduation degree in Law ⚖, and Association degree in System Developement 💻and Administration 📊</p>
      </div>
      <div className='content-people' style={{padding: 0, alignItems: 'center', maxWidth: 1400, height: 200, marginTop: -10, cursor: 'pointer'}}>
        <ComputersCanvas />
      </div>
      <div className='hireme'>
          <a  href='#'>Hire me</a>
      </div>
    </section>
  );
};

export default Home;