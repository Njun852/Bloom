import React from 'react'
import './style.css'
export default function Task(props) {
    function check(e){
        props.finishTask(props.id)
    }
    return (
        <div className={`task flex ${props.isComplete ? 'finished' : ''}`}>
            <div className='checkbox' onClick={check}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 
            45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 
            0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 
            105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg>
            </div>
            <div className='task-details flex'>
                <h3>{props.name}</h3>
            <div className='label'>
                <p>{props.label}</p>
            </div>
            </div>
            <div className='kebab-menu flex'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}