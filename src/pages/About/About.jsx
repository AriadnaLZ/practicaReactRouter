import { useParams } from 'react-router-dom'
import './About.css'

const About = () => {
  const {title} = useParams()
  return (
    <div className='about'>
      <h1>{title}</h1>
    </div>
  )
}

export default About