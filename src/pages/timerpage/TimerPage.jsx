import React from 'react'
import Clock from './components/clock/Clock'
import PomodoroTask from './components/task-section/PomodoroTask'
import CreateTaskModal from './components/createTaskModal/CreateTaskModal'
import './assets/style.css'

export default function TimerPage() {
    const defaultTime = 10*1000
    const [state, setState] = React.useState({time:defaultTime, playState:'stop'})
    const [navigation, setNavigation] = React.useState('home')
    const [tasks, setTasks] = React.useState([])
    function stopTimer(){
        setState({
            time:defaultTime, playState:'stop'
        })
    }
    function startTimer(){
        setState(prev => ({
            ...prev, playState:'start'
        }))
    }
    function pauseTimer(){
        setState(prev => ({
            ...prev, playState:'pause'
        }))
    }
    function tickTime(){
        setState(prev => ({
            ...prev, time: prev.time-10
        }))
    }
    
    return (
    <main className='timer-page-container flex'>
        {navigation === 'createTask' ? <CreateTaskModal navigate={setNavigation} addTask={setTasks}/> :
        <main className='timer-page flex'>
                <div className='left-part flex'>
                    <h1>Pomodoro Timer</h1>
                    <Clock 
                        defaultTime={defaultTime}
                        time={state.time} 
                        state={state.playState} 
                        changeTime={tickTime}
                    />
                    {state.playState == 'stop' && <button onClick={startTimer}>Start</button>}
                    {state.time <= 0 ? <button onClick={stopTimer}>Done</button> :
                    state.playState != 'stop' &&
                    <div className='when-start flex'>
                        {state.playState != 'pause' && <button onClick={pauseTimer}>Pause</button>}
                        {state.playState == 'pause' && <button onClick={startTimer}>Continue</button>}
                        <button onClick={stopTimer}>Stop</button>
                    </div>}
                </div>
                <div className='right-part'>
                    <PomodoroTask navigate={setNavigation} tasks={tasks}/>
                </div>
            </main>}
    </main>            
    )
}