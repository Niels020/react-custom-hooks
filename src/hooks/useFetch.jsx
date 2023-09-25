import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setIsError)
            .finally(() => setIsLoading(false))
    }, [url])


    return [ data, isLoading, isError ]
}

export default useFetch