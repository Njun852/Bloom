import React from 'react'
import KebabMenu from '../../../components/kebab-menu/KebabMenu'
import CreateLabelModal from '../create-label-modal/CreateLabelModal'
import ConfirmDeleteModal from '../../../components/confirm-delete-modal/ConfirmDeleteModal'
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
            {
                !(props.name == 'Today' || props.name == 'Important') &&
                <KebabMenu>
                    <button onClick={() => props.setModal(<CreateLabelModal title='Update' addLabel={props.addLabel} 
                    hideModal={() => props.setModal()} current={{name: props.name, priority: props.priority, id: props.id}}/>)}>Edit Label</button>
                    <button onClick={() => props.setModal(<ConfirmDeleteModal hideModal={() => props.setModal()} delete={() => props.delete(props.id)}/>)}>Delete Label</button>
                </KebabMenu>
            }
        </div>
    )
}