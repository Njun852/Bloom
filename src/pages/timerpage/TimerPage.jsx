import React from 'react'
import Clock from './components/clock/Clock'
import PomodoroTask from './components/task-section/PomodoroTask'
import CreateTaskModal from './components/createTaskModal/CreateTaskModal'
import './assets/style.css'

export default function TimerPage() {
    const defaultTime = 2*1000
    const [state, setState] = React.useState({time:defaultTime, playState:'stop'})
    const [navigation, setNavigation] = React.useState('home')
    const [tasks, setTasks] = React.useState([])
    function finishCycle(){
        const currentTask = tasks.find(task => task.current)
        setTasks(current => current.map(task => ({...task, finished: 
            task === currentTask ? task.finished+1 : task.finished})))
    }
    function stopTimer(){
        if(state.time <= 0 && tasks.length > 0){
            finishCycle()
        }
        setState({
            time:defaultTime, playState:'stop'
        })
    }
    function updateState(newState){
        if(newState === 'start'){
            const currentTask = tasks.find(task => task.current)
            if(currentTask.finished === currentTask.max){
                setTasks(current => {
                    if(current.length === 1) return []    
                    const removedFinishedTask = current.filter(task => task != currentTask)
                    removedFinishedTask[0].current = true
                    return removedFinishedTask
                })
            }
        }
        setState(prev => ({
            ...prev, playState: newState
        }))
    }
    function tickTime(){
        setState(prev => ({
            ...prev, time: prev.time-10
        }))
    }
    return (
    <main className='timer-page-container flex'>
        {navigation === 'createTask' ? <CreateTaskModal navigate={setNavigation} tasks={tasks}addTask={setTasks}/> :
        <main className='timer-page flex'>
                <div className='left-part flex'>
                    <h1>Pomodoro Timer</h1>
                    <Clock 
                        defaultTime={defaultTime}
                        time={state.time} 
                        state={state.playState} 
                        changeTime={tickTime}
                    />
                    {state.playState == 'stop' && <button onClick={()=> updateState('start')}>Start</button>}
                    {state.time <= 0 ? <button onClick={stopTimer}>Done</button> :
                    state.playState != 'stop' &&
                    <div className='when-start flex'>
                        {state.playState != 'pause' && <button onClick={()=> updateState('pause')}>Pause</button>}
                        {state.playState == 'pause' && <button onClick={()=> updateState('start')}>Continue</button>}
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