import React from 'react'
import { useAppSelector } from 'state/hooks'
import Footer from './Footer'
import Header from './Header'


type LayoutPageProps = {
  children: React.ReactElement
}
const BaseLayout = ({ children }: LayoutPageProps) => {
  const { isAuthenticated } = useAppSelector(state => state.root.auth)
  return (
    <div className='max-w-7xl mx-auto'>
      {isAuthenticated && <Header />}
      {children}
      {!isAuthenticated && <Footer />}
    </div>
  )
}

export default BaseLayout