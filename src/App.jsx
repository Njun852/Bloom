import React from 'react'
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Taskpage from './pages/taskpage/Taskpage'
import WellBeingPage from './pages/well-being-page/WellBeingPage'
import SettingsPage from './pages/settingspage/SettingsPage'

export default function App(){
    const [currentPage, setCurrentPage] = React.useState('homepage')
    
    function setPage(page) {
        setCurrentPage(page)
    }
    let currentPageContent
    switch(currentPage) {
        case 'homepage':
        currentPageContent = <Homepage/>
        break
        case 'taskpage':
        currentPageContent = <Taskpage/>
        break
        case 'wellbeingpage':
        currentPageContent = <WellBeingPage/>
        break
        case 'settingspage':
        currentPageContent = <SettingsPage/>
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
                {/* <SettingsPage/> */}
            </div>
        </div>
    )
}