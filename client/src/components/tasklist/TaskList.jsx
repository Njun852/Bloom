import React from 'react'
import './style.css'
import Task from '../task/Task'

export default function TaskList(props) {
    const tasks = props.tasks.filter(task => {
        return (props.currentPage == 'tasks' 
        || task.label.toLowerCase() == props.currentPage)
    })
    const taskElements = tasks.filter(task => !task.finished)
    .map(task => (
    <Task key={task.id} id={task.id}
        name={task.name} label={task.label} finishTask={props.finishTask}/>))
    const completedTaskElements = tasks.filter(task => task.finished).map(task =>(
        <Task key={task.id} id={task.id}
        finishTask={props.finishTask}
        name={task.name} label={task.label} isComplete={true}/>
    ))
    return (
        <div className='task-list flex'>            
            <div className='task-list-container flex'>
                {taskElements}
                {taskElements.length < 1 && <h1>Create a task now!</h1>}
                {(completedTaskElements && completedTaskElements.length > 0) && <div className='completed flex'>
                    <span>Completed</span>
                </div>}
                {completedTaskElements}
            </div>
            {props.children}
        </div>
    )
}