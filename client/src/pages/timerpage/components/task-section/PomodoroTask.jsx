import React from 'react'
import Pencil from './assets/pencil.png'
import Task from '../task/Task'
import './assets/style.css'

export default function PomodoroTask(props) {
    const [isEditing, setIsEditing] = React.useState(false)
    const tasks = props.tasks.map((task, index) => 
        (<Task
            taskName={task.taskName}
            finished={task.finished}
            max={task.max}
            key={task.id}
            id={task.id}
            current={index === 0}
            isEditing={isEditing}
            editTask={props.updateTask}
        />))
    return (
        <div className='pomodoro-task-section flex'>
            <h1>Task</h1>
            <div className='pomodoro-task-list flex'>
                {tasks.length > 0 ? tasks : <h2>Create a task now!</h2>}
                {/* <Task taskName='Learn Fetch API' finished={2} max={3} current={true}/>
                <Task taskName='Learn Axios API' finished={0} max={3} current={false}/> */}
                <div className='options flex'>
                    <button onClick={() => props.navigate('createTask')}>Create Task</button>
                    <button className='flex' onClick={() => setIsEditing(current => !current)}><img src={Pencil}/></button>
                </div>
            </div>
        </div>
    )
}