import React from 'react'
import './assets/style.css'

import Logo from './assets/logo.png'
import Home from './assets/home.png'
import Task from './assets/task.png'
import WellBeing from './assets/well-being.png'
import Settings from './assets/settings.png'

export default function Header(props) {
    return (
        <header className='flex'>
            <img src={Logo} alt='logo' />
            <h1>BLOOM</h1>
            <nav>
                <ul className='flex'>
                    <li 
                    className={`${props.currentPage === 'homepage' ? 'selected': ''}`}
                    onClick={()=>props.handleChange('homepage')}>
                        <img src={Home} alt='home'/>Home
                    </li>
                    <li 
                    className={`${props.currentPage === 'taskpage' ? 'selected': ''}`} 
                    onClick={()=>props.handleChange('taskpage')}>
                        <img src={Task} alt='task'/>Task
                    </li>
                    <li 
                    className={`${props.currentPage === 'wellbeingpage' ? 'selected': ''}`}
                    onClick={()=>props.handleChange('wellbeingpage')}>
                        <img src={WellBeing} alt='well-being'/>Well-Being
                    </li>
                    <li
                    className={`${props.currentPage === 'settingspage' ? 'selected': ''}`}
                    onClick={()=>props.handleChange('settingspage')}>
                        <img src={Settings} alt='settings' />Settings
                    </li>
                </ul>
            </nav>
        </header>
    )
}