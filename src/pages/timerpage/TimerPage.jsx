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
        setTasks(current => current.map((task, index) => ({...task, finished: 
            index === 0 ? task.finished+1 : task.finished})))
    }
    function removeTask(){
        if(tasks.length > 0 && tasks[0].finished === tasks[0].max){
            setTasks(current => {
                if(current.length === 1) return []
                const removedFinishedTask = current.filter((task, index) => index != 0)
                return removedFinishedTask
            })
        }
    }
    function stopTimer(){
        if(state.time <= 10) removeTask()
        setState({
            time:defaultTime, playState:'stop'
        })
    }
    function updateState(newState){
        if(newState === 'start'){
            if(tasks.length <= 0) return
        }
        setState(prev => ({
            ...prev, playState: newState
        }))
    }
    function tickTime(){
        setState(prev => ({
            ...prev, time: prev.time-10
        }))
        if(state.time <= 10 && tasks.length > 0){
            finishCycle()
        }
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
                    <PomodoroTask navigate={setNavigation} tasks={tasks} updateTask={setTasks}/>
                </div>
            </main>}
    </main>            
    )
}