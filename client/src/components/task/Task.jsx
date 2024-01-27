import React from 'react'
import ChangeNameModal from '../change-name-modal/ChangeNameModal'
import ConfirmDeleteModal from '../confirm-delete-modal/ConfirmDeleteModal'
import ChangeLabelModal from '../change-label-modal/ChangeLabelModal'
import './style.css'

export default function Task(props) {
    function toggle(e) {
        e.stopPropagation()
        const btn = document.querySelector('.kebab-menu.flex')
        const isShown = e.currentTarget != window
        btn.children[3].style.transform = isShown ? 'scaleY(1)' : 'scaleY(0)'
        btn.dataset.visible = isShown == 'false'
    }
    React.useEffect(()=> {
        window.addEventListener('click', toggle)
        return () => {
            window.removeEventListener('click', toggle)
        }
    }, [])
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
            <div className='kebab-menu flex' onClick={toggle}>
                <div></div>
                <div></div>
                <div></div>
                <div className='options flex'>
                    <button onClick={() => props.setModal(<ChangeNameModal hideModal={() =>props.setModal()} 
                    rename={(newName) => props.updateTask(props.task.id, 'name', newName)}/>)}
                    >Rename Task</button>
                    <button onClick={() => props.setModal(<ChangeLabelModal hideModal={() => props.setModal()} 
                    change={(newLabel) => props.updateTask(props.task.id, 'label', newLabel)}/>)}>Change Label</button>
                    <button onClick={() => props.setModal(<ConfirmDeleteModal 
                    delete={() => props.removeTask(props.task.id)} hideModal={() =>props.setModal()}/>)}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}