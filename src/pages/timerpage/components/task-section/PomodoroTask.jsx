import React from 'react'
import Pencil from './assets/pencil.png'
import Task from '../task/Task'
import './assets/style.css'

export default function PomodoroTask() {
    return (
        <div className='pomodoro-task-section flex'>
            <h1>Task</h1>
            <div className='pomodoro-task-list flex'>
                <Task taskName='Learn Fetch API' finished={2} max={3} current={true}/>
                <Task taskName='Learn Axios API' finished={0} max={3} current={false}/>
                <div className='options flex'>
                    <button>Create Task</button>
                    <button className='flex'><img src={Pencil}/></button>
                </div>
            </div>
        </div>
    )
}