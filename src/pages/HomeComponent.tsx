import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
import BaseUnAuthorizedHomepage from './BaseUnAuthorizedHomepage'

const HomeComponent = ({ setPage, page }: HomepageTypes) => {

  return (
     <BaseUnAuthorizedHomepage page={page} setPage={setPage} />
  )
}

export default HomeComponent