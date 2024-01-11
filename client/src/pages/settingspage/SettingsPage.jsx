import React from 'react'
import SettingOption from './components/SettingOption'
import ProfileIcon from './assets/profile.png'
import HandShakeIcon from './assets/handshake.png'
import LightbulbIcon from './assets/lightbulb.png'
import Cat from './assets/cat.png'
import './assets/style.css'
export default function SettingsPage() {

    return (
        <main className='settings-page flex'>
            <h1>Settings</h1>
            <div className='flex'>
                <SettingOption icon={ProfileIcon} label='Profile'/>
                <SettingOption icon={HandShakeIcon} label='Terms of Use'/>
                <SettingOption icon={LightbulbIcon} label='About Us'/>
                <img src={Cat} alt='cat'className='cat'/>
                <button>Logout</button>
            </div>
        </main>
    )
}