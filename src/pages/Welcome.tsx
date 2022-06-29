import HomeSwitcher, { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'

const Welcome = () => {
    const [page, setPage] = React.useState<HomepageTypes['page']>('home')
    return (
        <React.Fragment>
            <HomeSwitcher page={page} setPage={setPage} />
        </React.Fragment>
    )
}

export default Welcome