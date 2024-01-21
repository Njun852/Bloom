import React from 'react'
import './style.css'
import Task from '../task/Task'

export default function TaskList(props) {
    const taskElements = props.tasks.map(task => (
    <Task key={task.id} id={task.id}
        name={task.name} label={task.label}/>))
    return (
        <div className='task-list flex'>            
            <div className='task-list-container'>
                {taskElements}
                {props.tasks.length < 1 && <h1>Create a task now!</h1>}
            </div>
            {(props.completedTasks && props.completedTasks.length) > 0 && <div className='completed flex'>
                <span>Completed</span>
            </div>}
            {props.children}
        </div>
    )
}0