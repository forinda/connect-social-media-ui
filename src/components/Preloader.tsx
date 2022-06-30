import React from 'react'

const Preloader = ({ children }: { children: React.ReactElement }) => {
    const [loading, setLoading] = React.useState<boolean>(true)
    function load() {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }
    React.useEffect(() => {
        load()
    }, [])
    return (
        loading ? <div className='w-full h-full overflow-hidden flex justify-center items-center'>
            <img src="/preloader.svg" alt="" className='w-full h-full object-cover' />
        </div> : children
    )
}

export default React.memo(Preloader)