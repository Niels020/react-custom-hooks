//https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
import { useState, useEffect } from 'react'

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window

    return {
        width,
        height
    }
}

const useWindowDimension = () => {
        const [windowDimension, setWindowDimension] = useState(getWindowDimension())

        useEffect(() => {
            function handleResize() {
                setWindowDimension(getWindowDimension())
            }

            window.addEventListener('resize', handleResize)
                return () => window.removeEventListener('resize', handleResize)
        }, [])

    return windowDimension;
}

export default useWindowDimension