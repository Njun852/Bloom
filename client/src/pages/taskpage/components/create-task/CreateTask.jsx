import React from 'react'
import './style.css'
import Pencil from './pencil.png'
import { nanoid } from 'nanoid'
export default function CreateTask(props) {
    const [task, setTask] = React.useState({name: '', label: 'today'})

    function changeName(e){
        setTask(prev => ({...prev, name: e.target.value}))
    }
    function addTask(){
        props.addTask({...task, id: nanoid()})
        setTask(prev => ({...prev, name: ''}))
    }

    return (
        <div className='create-task flex'>
            <div className='wrapper flex'>
                <div className='selected-label flex'>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Important</button>
                    <button className='flex'>School</button>
                    {/* <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button> */}
                    {/* <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button>
                    <button className='flex'>Today<img src={Pencil} alt='pencil'/></button> */}
                </div>
            </div>
            <div className='flex'>
                <input type='text' value={task.name} onChange={changeName} name='new-task' placeholder='e.g. Do homework'/>
                <button className='selected' onClick={addTask}>Create Task</button>
            </div>
        </div>
    )
}