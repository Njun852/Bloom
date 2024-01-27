import React from 'react'
import './style.css'

export default function Label(props){

    const priority = ['Important', 'Normal', 'Low']

    return (
        <div className='flex label-modal' onClick={props.change}>
            <div className='radio flex'>
                <div className={props.selected ? `selected` : ''}></div>
            </div>
            <div className='details'>
                <h3>{props.label.name}</h3>
                <span>Priority: {priority[props.label.priority-1]}</span>
            </div>
        </div>
    )
}