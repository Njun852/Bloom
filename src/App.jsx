import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import TaskProgressBar from './pages/task/components/task-progress-bar/TaskProgressBar'
import TaskProgress from './pages/task/components/task-progress/TaskProgress'
export default function App(){

    return (
        <div className='app flex'>
            <Header/>
            <div className='page flex'>
                {/* <Homepage/> */}
                {/* <TaskProgressBar/> */}
                <TaskProgress/>
            </div>
        </div>
    )
}