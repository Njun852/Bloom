import React from 'react'
import './style.css'
export default function TaskProgressBar(props) {
    const progress = {
        width: props.progress
    }
    return (
        <div className='task-progress-bar'>
            <h3>{props.label}</h3>
            <div>
                <div style={progress}></div>
            </div>
        </div>
    )
}