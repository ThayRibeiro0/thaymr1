import background from '../../assets/backvideo.mp4'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
  return (
    <section className='home section grid'>
        <video autoPlay loop muted id='bg-video'> 
          <source src={background} type="video/mp4" />
        </video>
    </section>
  )
}

export default Home