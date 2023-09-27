import useTimer from '../hooks/useTimer.jsx'

const TimerHook = () => {

    const {
        timer, 
        started, 
        startTimer, 
        resetTimer, 
        pauseTimer
    } = useTimer()

    return (
        <div style={{border: 'solid black 1px'}}>
            <h3>custom hook for a timer</h3>
            <p>{timer}</p>
            <button onClick={startTimer}>start</button>
            <button onClick={resetTimer}>reset</button>
            <button onClick={pauseTimer}>pause</button>
        </div>
    )
}

export default TimerHook