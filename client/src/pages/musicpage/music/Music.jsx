import React from 'react'
import './style.css'

export default function Music(props) {
    let _class = 'music flex '
    if(props.isCurrent) 
    _class += 'current-music'
    return (
        <div className={_class}>
            <div className='album-cover'></div>
            <p>Song Name</p>
        </div>
    )    
}