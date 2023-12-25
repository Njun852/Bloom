import React from 'react'
import Arrow from './arrow.png'
import './style.css'
export default function CallToAction(props){

    return (
        <div className='call-to-action flex'>
            {props.label}
            <button className='flex'>
                GO <img src={Arrow} alt="arrow" />
            </button>
        </div>
    )
}