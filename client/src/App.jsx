import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Taskpage from './pages/taskpage/Taskpage'
import WellBeingPage from './pages/well-being-page/WellBeingPage'
import SettingsPage from './pages/settingspage/SettingsPage'
import TimerPage from './pages/timerpage/TimerPage'
import ChangeLabelModal from './components/change-label-modal/ChangeLabelModal'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('taskpage')
    const [tasks, setTasks] = React.useState([])
    const [modal, setModal] = React.useState()
    function setPage(page) {
        setCurrentPage(page)
    }
    function finishTask(id){
        setTasks(current =>  current.map(current => current.id == id ? 
            {...current, finished: !current.finished} : current))
    }
    function updateTask(id, property, value){
        setTasks(current => current.map(current => current.id == id ? {...current, [property]: value} : current))
    }
    function removeTask(id){
        setTasks(current => current.filter(task => task.id !=id))
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(respose => respose.json())
        .then(({data}) => setTasks([...data]))
    }, [])
    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage  finishTask={finishTask} handleChange={setPage} 
        navigate={() => setCurrentPage('taskpage')} setModal={setModal} 
        tasks={tasks} removeTask={removeTask}/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage tasks={tasks} 
        setModal={setModal} finishTask={finishTask}
        setTasks={setTasks} updateTask={updateTask} removeTask={removeTask}/>
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

            {modal || true && <div className='modals'>
                {/* {modal} */}
                <ChangeLabelModal/>
            </div>}
        </div>
    )
}