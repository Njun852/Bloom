import React from 'react'
import TaskProgress from './components/task-progress/TaskProgress'
import TaskOption from './components/task-option/TaskOption'
import TaskList from '../../components/tasklist/TaskList'
import CreateTask from './components/create-task/CreateTask'
import './assets/style.css'

export default function Taskpage(props) {
    const [taskLabelPage, setTaskLabelPage] = React.useState('tasks')

    function finishTask(id){
        const task = props.tasks.find(task => task.id == id)
        if(!task) return
        props.setTasks(current =>  current.map(current => current.id == id ? 
            {...current, finished: !current.finished} : current))
    }
    function addTask(task){
        props.setTasks(current => [...current, task])
    }
    React.useEffect(()=> {
        fetch('http://localhost:5000/tasks', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify([...props.tasks])
        })
    }, [props.tasks])
    return (
        <main className='taskpage flex'>
            <div className="left-part flex">
                <TaskProgress/>
                <div className='tips-card'>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </div>
            </div>
            <div className='right-part flex'>
                <TaskOption currentPage={taskLabelPage} setPage={setTaskLabelPage}/>
                <TaskList tasks={props.tasks} currentPage={taskLabelPage} finishTask={finishTask}>
                    <CreateTask addTask={addTask} setTaskLabelPage={setTaskLabelPage}/>
                </TaskList>
            </div>            
        </main>
    )
}