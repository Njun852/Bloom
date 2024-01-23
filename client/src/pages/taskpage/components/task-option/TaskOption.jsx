import React from 'react'
import './assets/style.css'
import Arrow from './assets/arrow.png'

export default function TaskOption(props) {
    const [sortElements, setSortElements] = React.useState(['Time', 'Importance'])

    function changePosition(e){
        const target = e.currentTarget.textContent
        setSortElements(current => {
            const others = current.filter(element => element != target)
            return [target, ...others]
        })
        const parent = e.currentTarget.parentElement
        parent.dataset.expand = parent.dataset.expand == 'false'
    }

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
            <div data-expand={false} className='flex'>
                {sortElements.map((txt, index) => ( <button  key={index} 
                    className={index == 0 ? 'selected flex' : 'flex'}
                    onClick={changePosition}>
                    {txt}{index == 0 && <img src={Arrow} alt='arrow'/>}
                </button>))}
            </div>
        </div>
    )
}