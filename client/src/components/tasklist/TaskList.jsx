import React from 'react'
import './style.css'
import Task from '../task/Task'

export default function TaskList(props) {
    const tasks = props.tasks.filter(task => {
        return (props.currentPage == 'tasks' 
        || task.label.toLowerCase() == props.currentPage)
    })
    const taskElements = []
    const completedTaskElements = []
    for(let task of tasks){
        const taskElement = <Task id={task.id} key={task.id} name={task.name} label={task.label}
        finishTask={props.finishTask} setModal={props.setModal} updateTask={props.updateTask} 
        finished={task.finished} removeTask={props.removeTask}/>
        if(task.finished){
            completedTaskElements.push(taskElement)
            continue
        }
        taskElements.push(taskElement)
    }
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