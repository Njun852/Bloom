import React from 'react'
import Clock from './components/clock/Clock'
import './assets/style.css'

export default function TimerPage() {
    return (
    <main className='timer-page flex'>
            <div className='left-part'>
                <Clock time={10}/>
                <button></button>
            </div>
            <div className='right-part'>
            </div>
        </main>
    )
}