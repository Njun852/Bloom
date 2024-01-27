import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Taskpage from './pages/taskpage/Taskpage'
import WellBeingPage from './pages/well-being-page/WellBeingPage'
import SettingsPage from './pages/settingspage/SettingsPage'
import TimerPage from './pages/timerpage/TimerPage'
import ChangeLabelModal from './components/change-label-modal/ChangeLabelModal'
import LabelPage from './pages/labelpage/LabelPage'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('homepage')
    const [tasks, setTasks] = React.useState([])
    const [modal, setModal] = React.useState()
    function setPage(page) {
        setCurrentPage(page)
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(respose => respose.json())
        .then(({data}) => setTasks([...data]))
    }, [])
    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage handleChange={setPage} 
        navigate={() => setCurrentPage('taskpage')} 
        setModal={setModal} tasks={tasks} setTasks={setTasks}/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage tasks={tasks} 
        setModal={setModal} setTasks={setTasks} moveToLabelPage={()=>setCurrentPage('labelpage')}/>
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
        case 'labelpage':
        currentPageContent = <LabelPage moveToTaskPage={() => setCurrentPage('taskpage')}/>
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

            {modal && <div className='modals'>
                {modal}
            </div>}
        </div>
    )
}