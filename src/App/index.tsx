import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Profile from 'pages/Profile'
import Welcome from 'pages/Welcome'
import ProfileAbout from 'pages/ProfileAbout'
import ProfileFollowers from 'pages/ProfileFollowers'
import ProfilePosts from 'pages/ProfilePosts'
import ProfileFollowings from 'pages/ProfileFollowings'
import BaseLayout from 'components/BaseLayout'
import Preloader from 'components/Preloader'
import LoginRequired from 'components/LoginRequired'

const App = () => {
  return (
    <HashRouter>
      <Preloader>
        <BaseLayout>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path='profile' element={
            <LoginRequired>
              <Profile />
            </LoginRequired>
            }>
              <Route index element={<ProfileAbout />} />
              <Route path='followers' element={<ProfileFollowers />} />
              <Route path='posts' element={<ProfilePosts />} />
              <Route path='followings' element={<ProfileFollowings />} />
            </Route>
          </Routes>
        </BaseLayout>
      </Preloader>
    </HashRouter>
  )
}

export default App