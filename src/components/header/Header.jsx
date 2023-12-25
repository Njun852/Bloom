import React from 'react'
import './assets/style.css'

import Logo from './assets/logo.jpg'
import Home from './assets/home.png'
import Task from './assets/task.png'
import WellBeing from './assets/well-being.png'
import Settings from './assets/settings.png'

export default function Header() {
    return (
        <header className='flex'>
            <img src={Logo} alt='logo' />
            <h1>BLOOM</h1>
            <nav>
                <ul className='flex'>
                    <li className='selected'>
                        <img src={Home} alt='home'/>Home
                    </li>
                    <li>
                        <img src={Task} alt='task'/>Task
                    </li>
                    <li>
                        <img src={WellBeing} alt='well-being'/>Well-Being
                    </li>
                    <li>
                        <img src={Settings} alt='settings' />Settings
                    </li>
                </ul>
            </nav>
        </header>
    )
}