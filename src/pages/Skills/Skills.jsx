import { useParams } from 'react-router-dom'
import './Skills.css'

const Skills = () => {
  const {title} = useParams()
  return (
    <div className='skills'>
      <h1>{title}</h1>
    </div>
  )
}

export default Skills

