import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Taskpage from './pages/taskpage/Taskpage'
import WellBeingPage from './pages/well-being-page/WellBeingPage'
import SettingsPage from './pages/settingspage/SettingsPage'
import TimerPage from './pages/timerpage/TimerPage'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('taskpage')
    const [tasks, setTasks] = React.useState([])

    function setPage(page) {
        setCurrentPage(page)
    }
    function addTask(task){
        fetch('http://localhost:5000/tasks', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...task})
        })
        setTasks(current => [...current, task])
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(respose => respose.json())
        .then(({data}) => setTasks([...data]))
    }, [])

    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage handleChange={setPage} tasks={tasks}/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage tasks={tasks} addTask={addTask}/>
        break
        case 'wellbeingpage':
        currentPageContent = <WellBeingPage/>
        break
        case 'settingspage':
        currentPageContent = <SettingsPage/>
        break
        case 'timerpage':
        currentPageContent = <TimerPage/> 
        break
        default:
        currentPageContent = <h1>Coming Soon!</h1>
        break
    }
    return (
        <div className='app flex'>
            <Header handleChange={setPage} currentPage={currentPage}/>
            <div className='page flex'>
                {currentPageContent}
            </div>
        </div>
    )
}