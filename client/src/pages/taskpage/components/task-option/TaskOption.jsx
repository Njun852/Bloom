import React from 'react'
import './assets/style.css'
import Arrow from './assets/arrow.png'

export default function TaskOption() {

    return (
        <div className='task-option flex'>
            <nav className='flex'>
                <button className='selected'>Today</button>
                <button>Important</button>
                <button>Task</button>
            </nav>
            <button className='selected flex'>
                Time <img src={Arrow} alt='arrow'/>
            </button>
        </div>
    )
}