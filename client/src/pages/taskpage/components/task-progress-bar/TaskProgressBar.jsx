import React from 'react'
import './style.css'
export default function TaskProgressBar(props) {
    const styles = {
        width: `${props.progress*100}%`,
        backgroundColor: `hsl(${props.progress*144}, 81%, 59%)`
    }

    return (
        <div className='task-progress-bar'>
            <h3>{props.label}</h3>
            <div>
                <div style={styles}></div>
            </div>
        </div>
    )
}