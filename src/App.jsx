import React from 'react'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Contact from './components/Contact'
import Links from './components/Links'
const App = () => {
  return (
    <>
    
  <Router>
    <Routes>
        <Route path ='/' element={<Links/> }/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>

  
    </>
  )
}

export default App