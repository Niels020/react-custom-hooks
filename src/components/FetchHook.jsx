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

            <div style={{border: 'solid black 1px'}}>
                <h3>custom hook for a fetch request</h3>
                {console.log(data)}
                <p>{data.activity}</p>
            </div>
        
        )

        
}

export default FetchHook