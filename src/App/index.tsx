import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Profile from 'pages/Profile'
import Welcome from 'pages/Welcome'
import ProfileAbout from 'pages/ProfileAbout'
import ProfileFollowers from 'pages/ProfileFollowers'
import ProfilePosts from 'pages/ProfilePosts'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path='profile' element={<Profile/>}>
          <Route index element={<ProfileAbout/>}/>
          <Route path='followers' element={<ProfileFollowers/>}/>
          <Route path='posts' element={<ProfilePosts/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App