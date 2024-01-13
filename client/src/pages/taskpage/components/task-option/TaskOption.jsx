import React from 'react'
import './assets/style.css'
import Arrow from './assets/arrow.png'

export default function TaskOption() {
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
    return (
        <div className='task-option flex'>
            <nav className='flex'>
                <button className='selected'>Today</button>
                <button>Important</button>
                <button>Task</button>
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