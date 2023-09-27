import useWindowDimension from '../hooks/useWindowDimension.jsx'

const WindowDimension = () => {

    const {width, height} = useWindowDimension()

    return (
        <div style={{border: 'solid black 1px'}}>
            <p>{`window width: ${width} | window heigth: ${height}`}</p>
        </div>
    )
}

export default WindowDimension