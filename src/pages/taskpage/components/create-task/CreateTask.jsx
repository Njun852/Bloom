import React from 'react'
import './style.css'
import Pencil from './pencil.png'
import { nanoid } from 'nanoid'
export default function CreateTask(props) {
    const [task, setTask] = React.useState({name: '', label: 'today'})

    function changeName(e){
        setTask(prev => ({...prev, name: e.target.value}))
    }
    return (
        <div className='create-task flex'>
            <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
            <div className='flex'>
                <input type='text' value={task.name} onChange={changeName} name='new-task' placeholder='e.g. Do homework'/>
                <button className='selected' onClick={() => {
                    props.addTask(current => [...current, {...task, id: nanoid()}])
                    setTask(prev => ({...prev, name: ''}))
                }}>Create Task</button>
            </div>
        </div>
    )
}