import React from 'react'
import './style.css'

export default function Label(props){

    const priority = ['Important', 'Normal', 'Low']

    return (
        <div className='flex label-modal'>
            <div className='radio flex' onClick={props.change}>
                <div className={props.selected ? `selected` : ''}></div>
            </div>
            <div className='details'>
                <h1>{props.label.name}</h1>
                <span>Priority: {priority[props.label.priority-1]}</span>
            </div>
        </div>
    )
}