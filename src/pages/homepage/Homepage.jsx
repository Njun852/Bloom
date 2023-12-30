import React from 'react'
import TaskList from '../../components/tasklist/TaskList'
import CallToAction from '../../components/call-to-action/CallToAction'
import Clock from './assets/clock.png'
import './assets/style.css'
import Dog from './assets/dog.png'

export default function Homepage(props){
    return (
        <div className='homepage flex'>
            <h1 className='greetings'>Goodmorning, User</h1>
            <h2 className='task-today'>Your task today</h2>
            <main className='flex'>
                <div className='task-section flex'>
                    <TaskList>        
                        <CallToAction label='Create new task'/>
                    </TaskList>
                </div>
                <div className='lower-cards flex'>
                    <div className='timer flex'>
                        <img src={Clock} alt='clock' className='clock'/>
                        <div>
                            <h2>Pomodoro Timer</h2>
                            <p>Start studying now</p>
                        </div>
                        <button onClick={() => props.handleChange('timerpage')}>Start Timer</button>
                    </div>
                        <img src={Dog} alt='dog' className='dog'/>
                    <h1>Tips & Tricks</h1>
                    <div className='tips-card flex'>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Laborum, maiores! In voluptatum autem excepturi sunt laboriosam nemo ut explicabo culpa?
                            </p>
                    </div>
                </div>
        </main>
        </div>
    )
}