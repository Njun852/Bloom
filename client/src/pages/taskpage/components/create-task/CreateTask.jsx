import React from 'react'
import './style.css'
import Arrow from './arrow.png'
import { nanoid } from 'nanoid'

export default function CreateTask(props) {
    const [labels, setLabels] = React.useState(['Today', 'Important', 'School'])
    const [task, setTask] = React.useState({name: '', label: labels[0]})
    
    const labelElements = labels.map((label, index) => {
        return (
            <button 
                className={index == 0 ? 'flex selected' : 'flex'}
                onClick={index == 0 ? toggle : changeLabel}
                key={index}
            >
                <p>{label}</p>
                {index == 0 && <img src={Arrow} alt='arrow'/>}
            </button>
        )
    })
    function changeName(e){
        setTask(prev => ({...prev, name: e.target.value}))
    }
    function addTask(){
        props.addTask({...task, label: labels[0], id: nanoid()})
        setTask(prev => ({...prev, name: ''}))
    }
    function changeLabel(e) {
        const label = e.currentTarget.textContent
        
        setLabels(current => {
            console.log(current)
            const newOrder = current.filter(current => current != label)
            newOrder.unshift(label)
            return newOrder
        })
        toggle(e)
    }
    function toggle(e){
        const parent = e.currentTarget.parentElement
        const arrow = e.currentTarget.parentElement.children[0].children[1]
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
                    {/* <button className='flex selected' onClick={toggle}>Today<img src={Arrow} alt='arrow'/></button>
                    <button className='flex'>Important</button>
                    <button className='flex'>School</button> */}
                    {labelElements}
                </div>
            </div>
            <div className='flex'>
                <input type='text' value={task.name} onChange={changeName} name='new-task' placeholder='e.g. Do homework'/>
                <button className='selected' onClick={addTask}>Create Task</button>
            </div>
        </div>
    )
}