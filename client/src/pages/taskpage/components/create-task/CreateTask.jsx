import React from 'react'
import './style.css'
import Arrow from './arrow.png'
import { nanoid } from 'nanoid'

export default function CreateTask(props) {
    const [labels, setLabels] = React.useState([...props.labels])
    const [task, setTask] = React.useState({name: '', label: labels[0], finished: false})
    const labelElements = labels.map((label, index) => {
        return (
            <button 
            className={index == 0 ? 'flex selected' : 'flex'}
            onClick={index == 0 ? toggle : changeLabel}
            key={index} data-id={label.id}
            >
                <p>{label.name}</p>
                {index == 0 && <img src={Arrow} alt='arrow'/>}
            </button>
        )
    })
        React.useEffect(() => {
        setLabels([...props.labels])
    }, [props.labels])
    function changeName(e){
        setTask(prev => ({...prev, name: e.target.value}))
    }
    function addTask(){
        if(['today', 'important'].includes(labels[0].name.toLowerCase())){
            props.setTaskLabelPage(labels[0].name.toLowerCase())
        }
        props.addTask({...task, label: labels[0], id: nanoid()})
        setTask(prev => ({...prev, name: ''}))
    }
    function changeLabel(e) {
        const label = labels.find(label => label.id == e.currentTarget.dataset.id)
        
        setLabels(current => {
            const newOrder = current.filter(current => current.id != label.id)
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
            parent.style.height = `${labels.length*23+(2*(labels.length-1))}px`
        }
        parent.dataset.open = !isOpen
    }

    return (
        <div className='create-task flex'>
            <div className='wrapper flex'>
                <div className='selected-label flex' data-open='false'>
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