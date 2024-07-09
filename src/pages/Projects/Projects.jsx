import { useParams } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  const {title} = useParams()
  return (
    <div className='projects'>
      <h1>{title}</h1>
    </div>
  )
}

export default Projects