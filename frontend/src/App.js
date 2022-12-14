import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Resume from './routes/Resume'


function App() {
  return (
   <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/resume' element={<Resume/>}/>
      


     </Routes>
   
   
   </>
  );
}

export default App;
