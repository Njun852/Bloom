import React from 'react'
import Happy from './happy.png'
import './style.css'
export default function MoodStatus() {
    return (
        <div className='mood-status flex'>
            <img src={Happy} alt='happy'/>
            <h1>I'm glad you're doing great today!</h1>
            <button className='selected'>Change Mood</button>
        </div>
    )
}