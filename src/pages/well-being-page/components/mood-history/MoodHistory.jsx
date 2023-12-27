import React from 'react'
import './style.css'
import Arrow from './arrow.png'
export default function MoodHistory() {
    return (
        <div className='mood-history flex'>
            <div className='top flex'>
                <h2>Mood History</h2>
                <button className='selected flex'>
                    Weekly <img src={Arrow} alt='arrow'/>
                </button>
            </div>
            <div className='calendar flex'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}