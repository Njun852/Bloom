import React from 'react'
import Sun from './sun.png'
import './style.css'
export default function Task() {
    return (
        <div className='task flex'>
            <img src={Sun} alt='sun'/>
            <div className='task-details flex'>
                <h3>Do Stuff</h3>
                <div className='label'>today</div>
            </div>
            <div className='checkbox'></div>
        </div>
    )
}