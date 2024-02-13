import React from 'react'
import './style.css'
import Task from '../task/Task'

export default function TaskList(props) {
    const filteredTasks = props.tasks.filter(task => {
        return (props.currentPage == 'tasks' 
        || task.label.name.toLowerCase() == props.currentPage)
    })
    function updateTask(id, property, value){
        props.setTasks(current => {
            const updated = current.map(current => current.id == id ? {...current, [property]: value} : current)
            props.updateToServer(updated)
            return updated
        })
    }
    function removeTask(id){
        props.setTasks(current => {
            const removed = current.filter(task => task.id !=id)
            props.updateToServer(removed)
            return removed
        })
    }
    const taskElements = []
    const completedTaskElements = []
    for(let task of filteredTasks){
        const taskElement = <Task task={task} key={task.id}
        setModal={props.setModal} updateTask={updateTask} 
        finished={task.finished} removeTask={removeTask} labels={props.labels}/>
        const thing = (1000*60*60*24)
        console.log()
        if(task.finished){
            if(!props.ignoreCompleted || ((Date.now() - task.dateCreated)/(1000*60*60*24) < 24)) {
                completedTaskElements.push(taskElement)
                continue
            }
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
                <div className='finished'>
                    {completedTaskElements}
                </div>
            </div>
            {props.children}
        </div>
    )
}