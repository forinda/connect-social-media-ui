import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Profile from 'pages/Profile'
import Welcome from 'pages/Welcome'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App