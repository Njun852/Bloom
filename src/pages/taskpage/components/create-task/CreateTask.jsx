import React from 'react'
import './style.css'
import Pencil from './pencil.png'
export default function CreateTask() {
    return (
        <div className='create-task flex'>
            <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
            <div className='flex'>
                <input type='text' name='new-task' placeholder='e.g. Do homework'/>
                <button className='selected'>Create Task</button>
            </div>
        </div>
    )
}