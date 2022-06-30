import HomeSwitcher, { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
import { useAppSelector } from 'state/hooks'
import { HomeFeeds } from './HomeFeeds'

const Welcome = () => {
    const [page, setPage] = React.useState<HomepageTypes['page']>('home')
    const { isAuthenticated } = useAppSelector(state => state.root.auth)
    return (
        isAuthenticated ? <HomeFeeds /> :
            <HomeSwitcher page={page} setPage={setPage} />
    )
}

export default Welcome