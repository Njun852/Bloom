import React from 'react'
import Header from './components/header/Header'
import TaskList from './components/TaskList/TaskList'
import CallToAction from './components/callToAction/CallToAction'
import Person1 from './assets/person1.png'
export default function App(){

    return (
        <div>
        <Header/>
        <div className='page flex'>
            <h1 className='greetings'>Goodmorning, User</h1>
            <h2 className='task-today'>Your task today</h2>
            <div className='idk-what-to-call-this'>
                <TaskList>
        
                    <CallToAction/>
                </TaskList>
                <img src={Person1} alt='person 1' />
            </div>
 
        </div>
        </div>
    )
}