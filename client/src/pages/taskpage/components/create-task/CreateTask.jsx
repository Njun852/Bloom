import React from 'react'
import './style.css'
import Arrow from './arrow.png'
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
    function toggle(e){
        const parent = e.currentTarget.parentElement
        const arrow = e.currentTarget.children[0]
        const isOpen = parent.dataset.open == 'true'

        if(isOpen) {
            arrow.style.rotate = '0deg'
            parent.style.height = '23px'
        }else{
            arrow.style.rotate = '180deg'
            parent.style.height = `${3*23+(2*2)}px`
        }
        parent.dataset.open = !isOpen
    }
    return (
        <div className='create-task flex'>
            <div className='wrapper flex'>
                <div className='selected-label flex' data-open='false'>
                    <button className='flex selected' onClick={toggle}>Today<img src={Arrow} alt='arrow'/></button>
                    <button className='flex'>Important</button>
                    <button className='flex'>School</button>
                </div>
            </div>
            <div className='flex'>
                <input type='text' value={task.name} onChange={changeName} name='new-task' placeholder='e.g. Do homework'/>
                <button className='selected' onClick={addTask}>Create Task</button>
            </div>
        </div>
    )
}