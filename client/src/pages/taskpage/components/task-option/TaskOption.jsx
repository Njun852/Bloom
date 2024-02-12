import React from 'react'
import DropDown from '../../../../components/drop-down/DropDown'
import './assets/style.css'
import Arrow from './assets/arrow.png'

export default function TaskOption(props) {
    function changePage(e){
        const label = e.currentTarget.textContent.toLowerCase()
        props.setPage(label)
    }
    return (
        <div className='task-option flex'>
            <nav className='flex'>
                <button className={props.currentPage == 'today' ? 'selected' : ''} onClick={changePage}>Today</button>
                <button className={props.currentPage == 'important' ? 'selected' : ''} onClick={changePage}>Important</button>
                <button className={props.currentPage == 'tasks' ? 'selected' : ''} onClick={changePage}>Tasks</button>
            </nav>
            <DropDown filter={props.filter}/>
        </div>
    )
}