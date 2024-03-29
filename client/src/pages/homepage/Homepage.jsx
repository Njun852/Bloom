import React from 'react'
import TaskList from '../../components/tasklist/TaskList'
import CallToAction from '../../components/call-to-action/CallToAction'
import Clock from './assets/clock.png'
import './assets/style.css'
import Dog from './assets/dog.png'

export default function Homepage(props){
    
    let greetings = 'Good '
    const time = new Date().getHours()
    if(time >= 18) {
        greetings += 'Evening'
    }else if(time >= 12) {
        greetings += 'Afternoon'
    }else {
        greetings += 'Morning'
    }
    return (
        <div className='homepage flex'>
            <h1 className='greetings'>{greetings}, User</h1>
            <h2 className='task-today'>Your task today</h2>
            <main className='flex'>
                <div className='task-section flex'>
                    <TaskList tasks={props.tasks} ignoreCompleted={true} currentPage='today' 
                        setTasks={props.setTasks} setModal={props.setModal} labels={props.labels}
                        updateToServer={props.updateToServer}>        
                        <CallToAction label='Create new task' navigate={props.navigate}/>
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