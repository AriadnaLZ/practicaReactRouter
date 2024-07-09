import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => {

  return (
    <header>
      <ul>
        <li>
          <NavLink to='/About/About' >About</NavLink>
        </li>
        <li>
        <NavLink to='/Skills/Skills' >Skills</NavLink>
          </li>
        <li>
        <NavLink to='/Projects/Projects' >Projects</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header