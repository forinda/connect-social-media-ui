import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
type HomeLoginPageType = {
  page:HomepageTypes['page'],
  setPage:HomepageTypes['setPage']
}
const HomeLogin = (props:HomeLoginPageType) => {
  return (
    <div>HomeLogin</div>
  )
}

export default HomeLogin