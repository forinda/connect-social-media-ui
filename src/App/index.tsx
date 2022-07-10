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
import Discover from 'pages/Discover'
import Meme from 'pages/Meme'
import NotFound from 'pages/NotFound'
import UserSingleChat from 'pages/UserSingleChat'
import UserChats from 'pages/UserChats'

const App = () => {
  return (
    <HashRouter>
      <Preloader>
        <BaseLayout>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path='chat' element={<UserChats />} >
              <Route index element={<UserSingleChat />} />
            </Route>
            <Route path='meme' element={<Meme />} />
            <Route path='profile' element={
              <LoginRequired>
                <Profile />
              </LoginRequired>
            }>

              <Route index element={
                <LoginRequired>
                  <ProfileAbout />
                </LoginRequired >} />
              <Route path='followers' element={<ProfileFollowers />} />
              <Route path='posts' element={<ProfilePosts />} />
              <Route path='followings' element={<ProfileFollowings />} />
              <Route path='discover' element={<Discover />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BaseLayout>
      </Preloader>
    </HashRouter>
  )
}

export default App