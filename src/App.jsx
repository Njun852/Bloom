import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import TaskProgressBar from './pages/taskpage/components/task-progress-bar/TaskProgressBar'
import TaskProgress from './pages/taskpage/components/task-progress/TaskProgress'
import Taskpage from './pages/taskpage/Taskpage'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('homepage')
    
    function setPage(page) {
        setCurrentPage(page)
    }

    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage/>
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