import useFetch from '../hooks/useFetch.jsx'

const FetchHook = () => {

    const url = 'http://www.boredapi.com/api/activity/'
    const [ data, isLoading, isError ] = useFetch(url)


    if(isError) {
        return (

            <p>error. please refresh</p>

        )
    } else if(isLoading) {
        return (

            <p>loading...</p>

        )
    } else 
        return (

            <>
                {console.log(data)}
                <p>{data.activity}</p>
            </>
        
        )

        
}

export default FetchHook