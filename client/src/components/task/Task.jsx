import React from 'react'
import ChangeNameModal from '../change-name-modal/ChangeNameModal'
import ConfirmDeleteModal from '../confirm-delete-modal/ConfirmDeleteModal'
import ChangeLabelModal from '../change-label-modal/ChangeLabelModal'
import KebabMenu from '../kebab-menu/KebabMenu'
import './style.css'

export default function Task(props) {
    return (
        <div className={`task flex ${props.finished ? 'finished' : ''}`}>
            <div className='checkbox' onClick={()=>props.updateTask(props.task.id, 'finished', !props.task.finished)}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 
            45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 
            0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 
            105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg>
            </div>
            <div className='task-details flex'>
                <h3>{props.task.name}</h3>
            <div className='label'>
                <p>{props.task.label.name}</p>
            </div>
            </div>
            <KebabMenu>
                <button onClick={() => props.setModal(<ChangeNameModal hideModal={() =>props.setModal()} 
                    rename={(newName) => props.updateTask(props.task.id, 'name', newName)} title='Task'/>)}
                    >Rename Task</button>
                    <button onClick={() => props.setModal(<ChangeLabelModal labels={props.labels} 
                    hideModal={() => props.setModal()} change={(newLabel) => props.updateTask(props.task.id, 'label', newLabel)}/>)}>Change Label</button>
                    <button onClick={() => props.setModal(<ConfirmDeleteModal 
                    delete={() => props.removeTask(props.task.id)} hideModal={() =>props.setModal()}/>)}
                    >Delete
                </button>
            </KebabMenu>
        </div>
    )
}