import React from 'react'
import './style.css'
export default function CreateTask() {
    return (
        <div className='create-task flex'>
            <input type='text' name='new-task' placeholder='e.g. Do homework'/>
            <button className='selected'>Create Task</button>
        </div>
    )
}