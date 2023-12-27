import React from 'react'
import TaskProgressBar from '../task-progress-bar/TaskProgressBar'
import './style.css'
import Boy from './boy.png'

export default function TaskProgress() {
    return (
        <div className='task-progress'>
            <h1>Progress</h1>
            <div className='progress-card flex'>
                <TaskProgressBar label='Today' progress='40%'/>
                <TaskProgressBar label='Important' progress='90%'/>
                <button>Edit Label</button>
                <img src={Boy} alt='boy'/>
            </div>
        </div>
    )
}