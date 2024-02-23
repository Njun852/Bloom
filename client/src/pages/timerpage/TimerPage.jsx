import React from 'react'
import Clock from './components/clock/Clock'
import PomodoroTask from './components/task-section/PomodoroTask'
import CreateTaskModal from './components/createTaskModal/CreateTaskModal'
import Navigation from './components/navigation/Navigation'
import './assets/style.css'

export default function TimerPage() {
    const [focusDuration, breakDuration] = [25*60*1000, 15*60*1000]
    const [state, setState] = React.useState({time:focusDuration, playState:'stop', session:'focus'})
    const defaultTime = state.session === 'focus' ? focusDuration : breakDuration
    const [navigation, setNavigation] = React.useState('timer')
    const [tasks, setTasks] = React.useState([])
    function finishCycle(){
        setTasks(current => current.map((task, index) => ({...task, finished: 
            index === 0 ? task.finished+1 : task.finished})))
    }
    function removeTask(){
        if(tasks.length > 0 && tasks[0].finished === tasks[0].max){
            setTasks(current => {
                if(current.length === 1) return []
                const removedFinishedTask = current.filter(index => index != 0)
                return removedFinishedTask
            })
        }
    }
    function stopTimer(){
        if(state.time <= 10) removeTask()
        
        let session = {session: 'break', time: breakDuration}
        if(state.session === 'break' || tasks[0].finished === tasks[0].max) 
        session = {session: 'focus', time: focusDuration}
        setState({
            time:session.time, playState:'stop', session: session.session
        })
    }
    function updateState(newState){
        if((newState === 'start' && state.session === 'focus') && tasks.length <= 0)
            return

        setState(prev => ({
            ...prev, playState: newState
        }))
    }
    function tickTime(){
        setState(prev => ({
            ...prev, time: prev.time-10
        }))
        if(state.time <= 10 && tasks.length > 0){
            if(state.session === 'focus')
            finishCycle()       
        }
    }
    return (
        <main className='timer-page flex'>
            {navigation === 'createTask' ? 
                <CreateTaskModal navigate={setNavigation} 
                tasks={tasks}addTask={setTasks}/> :
            <Navigation navigate={setNavigation} current={navigation}/>}
            {navigation === 'timer' &&
            <Clock
                navigate={setNavigation}
                amountOfTasks={tasks.length}
                session={state.session} 
                defaultTime={defaultTime}
                time={state.time} 
                state={state.playState} 
                changeTime={tickTime}
                stopTimer={stopTimer}
                updateState={updateState}
            />}
            {navigation === 'tasks' &&
                <PomodoroTask navigate={setNavigation} stop={() => {
                    setState({
                        time:focusDuration, playState:'stop', session: 'focus'
                    })
                }} tasks={tasks} updateTask={setTasks}/>
            }
        </main>
    )
}
