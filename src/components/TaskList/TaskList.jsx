import React from 'react'
import './style.css'
import Task from '../Task/Task'

export default function TaskList(props) {
    return (
        <div className='task-list flex'>
            <Task/>
            <Task/>
            <Task/>
            <div className='task-list-container'>
            </div>
            {props.children}
        </div>
    )
}