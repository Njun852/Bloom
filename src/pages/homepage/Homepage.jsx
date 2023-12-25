import React from 'react'
import TaskList from '../../components/tasklist/TaskList'
import CallToAction from '../../components/call-to-action/CallToAction'
import Person1 from './assets/person1.png'
import './assets/style.css'

export default function Homepage(){
    return (
        <main className='homepage'>
            <h1 className='greetings'>Goodmorning, User</h1>
            <h2 className='task-today'>Your task today</h2>
            <div className='idk-what-to-call-this'>
                <TaskList>        
                    <CallToAction label='Create new task'/>
                </TaskList>
                <img src={Person1} alt='person 1' />
            </div>
            <div className='lower-cards flex'>
                <div className='well-being-navigator-card flex'>
                    <h2>How are you feeling today, User?</h2>
                    <p>Tell us how you feel</p>
                    <CallToAction label='Set mood'/>
                </div>
                <div className='tips-card flex'>
                    <h1>Tips & Tricks</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Laborum, maiores! In voluptatum autem excepturi sunt laboriosam nemo ut explicabo culpa?
                    </p>
                </div>
            </div>
        </main>
    )
}