import React from 'react'
import './style.css'

export default function Music(props) {
    let _class = 'music flex '
    if(props.isCurrent) 
    _class += 'current-music'
    return (
        <div className={_class}>
            <img className='album-cover' src={props.cover}></img>
            <p>{props.name}</p>
        </div>
    )    
}