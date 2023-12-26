import React from 'react'
import './style.css'
import Task from '../task/Task'

export default function TaskList(props) {
    return (
        <div className='task-list flex'>            
            <div className='task-list-container'>
                <Task/>
                <Task/>
                <Task/>
            </div>
            {props.children}
        </div>
    )
}