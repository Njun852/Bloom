import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Taskpage from './pages/taskpage/Taskpage'
import WellBeingPage from './pages/well-being-page/WellBeingPage'
import SettingsPage from './pages/settingspage/SettingsPage'
import TimerPage from './pages/timerpage/TimerPage'
import MusicPage from './pages/musicpage/MusicPage'
import LabelPage from './pages/labelpage/LabelPage'
import MediationPage from './pages/meditationpage/MeditationPage'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('mediationpage')
    const [tasks, setTasks] = React.useState([])
    const [labels, setLabels] = React.useState([])
    const [modal, setModal] = React.useState()
    const [music, setMusic] = React.useState({shouldLoop: false, isPlaying: false, duration: 0, shouldShuffle: false})
    function setPage(page) {
        setCurrentPage(page)
    }
    function updateToServer(tasks, method='PUT', payload){
        fetch('http://localhost:5000/tasks', {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(method === 'post' ? payload : [...tasks])
        })
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(respose => respose.json())
        .then(({data}) => setTasks([...data]))

        fetch('http://localhost:5000/labels')
        .then(respose => respose.json())
        .then(({data}) => setLabels([...data]))
    }, [])
    function secondsToMinutes(_seconds) {
        const seconds = Math.round(_seconds)
        const firstDigit = seconds%10
        const secondDigit = Math.floor(seconds/10)%6
        const thirdDigit = Math.floor(seconds/60)%10
        const fourtDigit = Math.floor((seconds/60)/10)
        return `${fourtDigit}${thirdDigit}:${secondDigit}${firstDigit}`
    }

    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage handleChange={setPage} 
        navigate={() => setCurrentPage('taskpage')} 
        setModal={setModal} tasks={tasks} setTasks={setTasks}
        labels={labels} updateToServer={updateToServer}/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage tasks={tasks} 
        setModal={setModal} setTasks={setTasks}
        moveToLabelPage={()=>setCurrentPage('labelpage')}
        labels={labels} updateToServer={updateToServer}/>
        break
        case 'wellbeingpage':
        currentPageContent = <WellBeingPage setCurrentPage={setCurrentPage}/>
        break
        case 'settingspage':
        currentPageContent = <SettingsPage/>
        break
        case 'timerpage':
        currentPageContent = <TimerPage/> 
        break
        case 'labelpage':
        currentPageContent = <LabelPage 
        moveToTaskPage={() => setCurrentPage('taskpage')} 
        labels={labels} setLabels={setLabels} setModal={setModal} tasks={tasks}/>
        break
        case 'musicpage':
        currentPageContent = <MusicPage setMusic={setMusic} music={music}/>
        break
        case 'mediationpage':
        currentPageContent = <MediationPage/>
        break
        default:
        currentPageContent = <h1>Coming Soon!</h1>
        break
    }
    return (
        <div className='app flex'>
            <Header handleChange={setPage} currentPage={currentPage}/>
            <div className='page flex'>
                {currentPageContent}
            </div>
            {modal && <div className='modals'>
                {modal}
            </div>}
            <audio onCanPlay={() => {
                const player = document.querySelector('audio')
                if(music.isPlaying)
                player.play()
                setMusic(current => ({...current, duration: player.duration}))                
            }} onEnded={() => console.log('done')}>
                <source type='audio/mp3' />
            </audio>
        </div>
    )
}