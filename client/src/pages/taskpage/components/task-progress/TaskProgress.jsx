import React from 'react'
import TaskProgressBar from '../task-progress-bar/TaskProgressBar'
import './style.css'
import Boy from './boy.png'

export default function TaskProgress(props) {

    const taskProgressBarElements = props.labels.map(label => {
        const tasks = props.tasks.filter(task => task.label.id === label.id)
        const completedTasks = tasks.filter(task => task.finished)
        const percentage = completedTasks.length/tasks.length 
        const progress = percentage === 'NaN%' ? 0 : percentage
        return <TaskProgressBar label={label.name} progress={progress} key={label.id}/>
    })

    // React.useEffect(() => {
    //     const bar = document.querySelectorAll('.task-progress-bar > div > div')
    //     for(let i = 0; i < bar.length; i++){
    //         console.log(bar[i].dataset.progress)
    //         bar[i].animate({
    //             background: ['hsl(0, 81%, 59%)', `hsl(${bar[i].dataset.progress/100*144}, 81%, 59%)`],
    //             width: [bar[i].dataset.prev === 100 ? '0%' : bar[i].dataset.prev+'%', `${bar[i].dataset.progress}%`]
    //         }, {duration: 1000, fill: 'forwards'})
    //     }
    // }, [props.tasks])
    return (
        <div className='task-progress'>
            <h1>Progress</h1>
            <div className='progress-card flex'>
                <div className='progress-list'>
                    {taskProgressBarElements}
                </div>
                <button onClick={props.moveToLabelPage}>Edit Label</button>
                <img src={Boy} alt='boy'/>
            </div>
        </div>
    )
}