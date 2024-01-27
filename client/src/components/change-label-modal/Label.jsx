import React from 'react'
import './style.css'

export default function Label(props){

    return (
        <div className='flex label-modal'>
            <div className='radio flex'>
                <div className={props.selected ? `selected` : ''}></div>
            </div>
            <div className='details'>
                <h1>School</h1>
                <span>Importance: Normal</span>
            </div>
        </div>
    )
}