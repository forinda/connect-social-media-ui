import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
type HomeRegisterPageType = {
    page:HomepageTypes['page'],
    setPage:HomepageTypes['setPage']
}
const HomeRegistration = (props:HomeRegisterPageType) => {
  return (
    <div>HomeRegistration</div>
  )
}

export default HomeRegistration