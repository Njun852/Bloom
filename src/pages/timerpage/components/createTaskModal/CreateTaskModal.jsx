import React from 'react'
import './style.css'
import { nanoid } from 'nanoid'

export default function CreateTaskModal(props) {
    const [formDetails, setFormDetails] = React.useState({cycles:1, task: ''})
    function changeCount(amount){
        if(formDetails.cycles+amount < 1) return
        setFormDetails(current => ({...current, cycles: current.cycles+amount}))
    }
    function setDetails(){
        if(formDetails.task.trim().length <= 0) return
        props.addTask(current => ([...current, {
            id: nanoid(),
            max: formDetails.cycles,
            finished: 0,
            taskName: formDetails.task
        }]))
        props.navigate('tasks')
    }
    function updateTaskName(e){
        setFormDetails(current => ({
            ...current, task: e.target.value
        }))
    }
    return (
        <div className='create-task-modal flex'>
            <h1>Create Task</h1>
            <div className='flex modal-card'>
                <div>
                    <label htmlFor='task-name'>Task Name:</label>
                    <input type='text' name='taskName' id='task-name' onChange={updateTaskName}/>
                </div>
                <div>
                    <label>Cycles:</label>
                    <h1>{formDetails.cycles}</h1>
                    <div className='flex'>
                        <button onClick={() => changeCount(1)}>+</button>
                        <button onClick={() => changeCount(-1)}>-</button>
                    </div>
                </div>
                <div className='action'>
                    <button onClick={() => props.navigate('tasks')}>Cancel</button>
                    <button onClick={setDetails}>Okay</button>
                </div>
            </div>
        </div>
    )
}