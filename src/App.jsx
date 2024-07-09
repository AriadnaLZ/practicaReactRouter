import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import './App.css'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import NotFound from './pages/NotFound/NotFound'
import Projects from './pages/Projects/Projects'

function App() {


  return (
    <>
      <div className='app'>
      <Header></Header>
      <Routes>
          <Route path="/About/:title" element={<About/>} />
          <Route path="/Skills/:title" element={<Skills/>}/>
          <Route path="/Projects/:title" element={<Projects/>}/>
          <Route path="*" element={<NotFound/>}/>

      </Routes>
      </div>
        
    </>
  )
}

export default App
