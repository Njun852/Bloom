import React from 'react'
import './style.css'

export default function(props){
    return (
        <div className={`pomodoro-task flex ${props.current ? 'current-task' : ''}`}>
            <h3>{props.taskName}</h3>
            <p>{props.finished}/{props.max}</p>
        </div>
    )
}