import React from 'react'
import './style.css'
export default function Task(props) {
    return (
        <div className='task flex'>
            <div className='checkbox'>
            </div>
            <div className='task-details flex'>
                <h3>{props.name}</h3>
            <div className='label'>{props.label}</div>
            </div>
            <div className='kebab-menu flex'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}