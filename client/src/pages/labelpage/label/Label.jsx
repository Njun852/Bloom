import React from 'react'
import KebabMenu from '../../../components/kebab-menu/KebabMenu'
import ChangeNameModal from '../../../components/change-name-modal/ChangeNameModal'
import './style.css'

export default function Label(props){
    const priority = ['Important', 'Normal', 'Low']
    return (
        <div className='label-label flex'>
            <div>
                <h2>{props.name}</h2>
                <span>Priority: {priority[props.priority-1]}</span>
            </div>
            <div className='flex'>
                <span>Tasks: {props.tasks}</span>
                <span>Completed: {props.completedTasks}</span>
            </div>
            <KebabMenu>
                <button onClick={() => props.setModal(<ChangeNameModal 
                hideModal={() => props.setModal()} title='Label' rename={(newName) => props.updateLabel(props.id, 'name', newName)}/>)}>Rename Label</button>
                <button>Change Priority</button>
                <button>Delete Label</button>
            </KebabMenu>
        </div>
    )
}