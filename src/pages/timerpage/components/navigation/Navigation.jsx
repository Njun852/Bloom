import React from 'react'
import './style.css'

export default function Navigation(props){
    return (
        <nav className='pomodoro-navbar'>
            <ul className='flex'>
                <li className={props.current==='timer' ? `selected` : ''}
                    onClick={() => props.navigate('timer')}>Timer
                </li>
                <li className={props.current==='tasks' ? `selected` : ''}
                    onClick={() => props.navigate('tasks')}>Task
                </li>
            </ul>
        </nav>
    )
}