import React from 'react'
import './style.css'
export default function Task() {
    return (
        <div className='task flex'>
            <div className='checkbox'>

            </div>
            <div className='task-details flex'>
                <h3>Do Stuff</h3>
                <div className='label'>today</div>
            </div>
            <div className='kebab-menu flex'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}