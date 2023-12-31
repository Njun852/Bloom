import React from 'react'
import Clock from './components/clock/Clock'
import './assets/style.css'

export default function TimerPage() {
    const [isPause, setIsPause] = React.useState(true)
    const [time, setTime] = React.useState(10*1000)
    const [start, setStart] = React.useState(false)

    function startTimer(){
        setTime(10*1000)
        setIsPause(prev => !prev)
        setStart(prev => !prev)
        console.log('hi');
    }
    return (
    <main className='timer-page flex'>
            <div className='left-part flex'>
                <Clock  time={time}
                        changeTime={()=>{setTime(prev => prev-100)}}
                        isPause={isPause}
                        start={start}
                        reset={startTimer}/>
                {!start && <button onClick={startTimer}>
                Start
                </button>}
            {start &&
                <div className='flex when-start'>
                    <button>Pause</button>
                    <button onClick={startTimer}>Stop</button>
                </div> 
            }
            </div>
            <div className='right-part'>
            </div>
        </main>
    )
}