import React from 'react'
import Arrow from './assets/arrow.png'
import './assets/style.css'

export default function DropDown(props){
    const [sortElements, setSortElements] = React.useState(['Time', 'Importance'])
    const filters = {
        'Importance': () => props.filter(current => current.sort((a, b) => a.label.priority - b.label.priority))
    }
    function changePosition(e){
        const target = e.currentTarget.textContent
        setSortElements(current => {
            const others = current.filter(element => element != target)
            return [target, ...others]
        })
        console.log(target)
        if(target === 'Importance')
        props.filter(current => {
            return current.toSorted((a, b) => a.label.priority - b.label.priority)
        
        })
        const parent = e.currentTarget.parentElement
        parent.dataset.expand = parent.dataset.expand == 'false'
    }
    React.useEffect(()=> {
        const child = document.querySelectorAll('.drop-down')
        for(let i = 0; i < child.length; i++){
            const height = getComputedStyle(child[i].parentElement)
            .getPropertyValue('height')
            child[i].childNodes.forEach(child => child.style.height = height)
        }
    }, [])
    return (
    <div data-expand={false} className='drop-down flex'>
            {sortElements.map((txt, index) => ( <button  key={index} 
                className={index == 0 ? 'selected flex' : 'flex'}
                onClick={changePosition}>
                <span>{txt}</span>{index == 0 && <img src={Arrow} alt='arrow'/>}
            </button>))}
        </div>
    )
}