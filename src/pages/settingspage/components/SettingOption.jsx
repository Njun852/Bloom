import React from 'react'
import './style.css'
import Arrow from './arrow.png'

export default function SettingOption(props) {
    return (
        <div className='setting-option flex'>
            <img src={props.icon} alt='icon' className='icon'/>
            <h2>{props.label}</h2>
            <img src={Arrow} alt='arrow' className='arrow'/>
        </div>
    )
}