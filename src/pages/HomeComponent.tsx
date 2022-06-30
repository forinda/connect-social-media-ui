import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
import { useAppSelector } from 'state/hooks'
import BaseUnAuthorizedHomepage from './BaseUnAuthorizedHomepage'


const HomeComponent = ({ setPage, page }: HomepageTypes) => {
  const { isAuthenticated } = useAppSelector(state => state.root.auth)
  console.log(isAuthenticated);

  return (
     <BaseUnAuthorizedHomepage page={page} setPage={setPage} />
  )
}

export default HomeComponent